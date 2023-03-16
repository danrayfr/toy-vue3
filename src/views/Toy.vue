<script setup>
import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { ref, computed} from 'vue';

const name = ref('');
const description = ref('');
const images = ref([]);
// const user = ref('');
const error = ref([]);

const ADD_TOY_MUTATION = gql`
  mutation addToy($name: String!, $description: String!, $images: [String!]) {
    createToy(input: {
      name: $name,
      description: $description,
      images: $images
    }) {
      toy {
        id
        name
        description
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

  const variables = {
    name: name.value,
    description: description.value,
    images: images.value,
  }

  try {
    const { data } = await createToy(variables)
    if (data) {
      console.log(data.createToy?.toy);
    } else {
      console.log('Data is undefined');
    }
  }catch(e) {
    error.value = e.message || "An unknown error occured"
  }
};

// const create = async() => { 
  // if (!name.value && !description.value) {
  //   console.log("All fields are required.");
  //   return;
  // }

  // const variables = {
  //   name: name.value,
  //   description: description.value,
  //   images: images.value,
  //   user_token: user.value
  // };
// 
  // try { 
  //   const { data } = await createToy(variables);
// 
  //   const toy = computed(() => data.createToy);
  //   console.log(toy);
// 
// 
  //   return toy;
// 
  // } catch(e) { 
  //   error.value = e.message || "An unknown error occured";
  // }
//};

</script>

<template>
  <div>
    <h1>Toy Mutations</h1>
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