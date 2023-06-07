const Hotel_Service = {
  SPA_FACILITIES: "SPA_FACILITIES",
  SAUNA: "SAUNA",
  FITNESS_CENTER: "FITNESS_CENTER",
  SWIMMING_POOL: "SWIMMING_POOL",
  LIVE_MUSIC_PERFORMANCE: "LIVE_MUSIC_PERFORMANCE",
  INDOOR_POOL: "INDOOR_POOL",
  CYCLING: "CYCLING",
  HIKING: "HIKING",
  NEAR_SEA: "NEAR_SEA",
  NEAR_MOUNTAIN: "NEAR_MOUNTAIN",
  MORNING_BUFFET: "MORNING_BUFFET",
  RESTAURANT: "RESTAURANT",
  PARKING: "PARKING",
};

const Room_Facilities = {
  SEA_VIEW: "SEA_VIEW",
  PRIVATE_BATHROOM: "PRIVATE_BATHROOM",
  BALCONY: "BALCONY",
  KITCHEN: "KITCHEN",
  SHOWER: "SHOWER",
  AIR_CONDITON: "AIR_CONDITON",
  TV: "TV",
  COFFEE_MAKER: "COFFEE_MAKER",
  REFRIGERATOR: "REFRIGERATOR",
  TABLE: "TABLE",
  SOFA: "SOFA",
  VIEW_MOUNTAIN: "VIEW_MOUNTAIN",
  FREE_WIFI: "FREE_WIFI",
  PET_ALLOWED: "PET_ALLOWED",
  HEATING: "HEATING",
};

interface FilterType {
  id: "city" | "hotel_service" | "room_service" | "room_type";
  name: string;
  options: {
    value: string;
    label: string;
    checked: boolean;
  }[];
}

export const useFilterOption = [
  {
    id: "hotel_service",
    name: "Hotel Service",
    options: Object.values(Hotel_Service).map((sevice) => ({
      value: sevice,
      label: sevice.split("_").join(" "),
      checked: false,
    })),
  },
  {
    id: "room_service",
    name: "Room Service",
    options: Object.values(Room_Facilities).map((sevice) => ({
      value: sevice,
      label: sevice.split("_").join(" "),
      checked: false,
    })),
  },
];

export const useIndexOfObject_Array = (
  array: any[],
  value: string | number,
  key: string
): number => {
  let index = 0;
  for (let i in array) {
    if (array[i][key] === value) {
      index = parseInt(i);
    }
  }

  return index;
};
