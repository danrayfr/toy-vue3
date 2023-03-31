<template>
  <div>
    <h1 class="text-3xl font-bold underline">Toy Mutations</h1>
    <form action="" method="POST" @submit.prevent="update">
      <div>
        <input type="name" v-model="name" placeholder="Enter the name of the toy">
      </div>

      <div>
        <textarea v-model="description" placeholder="toy description...">
        </textarea>
      </div>

      <div>
        <button class="submit" type="submit">Update Toy</button>
      </div>
    </form>
  </div>
  <div v-if="error">{{error}}</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { ref, computed, defineProps } from 'vue';

const props = defineProps({
  id: {
    type: String, 
    required: true
  }
});

const name = ref('');
const description = ref('');
const images = ref([]);
let error = ref('');

const router = useRouter();

const UPDATE_TOY_MUTATION = gql`
  mutation updateToy($id: ID!, $name: String!, $description: String!, $images: [String!]) { 
    updateToy(input: { 
      id: $id,
      name: $name,
      description: $description,
      images: $images
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

const { mutate: updateToy, loading } = useMutation(UPDATE_TOY_MUTATION);

const update = async() => {
  if (!name.value && !description.value) {
    console.log("All fields are required.");
    return;
  }

  const variables = {
    id: props.id,
    name: name.value,
    description: description.value,
    images: images.value
  }

  try {
      const { data } = await updateToy(variables)
      
      const toy = computed(() => data.updateToy?.toy ?? []);
      console.log("Toy:", toy.value);
  
      const errors = computed(() => data.updateToy?.errors ?? []);
  
      error.value = errors;

      router.push({ name: 'toy-details', params: { id: toy.value.id }})
  
      return toy.value, error.value;
  
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
  font-size: 1em;
  resize: none;
}

button[disabled] { 
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed !important;
}
</style>
