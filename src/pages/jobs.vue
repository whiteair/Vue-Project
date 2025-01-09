<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { apiClient } from '@/utils/api'
import JobCard from '@/components/JobCard.vue'

// Define job interface
interface Job {
  id: number
  title: string
  description: string
  salary: number
  location: string
  status: 'active' | 'inactive'
  company_id: number
}

const jobs = ref<Job[]>([])

const fetchJobs = async () => {
  try {
    const response = await apiClient.get<Job[]>('/jobs')

    jobs.value = response.data
  }
  catch (error) {
    console.error('Error fetching jobs:', error)
  }
}

const navigateToJobDetails = (jobId: number) => {
  window.location.href = `/job/${jobId}`
}

const applyToJob = (jobId: number) => {
  console.log('Applying done')
}

onMounted(() => {
  fetchJobs()
})

// Keep the page metadata
definePage({
  meta: {
    layout: 'default',
    public: true,
    title: 'About Us',
  },
})
</script>

<template>
  <VRow>
    <VCol
      v-for="job in jobs.slice(0, 6)"
      :key="job.id"
      cols="12"
      md="6"
      lg="4"
    >
      <JobCard
        :job="job"
        @read-more="navigateToJobDetails"
        @apply="applyToJob"
      />
    </VCol>
  </VRow>
</template>
