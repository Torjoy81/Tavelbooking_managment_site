const todayDate = new Date();

export const useCalenderDate = () => {
  const range = reactive({
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
  });

  const masks = reactive({
    input: "YYYY-MM-DD",
  });

  const disabledDates = reactive([
    {
      start: null,
      end: new Date(
        todayDate.getFullYear(),
        todayDate.getMonth(),
        todayDate.getDate() - 1
      ),
    },
  ]);

  return {
    range,
    masks,
    disabledDates,
  };
};
