import { Hotel_Service, Room_Facilities } from "@prisma/client";
import {
  useFilterByCity,
  useCityFilterByHotelService,
  useCityFilterByRoomService,
  useCityFilterByPrice,
  useCityFilterAllService,
  useCityFilterServices_price,
  useCityFilterByPrice_Room,
  useCityFilterByPrice_Hotel,
} from "~/server/db/queryforAcity";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  if (query.minprice === "0" && query.maxprice === "0") {
    delete query.minprice;
    delete query.maxprice;
  }

  if (
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
  } else if (query.hotel_service && query.room_service && query.city) {
    return await useCityFilterAllService(
      <string>query.city,
      <Hotel_Service[]>query.hotel_service,
      <Room_Facilities[]>query.room_service
    );
  } else if (query.hotel_service && query.minprice && query.maxprice) {
    return await useCityFilterByPrice_Hotel(
      <string>query.city,
      parseFloat(query.minprice!.toString()),
      parseFloat(query.maxprice!.toString()),
      <Hotel_Service[]>query.hotel_service
    );
  } else if (query.room_service && query.minprice && query.maxprice) {
    return await useCityFilterByPrice_Room(
      <string>query.city,
      parseFloat(query.minprice!.toString()),
      parseFloat(query.maxprice!.toString()),
      <Room_Facilities[]>query.room_service
    );
  } else if (query.hotel_service && query.city) {
    return await useCityFilterByHotelService(
      <string>query.city,
      <Hotel_Service[]>query.hotel_service
    );
  } else if (query.room_service && query.city) {
    return await useCityFilterByRoomService(
      <string>query.city,
      <Room_Facilities[]>query.room_service
    );
  } else if (query.minprice && query.maxprice && query.city) {
    return await useCityFilterByPrice(
      <string>query.city,
      parseFloat(<string>query.minprice),
      parseFloat(<string>query.maxprice)
    );
  } else {
    return await useFilterByCity(<string>query.city);
  }
});
