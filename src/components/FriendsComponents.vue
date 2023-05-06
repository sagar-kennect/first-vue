<template>
  <div @click="toggle" class="card" :class="{active:activeCard }" >
  <p>Name  :<span>{{name}}</span> </p>
  <p>Email :<span>{{email}}</span></p>  
  <p> Phone : <span>{{phoneNumber}}</span></p>
</div>
</template>
<script>
export default {
        props:['email','name','phoneNumber'],
  data() {
    return {

      activeCard: false,
      friend:  {
          id: "0002",
          name: "Sagar Borude",
          phone: "8805189617",
          email:'sagar.html5@gmail.com'
      }
    }
  },
   methods: {
    toggle() {
      console.log(this.activeCard)
      this.activeCard = !this.activeCard
    }
  }
}
</script>

<style>

#app{
display: flex;
flex-direction: column;
gap: 20px;
padding:50px;

}

.card{
background-color: lime;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: fit-content;
  padding: 10px;
}


.active{
  background-color: aqua;
}

</style>