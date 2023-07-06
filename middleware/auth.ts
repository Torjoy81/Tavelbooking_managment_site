export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();
  console.log(user.value);

  if (!user.value && to.path === "/register") {
    return;
  } else if (user.value) {
    console.log("TArek");

    return navigateTo("/");
  }
});
