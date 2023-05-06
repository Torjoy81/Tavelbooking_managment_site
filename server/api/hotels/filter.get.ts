import { PrismaClient, Hotel_Service } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  if (query.City !== "" && query.hotel_service !== "") {
    return await prisma.hotel.findMany({
      where: {
        city: { in: (query.City as string).split(",") },
        hotel_facilities: {
          hasEvery: (query.hotel_service as string).split(
            ","
          ) as Hotel_Service[],
        },
      },
    });
  } else {
    return await prisma.hotel.findMany({
      where: {
        city: { in: (query.City as string).split(",") },
      },
    });
  }
});
