<script setup lang="ts">
import { useAuth } from "vue-clerk";

const { signOut, isSignedIn } = useAuth();
const { user, refreshUser } = useUserData();

function onSignOut() {
  signOut.value();
  refreshUser();
}
</script>

<template>
  <div>
    <div v-if="!isSignedIn">
      <NuxtLink to="/login">login</NuxtLink>
    </div>
    <button
      v-else
      w-full
      px-16px
      h-50px
      flex="~"
      items-center
      justify-between
      rounded-b-12px
      class="group hover:bg-gray-20"
      @click="onSignOut"
    >
      <span body-13-medium text-black-800> Sign Out </span>
    </button>
    <slot />
  </div>
</template>
