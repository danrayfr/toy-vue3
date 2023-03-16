<template>
  <Navbar />
  <router-view />
</template>

<script setup>
import Navbar from '@/components/layouts/Navbar';
</script>


<style>
nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
