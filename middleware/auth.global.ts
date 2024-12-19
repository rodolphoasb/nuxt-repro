import { useAuth, useOrganization } from "vue-clerk";

export const publicRoutes = ["/app/login", "/"];

export default defineNuxtRouteMiddleware((to) => {
  try {
    const { isSignedIn, orgId } = useAuth();
    const { organization } = useOrganization();

    const workspaceId = useCookie("current-workspace-id").value;
    console.log("workspaceId", workspaceId);
    const isOrganizationSet =
      (import.meta.server
        ? Boolean(orgId.value)
        : Boolean(orgId.value) || Boolean(organization.value)) && workspaceId;
    const isAuthenticated = Boolean(isSignedIn.value);
    const isGoingToPublicRoute = publicRoutes.includes(to.path);

    if (
      !isOrganizationSet &&
      isAuthenticated &&
      !isGoingToPublicRoute &&
      to.path !== "/workspaces" &&
      to.path !== "/onboarding"
    ) {
      return navigateTo("/workspaces");
    }

    if (isGoingToPublicRoute && isAuthenticated) return navigateTo("/app");

    if (isAuthenticated && isOrganizationSet && to.path === "/workspaces")
      return navigateTo("/app");

    if (!isGoingToPublicRoute && !isAuthenticated)
      return navigateTo("/app/login");
  } catch (e) {
    console.error("Error in auth.global middleware", e);
  }
});
