import { PrismaClient, Hotel_Service, Room_Facilities } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  if (query.hotel_service && query.room_service) {
    return await prisma.hotel.findMany({
      include: {
        rooms: {
          where: {
            room_service: {
              hasEvery: <Room_Facilities[]>query.room_service,
            },
          },
        },
      },
      where: {
        hotel_facilities: {
          hasEvery: <Hotel_Service[]>query.hotel_service,
        },
      },
    });
  } else if (query.hotel_service) {
    return await prisma.hotel.findMany({
      include: {
        rooms: true,
      },
      where: {
        hotel_facilities: {
          hasEvery: <Hotel_Service[]>query.hotel_service,
        },
      },
    });
  } else if (query.city !== "ALL") {
    console.log("Ta");
    return await prisma.hotel.findMany({
      where: {
        city: { in: <string>query.city },
      },
      include: {
        rooms: true,
      },
    });
  } else {
    return await prisma.hotel.findMany({
      include: {
        rooms: true,
      },
    });
  }
});
