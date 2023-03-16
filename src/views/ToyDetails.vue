<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="loading">Loading...</div>
  <div v-else class="container mx-auto px-4 sm:px-0 py-8 sm:py-20">

  <div class="flex flex-wrap justify-center">
    <div class="image-wrapper" v-for="image in images" :key="image">
      <div class="relative w-64 h-64 sm:w-80 sm:h-80 m-4 overflow-hidden">
        <img class="object-fit object-center w-full h-full" :src="image" :alt="toy.name">
      </div>
    </div>
  </div>

    <div class="text-gray-700  text-2xl font-bold mb-4">
        {{toy.name}}
    </div>
    <div class="flex flex-col sm:flex-row sm:items-center justify-between px-56"> 
        <div class="flex items-center text-gray-500">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-gray-600 mb-1.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>
            <div class="ml-4 text-gray-500"> {{ toy.postedBy.name }} </div> 
        </div>
        
        <div class="flex items-center text-gray-500">
            <div>
                <svg class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </div>
            <div class="ml-2 text-gray-500">{{ formattedTime }}</div>
        </div>
    </div>

    <div class="mt-2 sm:mt-4">
        <div class="mt-6 sm:mt-6 text-gray-800" v-html="toy.description">

        </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { gql } from "graphql-tag";
import { queryToy } from '@/gql/query/queryToy';


const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

let { formattedTime, images, toy, error, loading } = queryToy(props.id);

</script>

<style scoped>
.image-wrapper {
  margin-right: 30px;
}
</style>