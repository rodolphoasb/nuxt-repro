import { getAuth } from "vue-clerk/server";

export default defineEventHandler(async (event) => {
  const auth = getAuth(event);
  const sessionToken = await auth.getToken();

  if (sessionToken) {
    setCookie(event, "__session", sessionToken);
    return sessionToken;
  }

  return null;
});
