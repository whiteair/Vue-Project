<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'

// Props
const props = defineProps<{
  companyId: number
}>()

const relatedJobs = ref([])
const errorMessage = ref('')

// Fetch related jobs by company ID
const fetchRelatedJobs = async () => {
  if (!props.companyId)
    return // Prevent API call if companyId is missing

  try {
    const response = await axios.get(
      `http://localhost:8000/api/v1/jobs?company_id=${props.companyId}`,
    )

    relatedJobs.value = response.data
  }
  catch (error) {
    console.error('Error fetching related jobs:', error)
    errorMessage.value = 'Failed to load related jobs.'
  }
}

// Navigate to job detail
const navigateToJob = (jobId: number) => {
  window.location.href = `/job/${jobId}`
}

onMounted(() => {
  fetchRelatedJobs()
})
</script>

<template>
  <div>
    <h3 class="mt-5 mb-2">
      Related Jobs
    </h3>

    <p
      v-if="errorMessage"
      class="error"
    >
      {{ errorMessage }}
    </p>

    <VList v-if="relatedJobs.length">
      <VListItem
        v-for="relatedJob in relatedJobs"
        :key="relatedJob.id"
        @click="navigateToJob(relatedJob.id)"
      >
        <VListItemTitle>{{ relatedJob.title }}</VListItemTitle>
        <VListItemSubtitle>{{ relatedJob.location }}</VListItemSubtitle>
      </VListItem>
    </VList>
    <p v-else>
      No related jobs found.
    </p>
  </div>
</template>
