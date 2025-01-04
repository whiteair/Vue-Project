<script lang="ts" setup>
import { ref } from 'vue';
const jobs = ref([
        {
            id: 1,
            title: 'Senior Vue Developer',
            description: 'We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, and experience with Vue.js. Responsibilities include developing user-facing applications, collaborating with cross-functional teams, and ensuring high performance and responsiveness of applications. If you are passionate about front-end development and eager to work in a dynamic environment, we would love to hear from you.',
            salary: '$70k',
            location: 'Boston, MA'
        },
    {
        id: 2,
        title: 'Junior Vue Developer',
        description: 'Join our team and grow your skills as a Junior Vue Developer. You will work closely with senior developers to build and maintain web applications using Vue.js. This is a great opportunity for someone looking to start their career in front-end development. Responsibilities include writing clean and efficient code, debugging issues, and collaborating with the design team to implement UI/UX designs. If you are eager to learn and passionate about web development, we encourage you to apply.',
        salary: '$50k',
        location: 'San Francisco, CA'
    },
    {
        id: 3,
        title: 'Full Stack Developer',
        description: 'Work on both front-end and back-end projects. Collaborate with cross-functional teams to design, develop, and maintain web applications. Ensure the performance, quality, and responsiveness of applications. If you have a passion for coding and a strong understanding of both front-end and back-end technologies, we would love to have you on our team.',
        salary: '$90k',
        location: 'New York, NY'
    },
    {
        id: 4,
        title: 'UI/UX Designer',
        description: 'Design stunning user interfaces and create seamless user experiences. Work closely with developers to implement your designs. If you have a keen eye for detail and a passion for creating beautiful and intuitive interfaces, join our team and help shape the future of our products.',
        salary: '$60k',
        location: 'Austin, TX'
    },
    {
        id: 5,
        title: 'Project Manager',
        description: 'Manage and oversee project development from inception to completion. Coordinate with various teams to ensure projects are delivered on time and within budget. If you have strong leadership skills and a knack for organization, we want you to lead our projects to success.',
        salary: '$100k',
        location: 'Seattle, WA'
    },
    {
        id: 6,
        title: 'DevOps Engineer',
        description: 'Maintain and improve our infrastructure. Implement and manage CI/CD pipelines, monitor system performance, and ensure the reliability and scalability of our applications. If you are passionate about automation and infrastructure as code, join our team and help us build robust and scalable systems.',
        salary: '$110k',
        location: 'Denver, CO'
    }
    ]);

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
        <VCol v-for="(job, index) in jobs" :key="index" cols="12" md="4" sm="4">
            <VCard>
                <VCardTitle>{{ job.title }}</VCardTitle>
                <VCardSubtitle>Location: {{ job.location }} | Salary: {{ job.salary }}</VCardSubtitle>
                <VCardText>{{ job.description }}</VCardText>
            </VCard>
        </VCol>
    </VRow>

</template>
