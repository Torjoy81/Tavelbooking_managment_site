import { Hotel_Service, Room_Facilities } from "@prisma/client";

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
