<template>
  <div class="container">
    <h3
      class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10"
    >
      Toggle Services
    </h3>
    <div class="form-group px-10 py-20">
      <label class="text-gray-700" for="eventType">Event Type </label>
      <select v-model="selectedEventType" class="form-control" id="eventType">
        <option value="">Select an event type</option>
        <option
          v-for="eventType in eventTypes"
          :key="eventType"
          :value="eventType"
        >
          {{ eventType }}
        </option>
      </select>
    </div>
    <div v-if="selectedEventType" class="form-group">
      <label>Services</label>
      <div v-for="service in services" :key="service.id">
        <div class="form-check">
          <input
            type="checkbox"
            class="form-check-input"
            :id="service.id"
            :value="service"
            v-model="selectedServices"
          />
          <label class="form-check-label" :for="service.id">{{
            service.name
          }}</label>
        </div>
      </div>
    </div>
    <div class="text-align" v-if="selectedServices.length > 0">
      <h4>Selected Services:</h4>
      <ul>
        <li v-for="service in selectedServices" :key="service.id">
          {{ service.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eventTypes: ['User Event 1', 'User Event 2', 'User Event 3'],
      selectedEventType: '',
      services: [
        { id: 1, name: 'Family Support' },
        { id: 2, name: 'Adult Education' },
        { id: 3, name: 'Youth Services Program' },
        { id: 4, name: 'Service 4' },
        { id: 5, name: 'Service 5' }
      ],
      selectedServices: []
    }
  }
}
</script>
