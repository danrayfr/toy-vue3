<template>
  <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
        <div class="relative" >
          <img class="object-fit h-48 w-96" :src="image"/>
          <!-- p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">FREE</!-->
        </div>
        <router-link :to="{name: 'toy-details', params: { id: toy.id }}">
          <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer hover:text-indigo-600">{{toy.name}}</h1>
        </router-link>
        <div class="my-4">
          <div class="flex space-x-1 items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
            <div v-html="snippet"></div>
          </div>
          <div class="flex space-x-1 items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <p>{{formattedTime}}</p>
          </div>
          <div class="flex space-x-1 items-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 text-indigo-600 mb-1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
              </svg>
            </span>
            <p>{{ toy.postedBy.name}}</p>
          </div>.
          <router-link :to="{name: 'toy-details', params: { id: toy.id }}">
            <button class="mt-4 text-xl w-full text-white bg-indigo-600 hover:bg-indigo-700 py-2 rounded-xl shadow-lg">View</button>
          </router-link>
        </div>
      </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  toy: {
    type: Object
  }
});

const formattedTime = computed(() => { 
  const dateTime = new Date(props.toy.createdAt);
  const options = { 
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC"
  };

  return dateTime.toLocaleString("en-US", options);
});

const snippet = computed(() => {
  return props.toy.description.substring(0, 80) + '....'
});

const image = computed(() => {
  if (props.toy.imagesUrl.length > 0) { 
    return "http://127.0.0.1:3000/" + props.toy.imagesUrl[0];
  } else {
    return "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg";
  }
});


const isAuthenticated = computed(() => {
    return localStorage.getItem('token');
});

</script>