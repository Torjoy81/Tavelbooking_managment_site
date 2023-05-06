import { Hotel } from "@prisma/client";

export const useHotelStore = defineStore("Hotels", () => {
  const hotels = ref<Hotel[]>([]);
  const filterHotelData = ref<Hotel[]>([]);

  async function fetchAllHotelData() {
    const response = await fetch("http://localhost:3000/api/hotels");
    hotels.value = await response.json();
    if (response.ok) {
      return "success";
    }
  }

  async function fetchFilterHotelData(url: string) {
    const response = await fetch(url);
    filterHotelData.value = await response.json();
    if (response.ok) {
      return "success";
    }
  }

  return {
    hotels,
    fetchAllHotelData,
    filterHotelData,
    fetchFilterHotelData,
  };
});
