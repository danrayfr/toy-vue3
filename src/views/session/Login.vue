<script setup>
import { mutateSignIn } from "@/gql/mutations/sessions/mutateSignIn.js";

let { email, password, login } = mutateSignIn();

</script>

<template>
  <div>
    <h1>Login</h1>

    <form action="" method="POST" @submit.prevent="login">
      <div>
        <input type="email" v-model="email" placeholder="Enter your email">
      </div>
      
      <div>
        <input type="password" v-model="password" placeholder="Enter your password">
      </div>      
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>
