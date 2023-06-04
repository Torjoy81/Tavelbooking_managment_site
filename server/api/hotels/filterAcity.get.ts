import { Hotel_Service, Room_Facilities } from "@prisma/client";
import {
  useFilterByCity,
  useCityFilterByHotelService,
  useCityFilterByRoomService,
  useCityFilterByPrice,
  useCityFilterAllService,
  useCityFilterServices_price,
} from "~/server/db/queryforAcity";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  console.log(query);

  if (query.hotel_service && query.city) {
    return await useCityFilterByHotelService(
      <string>query.city,
      <Hotel_Service[]>query.hotel_service
    );
  } else if (query.room_service && query.city) {
    return await useCityFilterByRoomService(
      <string>query.city,
      <Room_Facilities[]>query.room_service
    );
  } else if (query.minprice !== "0" && query.maxprice !== "0" && query.city) {
    return await useCityFilterByPrice(
      <string>query.city,
      parseFloat(query.minprice!.toString()),
      parseFloat(query.maxprice!.toString())
    );
  } else if (query.hotel_service && query.room_service && query.city) {
    return await useCityFilterAllService(
      <string>query.city,
      <Hotel_Service[]>query.hotel_service,
      <Room_Facilities[]>query.room_service
    );
  } else if (
    query.hotel_service &&
    query.room_service &&
    query.minprice &&
    query.maxprice &&
    query.city
  ) {
    return await useCityFilterServices_price(
      <string>query.city,
      parseFloat(query.minprice.toString()),
      parseFloat(query.maxprice.toString()),
      <Hotel_Service[]>query.hotel_service,
      <Room_Facilities[]>query.room_service
    );
  } else {
    return await useFilterByCity(<string>query.city);
  }
});
