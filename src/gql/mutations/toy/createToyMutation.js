import { useRouter } from 'vue-router';
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { ref, computed} from 'vue';

export function createToyMutation() { 
  const name = ref('');
  const description = ref('');
  const images = ref([]);
  let error = ref('');
  const hasCreate = ref(false);

  const router = useRouter();


  const ADD_TOY_MUTATION = gql`
    mutation addToy($name: String!, $description: String!, $images: [String!]) {
      createToy(input: {
        name: $name,
        description: $description,
        images: $images,
      }) {
        toy {
          id
          name
          description
          imagesUrl
          postedBy {
            id
            name
          }
        }
      }
    }
  `;

  const { mutate: createToy, loading } = useMutation(ADD_TOY_MUTATION);

  const create = async() => {

    if (!name.value && !description.value) {
      console.log("All fields are required.");
      return;
    }

    hasCreate.value = true;
  
    const token = localStorage.getItem("token");
  
    if (!token) {
      console.log("User not authenticated");
      return;
    }
  
    const variables = {
      name: name.value,
      description: description.value,
      images: images.value
    }
    
    try {
      const { data } = await createToy(variables)
      
      const toy = computed(() => data.createToy?.toy ?? []);
      console.log("Toy:", toy.value);
  
      const errors = computed(() => data.createToy?.errors ?? []);
  
      error.value = errors;

      router.push({ name: 'toy-details', params: { id: toy.value.id }})
  
      return toy.value, errors;
  
    }catch(e) {
      error.value = e.message || "An unknown error occured"
      console.log("Error:", error.value);
    }finally {
      hasCreate.value = false;
    }
  };

  return { name, description, images, create, hasCreate, error }
}