<script setup>
import { queryUsers } from "@/gql/query/queryUsers";

let { users, error, loading } = queryUsers();
</script>

<template>
  <div class="about">
    <h1>User Query</h1>

    <div v-if="error">{{ error }}</div>
    <div v-if="loading">Loading....</div>
    <table v-else class="users" >
     <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Admin</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.admin }}</td>
      </tr>
     </thead>
    </table>
  </div>
</template>

<style scoped>
.users { 
  border-collapse: collapse;
  width: 100%;
}

.users td, .users th {
  border: 1px solid #ddd;
  padding: 8px;
}

.users tr:nth-child(even){background-color: #f2f2f2;}

.users tr:hover {background-color: #ddd;}

.users th { 
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}

</style>