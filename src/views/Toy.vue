<template>
  <div>
    <h1 class="text-3xl font-bold underline">Toy Mutations</h1>
    <form action="" method="POST" @submit.prevent="create">
      <div>
        <input type="name" v-model="name" placeholder="Enter the name of the toy">
      </div>

      <div>
        <textarea v-model="description" placeholder="toy description...">
        </textarea>
      </div>

      <div>
        <button type="submit">Create Toy</button>
      </div>
    </form>
  </div>
  <div v-if="error">{{error}}</div>
</template>

<script setup>
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { ref, computed} from 'vue';
import { getHeaders } from '../../apolloClient.js';

const name = ref('');
const description = ref('');
const images = ref([]);
// const user = ref('');
let error = ref('');

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

const { mutate: createToy } = useMutation(ADD_TOY_MUTATION);

const create = async() => {

  if (!name.value && !description.value) {
    console.log("All fields are required.");
    return;
  }

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
    
    console.log("Data:", data);

    const createToyResult = data.createToy;
    console.log("createToyResult:", createToyResult);

    const toy = computed(() => createToyResult?.toy ?? []);
    console.log("Toy:", toy.value);

    const errors = computed(() => createToyResult?.errors ?? []);
    console.log("Errors:", errors.value);

    error.value = errors;

    return toy.value;

  }catch(e) {
    error.value = e.message || "An unknown error occured"
    console.log("Error:", error.value);
  }
};

</script>

<style scoped>
textarea {
  width: 30%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-size: 12px;
  resize: none;
}
</style>