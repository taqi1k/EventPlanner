<script>
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API
import { useLoggedInUserStore } from "@/store/logincreds";

export default {
  name: 'App',
  data() {
    return {
      orgName: 'Dataplatform'
    }
  },
  created() {
    axios.get(`${apiURL}/org`).then((res) => {
      //this.orgName = res.data.name
      console.log(res.data)
    })
  },
  setup() {
    const user = useLoggedInUserStore();
    return { user };
  }
}


</script>


<template>
  <main class="flex flex-row">
    <div id="_container" class="h-screen">
      <header class="w-full">
        <section class="text-center">
          <img class="m-auto" src="@\assets\DanPersona.svg" />
        </section>
        <nav class="mt-10">
          <ul class="flex flex-col gap-4">
            <li>
              <router-link to="/login">
                <span style="position: relative; top: 6px"
                class="material-icons">person</span>Login
              </router-link>
            </li>
            <li>
              <router-link to="/">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >dashboard</span
                >
                Dashboard
              </router-link>
            </li>
            <li v-if="user.isLoggedIn && user.role === 1">
              <router-link to="/intakeform">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >people</span
                >
                Client Intake Form
              </router-link>
            </li>
            <li v-if="user.isLoggedIn && user.role === 1">
              <router-link to="/eventform">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >event</span
                >
                Create Event
              </router-link>
            </li>
            <li v-if="user.isLoggedIn && user.role === 1">
              <router-link to="/addService">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >event</span
                >
                Add Services
              </router-link>
            </li>
            <li v-if="user.isLoggedIn && (user.role === 1 || user.role === 2)">
              <router-link to="/findclient">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Client
              </router-link>
            </li>
            <li v-if="user.isLoggedIn && (user.role === 1 || user.role === 2)">
              <router-link to="/findevents">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Event
              </router-link>
            </li>
            <li v-if="user.isLoggedIn && (user.role === 1 || user.role === 2)">
              <router-link to="/findServices">
                <span
                  style="position: relative; top: 6px"
                  class="material-icons"
                  >search</span
                >
                Find Service
              </router-link>
            </li>
            <li v-if="user.isLoggedIn">
                <br>
                <a href="">
                  <span
                  @click="store.logout()" class="nav-link"><i style="position: relative; top: 6px"
                  class="material-icons">logout</i>
                  </span> Logout 
                </a>
              </li>
          </ul>
        </nav>
      </header>
    </div>
    <div class="grow w-4/5">
      <section
        class="justify-end items-center h-24 flex"
        style="background: linear-gradient(250deg, #c8102e 70%, #efecec 50.6%)"
      >
        <h1 class="mr-20 text-3xl text-white">{{ this.orgName }}</h1>
      </section>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>




<style>
#_container {
  background-color: #c8102e;
  color: white;
  padding: 10px;
  height: 1200px;
  position: relative;
}
</style>
