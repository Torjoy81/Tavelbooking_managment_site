import prisma from "./configDB";
import { Hotel_Service, Room_Facilities } from "@prisma/client";

export const useFilterByCity = async (City: string) => {
  return await prisma.hotel.findMany({
    where: {
      city: City,
    },
    include: {
      rooms: true,
    },
  });
};

export const useCityFilterByHotelService = async (
  City: string,
  hotel_service: Hotel_Service[]
) => {
  return await prisma.hotel.findMany({
    include: {
      rooms: true,
    },
    where: {
      hotel_facilities: {
        hasEvery: hotel_service,
      },
      city: City,
    },
  });
};

export const useCityFilterByRoomService = async (
  City: string,
  room_service: Room_Facilities[]
) => {
  return await prisma.hotel.findMany({
    where: {
      city: City,
    },
    include: {
      rooms: {
        where: {
          room_service: {
            hasEvery: <Room_Facilities[]>room_service,
          },
        },
      },
    },
  });
};

export const useCityFilterByPrice = async (
  City: string,
  minPrice: number,
  maxPrice: number
) => {
  return await prisma.hotel.findMany({
    where: {
      city: City,
    },
    include: {
      rooms: {
        where: {
          pricePerDay: {
            gt: minPrice,
            lt: maxPrice,
          },
        },
      },
    },
  });
};
export const useCityFilterAllService = async (
  City: string,
  hotel_service: Hotel_Service[],
  room_service: Room_Facilities[]
) => {
  return await prisma.hotel.findMany({
    include: {
      rooms: {
        where: {
          room_service: {
            hasEvery: <Room_Facilities[]>room_service,
          },
        },
      },
    },
    where: {
      hotel_facilities: {
        hasEvery: <Hotel_Service[]>hotel_service,
      },
      city: City,
    },
  });
};

export const useCityFilterServices_price = async (
  City: string,
  minPrice: number,
  maxPrice: number,
  hotel_service: Hotel_Service[],
  room_service: Room_Facilities[]
) => {
  return await prisma.hotel.findMany({
    include: {
      rooms: {
        where: {
          pricePerDay: {
            gte: minPrice,
            lte: maxPrice,
          },
          room_service: {
            hasEvery: <Room_Facilities[]>room_service,
          },
        },
      },
    },
    where: {
      hotel_facilities: {
        hasEvery: <Hotel_Service[]>hotel_service,
      },
      city: City,
    },
  });
};
