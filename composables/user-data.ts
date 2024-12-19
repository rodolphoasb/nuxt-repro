import { useUser } from "vue-clerk";
import type { User as ClerkUser } from "@clerk/backend";
import type { UserResource } from "@clerk/types";

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

  // clerkUser has additional membership properties. e.g. roles and permissions
  const user = computed<(ClerkUser & Partial<UserResource>) | null>(() => {
    if (!userData.value) return null;

    try {
      return {
        ...userData.value,
        ...clerkUser.value,
      } as ClerkUser & Partial<UserResource>;
    } catch (_error) {
      console.error("Error fetching clerk user", _error);
      return userData.value as ClerkUser & Partial<UserResource>;
    }
  });

  return {
    user,
    initializeUser,
    refreshUser,
  };
}
