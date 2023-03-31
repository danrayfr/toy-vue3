<template>
  <div class="py-12">
    <h1 class="text-5xl font-bold mb-6">Toy List</h1>
    <div v-if="error">{{error}}</div>
    <div v-if="loading">Loading....</div>
    <div v-else class="container mx-auto">
      <Toys :toys="toys"/>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { queryToys } from "@/gql/query/queryToys"
import Toys from "@/components/Toys.vue";

let { toys, error, loading } = queryToys();

</script>