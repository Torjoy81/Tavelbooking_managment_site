import { Prisma } from "@prisma/client";

export type HotelData = Prisma.HotelGetPayload<{
  include: {
    rooms: true;
  };
}>;

export const useHotelStore = defineStore("Hotels", () => {
  const hotels = ref<HotelData[]>([]);
  const filterHotelData = ref<HotelData[]>([]);

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
