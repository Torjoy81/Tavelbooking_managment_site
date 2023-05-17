export const useHotelIcon = () =>
  useState<{ [key: string]: string }>("HotelIcon", () => {
    return {
      SWIMMING_POOL: "material-symbols:pool-rounded",
      PARKING: "icon-park-outline:parking",
      RESTAURANT: "material-symbols:restaurant",
      INDOOR_POOL: "noto-v1:pool-8-ball",
      SPA_FACILITIES: "material-symbols:bath-outdoor",
      SAUNA: "material-symbols:sauna-sharp",
      FITNESS_CENTER: "ic:twotone-fitness-center",
      CYCLING: "akar-icons:bicycle",
      HIKING: "material-symbols:hiking",
      NEAR_SEA: "material-symbols:beach-access",
      NEAR_MOUNTAIN: "ph:mountains-fill",
      MORNING_BUFFET: "material-symbols:restaurant",
      LIVE_MUSIC_PERFORMANCE: "iconamoon:music-artist",
    };
  });

export const useRoomServiceIcon = () =>
  useState<{ [key: string]: string }>("RoomServiceIcon", () => {
    return {
      SEA_VIEW: "material-symbols:beach-access",
      PRIVATE_BATHROOM: "mdi:toilet",
      BALCONY: "mdi:window-open-variant",
      KITCHEN: "material-symbols:kitchen-outline-rounded",
      SHOWER: "solar:bath-bold",
      AIR_CONDITON:
        "streamline:travel-hotel-air-conditioner-heating-ac-air-hvac-cool-cooling-cold-hot-conditioning",
      TV: "majesticons:tv-old-line",
      COFFEE_MAKER: "material-symbols:coffee-maker",
      REFRIGERATOR: "lucide:refrigerator",
      TABLE: "material-symbols:table-bar",
      SOFA: "mdi:sofa-outline",
      VIEW_MOUNTAIN: "fa6-solid:mountain-sun",
      FREE_WIFI: "material-symbols:wifi",
      PET_ALLOWED: "material-symbols:pets",
      HEATING: "iconoir:heating",
    };
  });
