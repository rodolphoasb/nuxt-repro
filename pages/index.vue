<script setup lang="ts">
const { user } = useUserData();
</script>

<template>
  <div>
    <h1>Hello {{ user?.id }}</h1>
  </div>
</template>
