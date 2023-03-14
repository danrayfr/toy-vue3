<script setup>
import { queryToys } from "@/gql/query/queryToys"

let { toys, error, loading } = queryToys();
</script>


<template>
  <div class="about">
    <h1>Toy Query</h1>

    <div v-if="error">{{ error }}</div>
    <div v-if="loading">Loading....</div>
    <table v-else class="toys" >
     <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Images</th>
        <th>Posted by</th>
      </tr>
      <tr v-for="toy in toys" :key="toy.id">
        <td>{{ toy.id }}</td>
        <td>{{ toy.name }}</td>
        <td>{{ toy.description }}</td>
        <div v-if="toy.images.length">
          <div v-for="image in toy.images" :key="image">
            <td>{{ image }}</td>
          </div>
        </div>
        <div v-else><td>No image available.</td></div>
        <td>{{ toy.postedBy.name }}</td>
      </tr>
     </thead>
    </table>
  </div>
</template>

<style scoped>
.toys { 
  border-collapse: collapse;
  width: 100%;
}

.toys td, .toys th {
  border: 1px solid #ddd;
  padding: 8px;
}

.toys tr:nth-child(even){background-color: #f2f2f2;}

.toys tr:hover {background-color: #ddd;}

.toys th { 
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}

</style>