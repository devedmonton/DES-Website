<template>
  <main>
    <AppSection :group="companyGroup" />
  </main>
</template>

<script setup lang="ts">
import { companies } from '@/constants/companies'; // Adjust the path as necessary

// Alphabetically sort companies
const sortedCompanies = companies.sort((a, b) => a.name.localeCompare(b.name));

const companyGroup = { name: 'Edmonton Companies', items: sortedCompanies };

const title = 'Edmonton Companies';
const description = 'A list of Edmonton companies to help the Dev Edmonton community.';

useServerSeoMeta({
  title,
  description,
});
</script>

<style scoped>
/* Add any styles you want for this page, if necessary */
</style>
