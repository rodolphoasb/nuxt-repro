import { useUser } from "vue-clerk";

export function useUserData() {
  const { user: clerkUser } = useUser();

  return {
    user: clerkUser,
  };
}
