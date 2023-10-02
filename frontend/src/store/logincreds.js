import { defineStore } from 'pinia'

//defining a store
export const useLoggedInUserStore = defineStore({
  // id is only required for devtools with the Pinia store
  id: 'loggedInUser',
  //central part of the store
  state: () => {
    return {
      name: "",
      role:0,
      isLoggedIn: false,
    }
  },
  // equivalent to methods in components, perfect to define business logic
  actions: {
    async login(username, password) {
      try {
        const response = await apiLogin(username, password);
        this.$patch({
          isLoggedIn: response.isAllowed,
          role: response.role,
          name: response.name
        })
        if (response.isAllowed) {
          this.$router.push("/");
        } else {
          this.$store.commit("setUser", null);
          alert("Invalid credentials. Please try again.");
        }
      } catch(error) {
        console.log(error)
        alert("Invalid Username/Password")
      }
    },
    logout() {
      this.patch({
        name: "",
        role: 0,
        isLoggedIn: false
      });

      // we could do other stuff like redirecting the user
    }
  }
});
;
function apiLogin(u, p) {
  if (u === "admin" && p === "admin") {
    return Promise.resolve({ isAllowed: true, role: 1, name: "Admin" });
  }
  if (u === "viewer" && p === "viewer") {
    return Promise.resolve({ isAllowed: true, role: 2, name: "Viewer" });
  }
  return Promise.reject(new Error("invalid"));
}
