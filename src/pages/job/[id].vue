<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import JobDetails from '@/components/JobDetails.vue'
import RelatedJobs from '@/components/RelatedJobs.vue'
import CompanyDetails from '@/components/CompanyDetails.vue'

// Reactive state for job and company
const job = ref(null)
const company = ref(null)

// Get route params
const route = useRoute()
const jobId = Number(route.params.id) // Cast to number

// Fetch job details
const fetchJobDetails = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/api/v1/jobs/${jobId}`)

    job.value = response.data
    fetchCompanyDetails(response.data.company_id)
  }
  catch (error) {
    console.error('Error fetching job details:', error)
  }
}

// Fetch company details
const fetchCompanyDetails = async (companyId?: number) => {
  if (!companyId)
    return

  try {
    const response = await axios.get(`http://localhost:8000/api/v1/companies/${companyId}`)

    company.value = response.data
  }
  catch (error) {
    console.error('Error fetching company details:', error)
  }
}

onMounted(() => {
  fetchJobDetails()
})

definePage({
  meta: {
    layout: 'default',
    title: 'Job Details',
  },
})
</script>

<template>
  <VRow>
    <!-- Job Details Section (8 columns) -->
    <VCol
      cols="12"
      md="8"
    >
      <JobDetails :job="job" />
      <RelatedJobs
        v-if="job"
        :company-id="job.company_id"
      />
    </VCol>

    <!-- Company Details Section (4 columns) -->
    <VCol
      cols="12"
      md="4"
    >
      <CompanyDetails :company="company" />
    </VCol>
  </VRow>
</template>
