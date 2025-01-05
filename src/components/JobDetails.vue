<script setup lang="ts">
defineProps({
  job: Object,
})
</script>

<template>
  <VCard
    v-if="job"
    class="job-card"
    outlined
  >
    <VCardTitle>{{ job.title }}</VCardTitle>
    <VCardSubtitle>{{ job.location }}</VCardSubtitle>

    <VCardText>
      <p>{{ job.description }}</p>
      <p><strong>Salary:</strong> ${{ job.salary }}</p>
    </VCardText>
  </VCard>
</template>
