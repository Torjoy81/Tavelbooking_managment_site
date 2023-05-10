const todayDate = new Date();

export const useCalenderDate = () =>
  useState(() => {
    return {
      range: {
        start: new Date(
          todayDate.getFullYear(),
          todayDate.getMonth(),
          todayDate.getDate()
        ),
        end: new Date(
          todayDate.getFullYear(),
          todayDate.getMonth(),
          todayDate.getDate() + 1
        ),
      },
      masks: {
        input: "YYYY-MM-DD",
      },
      disabledDates: [
        {
          start: null,
          end: new Date(
            todayDate.getFullYear(),
            todayDate.getMonth(),
            todayDate.getDate() - 1
          ),
        },
      ],
    };
  });
