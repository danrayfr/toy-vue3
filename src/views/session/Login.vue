<script setup>
import { useMutation, provideApolloClient } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { ref, computed, watchEffect } from 'vue';

const email = ref('');
const password = ref('');

const SIGN_IN_MUTATION = gql`
  mutation SignInUser($email: String!, $password: String!) {
    signInUser(input: {
      credentials: {
        email: $email,
        password: $password
      }
    }) {
      user {
        id
        name
        email
      }
      token
      errors
    }
  }
`;


const login = async () => {
  console.log(email.value, password.value)
  if (!email.value || !password.value) {
    console.error("Email and password are required.");
    return;
  }
  
  const { mutate } = useMutation(SIGN_IN_MUTATION);
  const { data, error } = await mutate({
    variables: {
      email: email.value,
      password: password.value,
    },
  });

  // console.log(data);

  const user = computed(() => data?.signInUser?.user);
  const token = computed(() => data?.signInUser?.token);

  // console.log(user.value);
  // console.log(token.value);
};

</script>

<template>
  <div>
    <h1>Login goes here.</h1>

    <form action="" method="POST" @submit.prevent="login">
      <div>
        <input type="email" v-model="email" placeholder="Enter your email">
      </div>
      
      <div>
        <input type="password" v-model="password" placeholder="Enter your password">
      </div>

      <p>{{ email }}</p>
      <p>{{ password }}</p>
      
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</template>