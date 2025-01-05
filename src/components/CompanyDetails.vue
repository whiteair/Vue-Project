<script setup lang="ts">
defineProps({
  company: Object,
})
</script>

<template>
  <div
    v-if="company"
    class="company-details"
  >
    <h2>{{ company.name }}</h2>
    <p>{{ company.description }}</p>
    <p><strong>Industry:</strong> {{ company.industry }}</p>
  </div>
</template>
