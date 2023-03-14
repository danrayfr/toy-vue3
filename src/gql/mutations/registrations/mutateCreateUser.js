import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import { ref, computed } from 'vue';

export function mutateCreateUser() { 
  let name = ref('');
  let email = ref('');
  let password = ref('');
  let error = ref([]);
  const hasRegister = ref(false)

  const CREATE_USER_MUTATION = gql`
    mutation createUser($name: String!, $email: String!, $password: String!) {
      createUser(input: {
        name: $name,
        authProvider: {
          credentials: {
            email: $email,
            password: $password
          }
        }
      }), {
        user {
          id
          name
          email
          activated
        }
        errors
      }
    }
  `;
  console.log(hasRegister.value)
  const { mutate: createUser, loading } = useMutation(CREATE_USER_MUTATION);

  const register = async() => {
    
    if (!name.value || !email.value || !password.value) {
      console.error("All fields in the registration are required.");
      return;
    }

    hasRegister.value = true;
    
    const variables = {
      name: name.value,
      email: email.value,
      password: password.value,
    };

    try { 
      const { data } = await createUser(variables);
      
      const user = computed(() => data.createUser?.user ?? []);
      error = computed(() => data.createUser?.errors ?? []);

      if (user.value != 0) {
        console.log("user:", user.value);
      }

      if (error.value != 0) { 
        console.log("error:", error.value);
      }

      hasRegister.value = false;
      return user, error.value

    } catch(e) { 
      error.value = e.message || 'An unknown error occurred';
      hasRegister.value = false;
    }
  };

  return { name, email, password, error, hasRegister, register }
}