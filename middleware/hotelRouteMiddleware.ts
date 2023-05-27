export default defineNuxtRouteMiddleware(async (to, from) => {
  //   const HotelData = useHotelStore();
  //   if (to.fullPath === from.fullPath) {
  //     const { data, pending } = await useFetch("/api/hotels/filter", {
  //       query: { city: to.query.city?.toString() },
  //     });

  //     if (!pending.value) {
  //       console.log("Test");
  //       HotelData.fetchFilterHotelData(data);
  //     }
  //   }
  console.log("middleware");
});
