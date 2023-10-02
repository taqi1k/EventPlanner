<template>
  <main>
    <h1
      class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
    >
      Update Service
    </h1>
    <div class="px-10 py-20">
      <!-- @submit.prevent stops the submit event from reloading the page-->
      <form @submit.prevent="handleSubmitForm">
        <!-- grid container -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
        >
          <h2 class="text-2xl font-bold">Service Details</h2>
          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Service Name</span>
              <span style="color: #ff0000">*</span>
              <input
                type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder
                v-model="services.name"
              />
              <span class="text-black" v-if="v$.services.name.$error">
                <p
                  class="text-red-700"
                  v-for="error of v$.services.name.$errors"
                  :key="error.$uid"
                >
                  {{ error.$message }}!
                </p>
              </span>
            </label>
          </div>

          <!-- form field -->
          <div class="flex flex-col">
            <label class="block">
              <span class="text-gray-700">Service Description</span>
              <input
                type="text"
                class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder
                v-model="services.description"
              />
            </label>
          </div>

          <!-- form field -->
          <label class="block">
            <span class="text-gray-700">Status</span>
            <span style="color: #ff0000">*</span>
             <select v-model="services.status" class="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
          </label>
          </div>
          </form>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
        >
          <div class="flex justify-between mt-10 mr-20">
            <button
              @click="handleServiceUpdate"
              type="submit"
              class="bg-green-700 text-white rounded"
            >
              Update Service
            </button>
          </div>
          <div class="flex justify-between mt-10 mr-20">
            <button
              @click="serviceDelete"
              type="submit"
              class="bg-red-700 text-white rounded"
            >
              Delete Event
            </button>
          </div>
          </div>
  </main>
</template>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>



<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import axios from 'axios'
const apiURL = import.meta.env.VITE_ROOT_API
export default {
  props: ['id'],
  setup() {
    return { v$: useVuelidate({ $autoDirty: true }) }
  },
  data() {
    return {
      services: {
        name: '',
        description: '',
        status: '',
        }
      }
    },
    created() {
      axios.get(`${apiURL}/services/id/${this.$route.params.id}`).then((res) => {
        this.services = res.data
    })
},
methods: {
  // update service by service id
  async handleServiceUpdate() {
    const isFormCorrect = await this.v$.$validate()
    if (isFormCorrect) {
      axios
          .put(`${apiURL}/services/update/${this.id}`, this.services)
          .then(() => {
            alert('Update has been saved.')
            this.$router.back()
          })
      }
    },
  // Delete service by service id
  serviceDelete() {
    axios.delete(apiURL + '/services/' + this.id)
      .then(() => {
        alert('Service has been deleted.')
        this.$router.push({ name: 'findservices' })
      })
      .catch((error) => {
        console.error(error)
      })
  }
},
  // sets validations for the various data properties
  validations() {
    return {
      services: {
        name: { required },
        description: {  },
        status: { required }
      }
    }
  }
}
</script>
﻿
