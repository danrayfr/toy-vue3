<template>
    <router-link
        :to="to">
        {{ label }}
    </router-link>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    to: {
        type: String, 
        required: true
    },
    label: {
        type: String,
        required: true
    }
});

</script>
