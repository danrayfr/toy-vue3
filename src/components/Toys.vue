<template>
<div class="min-h-screen bg-gradient-to-tr from-teal-200 to-indigo-300 flex justify-center items-center py-20">
  <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
    <div v-for="toy in toys" :key="toy.id">
      <Toy :toy="toy"/>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import Toy from "@/components/Toy.vue";

const props = defineProps({
  toys: { 
    type: Object
  }
});

</script>