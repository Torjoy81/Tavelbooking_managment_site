import { Hotel_Service, Room_Facilities, Room_Type } from "@prisma/client";

interface FilterType {
  id: "city" | "hotel_service" | "room_service" | "room_type";
  name: string;
  options: {
    value: string;
    label: string;
    checked: boolean;
  }[];
}

export const useFilterOption = () =>
  useState<FilterType[]>("filterOption", () => {
    return [
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
        id: "room_type",
        name: "Room Bed Size",
        options: Object.values(Room_Type).map((sevice) => ({
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
  });
