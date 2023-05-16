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
