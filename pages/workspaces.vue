<script setup lang="ts">
const { user } = useUserData();
</script>

<template>
  <div>Workspaces {{ user?.id }}</div>
</template>
