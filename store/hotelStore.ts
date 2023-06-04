import { Prisma } from "@prisma/client";
import _ from "lodash";

type HotelData = Prisma.HotelGetPayload<{
  include: {
    rooms: true;
  };
}>;

export const useHotelStore = defineStore("Hotels", () => {
  const hotels = ref<HotelData[]>([]);
  const filterHotelData = ref<HotelData[]>([]);

  const getCity = computed(() => {
    const cityArray = hotels.value.map((hotel) => {
      return {
        id: hotel.id,
        value: hotel.city,
      };
    });
    const uniq_City = _.uniqBy(cityArray, "value");
    return [{ id: "All", value: "ALL" }, ...uniq_City];
  });

  async function fetchAllHotelData() {
    const response = await fetch("http://localhost:3000/api/hotels");
    hotels.value = await response.json();
    if (response.ok) {
      return "success";
    }
  }

  async function fetchFilterHotelData(data: any) {
    filterHotelData.value = data.value.filter(
      (item: HotelData) => item.rooms.length !== 0
    );

    console.log(filterHotelData.value);

    if (data) {
      return "success";
    }
  }

  return {
    hotels,
    fetchAllHotelData,
    filterHotelData,
    fetchFilterHotelData,
    getCity,
  };
});
