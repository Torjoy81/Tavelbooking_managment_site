import _ from "lodash";

export const useCurrentPageStore = defineStore("paginateStore", () => {
  const hotelData = useHotelStore();
  const currentPageNumber = ref(1);
  const totalLength = ref(hotelData.hotels.length);
  const pageSize = ref(4);

  function handlePageNumber(pageNumber: number) {
    currentPageNumber.value = pageNumber;
  }

  const activeClass = (pageNumber: number) =>
    pageNumber === currentPageNumber.value
      ? "mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-pink-500 p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"
      : "mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300";

  const paginateData = computed(() => {
    const startIndex = (currentPageNumber.value - 1) * pageSize.value;
    return _(hotelData.hotels).slice(startIndex).take(pageSize.value).value();
  });

  const countPage = computed(() =>
    Math.ceil(totalLength.value / pageSize.value)
  );

  return {
    handlePageNumber,
    paginateData,
    countPage,
    activeClass,
  };
});
