import { Hotel_Service, Room_Facilities } from "@prisma/client";
import {
  useFilterAllService,
  useFilterByHotelService,
  useFilterByPrice,
  useFilterByRoomService,
  useFilterForALLCity,
  useFilterServices_price,
  useFilterByPrice_Hotel,
  useFilterByPrice_Room,
} from "~/server/db/queryforAll";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  if (query.hotel_service) {
    return await useFilterByHotelService(<Hotel_Service[]>query.hotel_service);
  } else if (query.room_service) {
    return await useFilterByRoomService(<Room_Facilities[]>query.room_service);
  } else if (query.minprice && query.maxprice) {
    return await useFilterByPrice(
      parseFloat(query.minprice.toString()),
      parseFloat(query.maxprice.toString())
    );
  } else if (query.hotel_service && query.minprice && query.maxprice) {
    return await useFilterByPrice_Hotel(
      parseFloat(query.minprice.toString()),
      parseFloat(query.maxprice.toString()),
      query.hotel_service as unknown as Hotel_Service[]
    );
  } else if (query.room_service && query.minprice && query.maxprice) {
    return await useFilterByPrice_Room(
      parseFloat(query.minprice.toString()),
      parseFloat(query.maxprice.toString()),
      query.room_service as unknown as Room_Facilities[]
    );
  } else if (query.hotel_service && query.room_service) {
    return await useFilterAllService(
      query.hotel_service as unknown as Hotel_Service[],
      query.room_serviceas as unknown as Room_Facilities[]
    );
  } else if (
    query.hotel_service &&
    query.room_service &&
    query.minprice &&
    query.maxprice
  ) {
    return await useFilterServices_price(
      <number>query.minprice,
      <number>query.maxprice,
      query.hotel_service as unknown as Hotel_Service[],
      query.room_service as unknown as Room_Facilities[]
    );
  } else {
    return await useFilterForALLCity();
  }
});
