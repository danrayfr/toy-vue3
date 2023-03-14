import { useQuery } from '@vue/apollo-composable'
import { gql } from "graphql-tag";
import { computed } from "vue";

export function queryUsers() {
  const ALL_USERS_QUERY = gql`
    query {
      allUsers { 
        id
        name
        email
        admin
      }
    }
  `;

  const { result, error, loading } = useQuery(ALL_USERS_QUERY);
  const users = computed(() => result.value?.allUsers ?? []);
  
  return { users, error, loading };
}