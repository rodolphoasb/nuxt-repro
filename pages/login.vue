<script setup lang="ts">
import { SignIn } from "vue-clerk";

const isSigningIn = ref(false);

onUnmounted(() => {
  isSigningIn.value = false;
});
</script>

<template>
  <div w-screen h-screen h-100dvh bg="#EBEFF1" relative flex="~ col">
    <div w-full max-w-1680px mx-auto px-64px grow>
      <div flex items-center justify-center h-full pt-100px>
        <div w-160px />
        <SignIn />
      </div>
    </div>
    <div flex-auto />
  </div>
</template>
