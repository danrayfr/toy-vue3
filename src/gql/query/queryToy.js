import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable'
import { gql } from "graphql-tag";

export function queryToy(id) {

  const QUERY_TOY_BY_ID = gql`
    query toyDetails($id: ID!){
      toy(id: $id) {
        name
        description
        imagesUrl
        createdAt
        postedBy {
          name
        }
      }
    }
  `;
  
  const variables = { 
    id: id,
  }

  const { result, error, loading } = useQuery(QUERY_TOY_BY_ID, variables);
  const toy = computed(() => result.value?.toy ?? []);

  const images = computed(() => {
    if (toy.value.imagesUrl && toy.value.imagesUrl.length) {
      return toy.value.imagesUrl.map((image) => {
        return "http://127.0.0.1:3000/" + image;
      });
    } else {
      return ["https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg"];
    }
  });

  const formattedTime = computed(() => { 
    const dateTime = new Date(toy.value.createdAt);
    const options = { 
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: "UTC"
    };
  
    return dateTime.toLocaleString("en-US", options);
  });

  return { formattedTime, images, toy, error, loading };

}