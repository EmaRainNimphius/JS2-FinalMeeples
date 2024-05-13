
// imports for styling
import '/src/scss/app.scss'

// import bootstrap
import 'bootstrap'

// added for firebase
import '/src/firebase.js'
import { firebaseApp } from "./firebase";


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueFire } from "vuefire";
import { VueFireFirestoreOptionsAPI } from 'vuefire'

const app = createApp(App)

app.use(router);
app.use(VueFire, {
    firebaseApp,
    modules: [
        // to use the `firestore` option
        VueFireFirestoreOptionsAPI(),
    ]
});
app.mount("#app");

