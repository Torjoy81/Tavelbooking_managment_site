import { Hotel_Service, Room_Facilities } from "@prisma/client";

interface FilterType {
  id: "city" | "hotel_service" | "room_service";
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
        id: "city",
        name: "City",
        options: [
          { value: "LONDON", label: "London", checked: false },
          { value: "BERLIN", label: "Berlin", checked: false },
          { value: "PARIS", label: "Paris", checked: true },
          { value: "ISTANBUL", label: "Istanbul", checked: false },
          { value: "MUNICH", label: "Munich", checked: false },
          { value: "VENICE", label: "Venice", checked: false },
          { value: "FLORENCE", label: "Florence", checked: false },
          { value: "ROME", label: "Rome", checked: false },
          { value: "LISBON", label: "Lisbon", checked: false },
        ],
      },
      {
        id: "hotel_service",
        name: "Hotel Service",
        options: Object.values(Hotel_Service).map((sevice) => ({
          value: sevice,
          label: sevice.charAt(0).toUpperCase() + sevice.slice(1).toLowerCase(),
          checked: false,
        })),
      },
      {
        id: "room_service",
        name: "Room Service",
        options: Object.values(Room_Facilities).map((sevice) => ({
          value: sevice,
          label: sevice.charAt(0).toUpperCase() + sevice.slice(1).toLowerCase(),
          checked: false,
        })),
      },
    ];
  });
