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
        <button class="submit" type="submit" :disabled="hasCreate">Create Toy</button>
      </div>
      
    </form>
  </div>
  <div v-if="error">{{error}}</div>
</template>

<script setup>
import { createToyMutation } from "@/gql/mutations/toy/createToyMutation.js";

let { name, description, images, create, hasCreate, error } = createToyMutation();

</script>

<style scoped>

button[disabled] { 
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed !import ant;
}

</style>