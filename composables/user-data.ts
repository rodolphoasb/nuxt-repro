import { useUser } from "vue-clerk";
import type { User as ClerkUser } from "@clerk/backend";

export function useUserData() {
  const userData = useState<ClerkUser | null>("user-data", () => null);
  const { user: clerkUser } = useUser();

  async function refreshUser() {
    const user = await $fetch<ClerkUser | null>("/api/_clerk/current-user", {
      headers: useRequestHeaders(),
    });
    userData.value = user;
  }

  async function initializeUser() {
    if (import.meta.client || userData.value !== null) return;

    await refreshUser();
  }

  return {
    user: clerkUser,
    initializeUser,
  };
}
