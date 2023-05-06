<template>
  <div @click="toggle" class="card" :class="{ active: activeCard }">
    <p>
      Name :<span>{{ name }}</span>
    </p>
    <p>
      Email :<span>{{ email }}</span>
    </p>
    <p>
      Phone : <span>{{ phoneNumber }}</span>
    </p>
  </div>
  <button @click="$emit('delete', id)">Delete</button>
</template>
<script>
export default {
  props: ["email", "name", "phoneNumber", "id"],
  emits: ["delete"],
  data() {
    return {
      activeCard: false,
    };
  },
  methods: {
    toggle() {
      console.log(this.activeCard);
      this.activeCard = !this.activeCard;
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px;
}

.card {
  background-color: lime;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: fit-content;
  padding: 10px;
}
button {
  width: fit-content;
}

.active {
  background-color: aqua;
}
</style>
