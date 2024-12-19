<script setup lang="ts">
const { user } = useUserData();
</script>

<template>
  <div>Dashboard {{ user?.id }}</div>
</template>
