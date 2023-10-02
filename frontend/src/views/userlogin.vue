<template>
    <div class="login">
      <form id="login" @submit.prevent="store.login(username, password)" novalidate="true">
        <div class="form-group">
          <label style="color: red;">User name</label>
          <input type="text" class="form-control" v-model="username" placeholder="username" required>
        </div>
  
        <div class="form-group">
          <label style="color: red;">Password</label>
          <input type="password" class="form-control" v-model="password" placeholder="password" required>
        </div>
  
        <button class="btn btn-danger mt-3" style="background-color: red; font-size: 1.5em;">Login</button>
      </form>
    </div>
  </template>
  
  <style>
    .login {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80vh;
      background-color: #f8f9fa;
    }
    

    form {
      background-color: white;
      padding: 3em;
      border-radius: 1em;
      box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
      width: 150em;
      max-width: 90%;
    }
  
    input[type="text"],
    input[type="password"] {
      width: 100%;
      padding: 0.5em;
      font-size: 1.2em;
      border-radius: 0.5em;
      border: 1px solid #ccc;
      margin-top: 0.5em;
    }
  
    button {
      border: none;
      color: white;
      border-radius: 0.5em;
      padding: 1em;
      cursor: pointer;
      width: 100%;
      margin-top: 1em;
    }
  
    button:hover {
      background-color: #dc3545;
    }
  </style>
  

<script>
import { useLoggedInUserStore } from "@/store/logincreds";
export default {
  data: () => {
    return {
      username: "",
      password: "",
    };
  },
  setup() {
    const store = useLoggedInUserStore()
    return {
      store,
    }
  }
};
</script>


