import _ from "lodash";

export const useCurrentPageStore = defineStore("paginate", () => {
  const hotelData = useHotelStore();
  const currentPageNumber = ref(1);
  const totalLength = ref(
    hotelData.filterHotelData.length !== 0
      ? hotelData.filterHotelData.length
      : hotelData.hotels.length
  );
  const pageSize = ref(4);

  function handlePageNumber(pageNumber: number) {
    currentPageNumber.value = pageNumber;
  }

  const paginateData = computed(() => {
    const startIndex = (currentPageNumber.value - 1) * pageSize.value;
    if (hotelData.filterHotelData.length !== 0) {
      totalLength.value = hotelData.filterHotelData.length;
      return _(hotelData.filterHotelData)
        .slice(startIndex)
        .take(pageSize.value)
        .value();
    } else {
      return _(hotelData.hotels).slice(startIndex).take(pageSize.value).value();
    }
  });

  const countPage = computed(() =>
    Math.ceil(totalLength.value / pageSize.value)
  );

  return {
    handlePageNumber,
    paginateData,
    countPage,
    currentPageNumber,
  };
});
