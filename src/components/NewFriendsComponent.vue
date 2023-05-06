<template>
  <h1>{{ text }}</h1>

  <form @submit.prevent="submitForm()">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" v-model="inputName" /><br /><br />

    <label for="email">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      v-model="inputPhone"
    /><br /><br />

    <label for="phone">Phone:</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      v-model="inputEmail"
    /><br /><br />

    <input type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      text: "Add new friend ",
      inputName: "",
      inputPhone: "",
      inputEmail: "",
    };
  },
  methods: {
    submitForm() {
      this.$emit(
        "add-contact",
        this.inputName,
        this.inputPhone,
        this.inputEmail
      );
      console.log(this.inputName);
    },
  },
};
</script>

<style></style>
