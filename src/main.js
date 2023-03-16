import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

import { provideApolloClient } from '@vue/apollo-composable'
import { getHeaders } from '../apolloClient';
let { apolloClient } = getHeaders();

const app = createApp({
  setup () {
    provideApolloClient(apolloClient);
  },

  render: () => h(App),
})

app.use(router).mount('#app')
