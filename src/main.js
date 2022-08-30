import App from './App.vue'
import  apolloClient from './apolloClient'
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import './index.css'
import router from './routers/index'
import { createAuth0 } from '@auth0/auth0-vue';
const app = createApp({
    setup() {
        provide(DefaultApolloClient,apolloClient)
    },

    render: () => h(App),
})

app.use(
  createAuth0({
    domain: "dev-o3y-1362.us.auth0.com",
    client_id: "jGrVXGZ8FlVXt1I7dxBUynyYqlvJsPoN",
    redirect_uri: window.location.origin
  })
);

app.use(router)
app.mount("#app");

export default App;