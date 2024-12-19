<script setup lang="ts">
const { initializeUser } = useUserData();
await initializeUser();
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
