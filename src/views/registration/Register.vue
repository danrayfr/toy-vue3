<script setup>
import { mutateCreateUser } from "@/gql/mutations/registrations/mutateCreateUser.js"

let { name, email, password, error, hasRegister, register } = mutateCreateUser();
</script>

<template>
  <div>
    <h1>Register</h1>

    <form action="" method="POST" @submit.prevent="register">
      <div>
        <input type="name" v-model="name" placeholder="Enter your name">
      </div>

      <div>
        <input type="email" v-model="email" placeholder="Enter your email">
      </div>
      
      <div>
        <input type="password" v-model="password" placeholder="Enter your password">
      </div>      
      <div>
        <button type="submit" :disabled="hasRegister">Register</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
button[disabled] { 
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed !important;
}

</style>
