<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  emits: ['readMore', 'apply'],
  setup(props) {
    const showMore = ref(false)

    const truncatedDescription = computed(() =>
      showMore.value || props.job.description.length <= 100
        ? props.job.description
        : `${props.job.description.slice(0, 100)}...`,
    )

    const toggleDescription = () => {
      showMore.value = !showMore.value
    }

    return { showMore, truncatedDescription, toggleDescription }
  },
})
</script>

<template>
  <VCard>
    <VCardTitle class="text-h5 px-6 pt-6">
      {{ job.title }}
    </VCardTitle>
    <VCardSubtitle class="px-6 text-body-2">
      Location: {{ job.location }} | Salary: {{ job.salary }}
    </VCardSubtitle>
    <VCardText>
      {{ truncatedDescription }}
      <span v-if="job.description.length > 50">
        <VBtn
          variant="plain"
          density="compact"
          @click="toggleDescription"
        >
          {{ showMore ? 'less' : 'more' }}
        </VBtn>
      </span>
    </VCardText>
    <VCardActions>
      <VBtn
        variant="tonal"
        color="primary"
        @click="$emit('readMore', job.id)"
      >
        Read More
      </VBtn>
      <VBtn
        variant="tonal"
        :color="job.status === 'active' ? 'success' : 'grey'"
        :disabled="job.status !== 'active'"
        @click="$emit('apply', job.id)"
      >
        {{ job.status === 'active' ? 'Apply Now' : 'inactive' }}
      </VBtn>
    </VCardActions>
  </VCard>
</template>
