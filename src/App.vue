<template>
  <h2>My Friend</h2>
  <new-friend @add-contact="addContact"> </new-friend>

  <br />
  <friends-components
    v-for="friend in friends"
    :key="friend.id"
    :id="friend.id"
    :name="friend.name"
    :phone-number="friend.phone"
    :email="friend.email"
    @delete="deleteContact"
  ></friends-components>
  <student-components> </student-components>
  <employee-card> </employee-card>
</template>

<script>
import FriendsComponents from "./components/FriendsComponents.vue";
import StudentComponents from "./components/StudentComponents.vue";
import EmployeeCard from "./components/EmployeeComponent.vue";
import NewFriend from "./components/NewFriendsComponent.vue";

export default {
  components: { FriendsComponents, StudentComponents, EmployeeCard, NewFriend },
  data() {
    return {
      friends: [
        {
          id: "0001",
          name: "Sagar Borude",
          phone: "8805189617",
          email: "sagar.html5@gmail.com",
        },
        {
          id: "0002",
          name: "Kiran  Shinde",
          phone: "8805189617",
          email: "sagar.html5@gmail.com",
        },
        {
          id: "0003",
          name: "Nilesh Jadhav",
          phone: "8805189617",
          email: "sagar.html5@gmail.com",
        },
        {
          id: "0004",
          name: "Nilesh Jadhav",
          phone: "8805189617",
          email: "sagar.html5@gmail.com",
        },
      ],
    };
  },
  methods: {
    addContact(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
      };
      this.friends.push(newFriendContact);
    },
    deleteContact(friendId) {
      console.log(friendId);
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    },
  },
};
</script>
