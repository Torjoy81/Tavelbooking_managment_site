import { Hotel } from "@prisma/client";

export const useHotelStore = defineStore("Hotels", () => {
  const hotels = ref<Hotel[]>([]);

  async function fetchHotelData() {
    const response = await fetch("http://localhost:3000/api/hotels");
    hotels.value = await response.json();
    if (response.ok) {
      return "success";
    }
  }

  return {
    hotels,
    fetchHotelData,
  };
});
