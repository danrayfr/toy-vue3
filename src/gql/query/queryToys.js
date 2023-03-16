import { useQuery } from '@vue/apollo-composable'
import { gql } from "graphql-tag";
import { computed } from "vue";

export function queryToys() {
  const ALL_TOYS_QUERY = gql`
    query {
      allToys {
        id
        name
        description
        imagesUrl
        postedBy {
          name
        }
      }
    }
  `;

  const { result, error, loading } = useQuery(ALL_TOYS_QUERY);
  const toys = computed(() => result.value?.allToys ?? []);
  
  return { toys, error, loading };
}