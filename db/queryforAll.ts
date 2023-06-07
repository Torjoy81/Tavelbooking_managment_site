import prisma from "./configDB";
import { Hotel_Service, Room_Facilities } from "@prisma/client";

export const useFilterByHotelService = async (
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
    },
  });
};

export const useFilterByRoomService = async (
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
  });
};

export const useFilterByPrice = async (minPrice: number, maxPrice: number) => {
  return await prisma.hotel.findMany({
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

export const useFilterByPrice_Hotel = async (
  minPrice: number,
  maxPrice: number,
  hotel_service: Hotel_Service[]
) => {
  return await prisma.hotel.findMany({
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
    where: {
      hotel_facilities: {
        hasEvery: <Hotel_Service[]>hotel_service,
      },
    },
  });
};

export const useFilterByPrice_Room = async (
  minPrice: number,
  maxPrice: number,
  room_service: Room_Facilities[]
) => {
  return await prisma.hotel.findMany({
    include: {
      rooms: {
        where: {
          pricePerDay: {
            gt: minPrice,
            lt: maxPrice,
          },
          room_service: {
            hasEvery: <Room_Facilities[]>room_service,
          },
        },
      },
    },
  });
};

export const useFilterAllService = async (
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
    },
  });
};

export const useFilterServices_price = async (
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
    },
  });
};

export const useFilterForALLCity = async () => {
  return await prisma.hotel.findMany({
    include: {
      rooms: true,
    },
  });
};
