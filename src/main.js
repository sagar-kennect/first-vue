import { createApp } from 'vue'
import App from './App.vue'
import FriendContact from "./components/FriendsComponents.vue"
import StudentComponents from "./components/StudentComponents.vue"
import EmployeeCard from "./components/EmployeeComponent.vue"

const app = createApp(App)
app.component('user-component', FriendContact)
app.component('student-components', StudentComponents)
app.component('employee-component', EmployeeCard)
app.mount('#app')


