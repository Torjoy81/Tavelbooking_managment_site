export const useRoonInclueCharge = () =>
  useState<
    {
      nameOfCharge: string;
      chargeFee: number;
    }[]
  >("RoomIcludeCharge", () => {
    return [
      {
        nameOfCharge: "refundable before",
        chargeFee: 0,
      },
      {
        nameOfCharge: "BreakFast",
        chargeFee: 20,
      },
      {
        nameOfCharge: "pick up from Airport",
        chargeFee: 30,
      },
      {
        nameOfCharge: "BreakFast + Dinner",
        chargeFee: 60,
      },
      {
        nameOfCharge: "Parking + Meal",
        chargeFee: 120,
      },
    ];
  });
