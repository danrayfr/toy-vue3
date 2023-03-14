import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { ref, computed } from 'vue';

export function mutateSignIn() {
  let email = ref('');
  let password = ref('');
  let error = ref([]);

  const SIGN_IN_MUTATION = gql`
    mutation signUser($email: String!, $password: String!) {
      signInUser(input: {
        credentials: {
          email: $email,
          password: $password
        }
      }), {
        user {
          id
          name
          email
          admin
        }
        token
        errors
      }
    }
  `;

  const { mutate: signInUser, loading } = useMutation(SIGN_IN_MUTATION);

  const login = async() => {
    if (!email.value || !password.value) {
      console.error("Email and password are both required");
      return;
    }
    
    const variables = {
      email: email.value,
      password: password.value,
    };

    try { 
      const { data } = await signInUser(variables);
      
      const user = computed(() => data.signInUser?.user ?? [])
      const token = computed(() => data.signInUser?.token ?? "")
      error = computed(() => data.signInUser?.errors ?? [])

      if (user.value != 0 && token.value != "") {
        console.log("User: ", user.value);
        console.log("Token: ", token.value);
      }

      if(error.value != 0) {
        console.log(error.value);
      }

      localStorage.setItem('token', JSON.stringify(token.value));

      return user, token, email.value

    } catch(e) { 
      error.value = e.message || 'An unknown error occurred';
    }
  }

  return { email, password, login }
} 