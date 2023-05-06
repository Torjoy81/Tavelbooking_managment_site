import { Hotel } from "@prisma/client";
import _ from "lodash";

export const useFilterAction = defineStore("FilterAction", () => {
  const hotelData = useHotelStore();

  const filterData = ref([]);

  function filtering(payload: { [key: string]: string[] }) {
    const keyOf_FilterArr = Object.keys(payload);
    for (const keyitem of keyOf_FilterArr) {
      if (keyitem === "city") {
        hotelData.hotels.filter((item) => payload.city.includes(item.city));
      } else if (keyitem === "hotel_service") {
        hotelData.hotels.filter(
          (item) =>
            _.intersection(item.hotel_facilities, payload.hotel_service)
              .length === payload.hotel_service.length
        );
      }
    }
  }
});
