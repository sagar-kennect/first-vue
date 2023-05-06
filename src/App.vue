<template>
  <h2>My Friend</h2>
  <friends-components name="sachin shelke" email="sachin@gmail.com" phone-number="885189617" ></friends-components>
  <friends-components  email="sachin@gmail.com"  name="Sagar Borude"></friends-components> 
  <student-components> </student-components>
  <employee-card> </employee-card>
</template>

<script>
import FriendsComponents from './components/FriendsComponents.vue'
import StudentComponents from './components/StudentComponents.vue'
import EmployeeCard from './components/EmployeeComponent.vue'
export default{
  components: { FriendsComponents,StudentComponents, EmployeeCard },
  data() {
    return {  
      friends: [
        {
          id: "0002",
          name: "Sagar Borude",
          phone: "8805189617",
          email:'sagar.html5@gmail.com'
      },{
          id: "0002",
          name: "Sagar Borude",
          phone: "8805189617",
          email:'sagar.html5@gmail.com'
      },{
          id: "0002",
          name: "Sagar Borude",
          phone: "8805189617",
          email:'sagar.html5@gmail.com'
      },
    ]
  }
}
}
</script>