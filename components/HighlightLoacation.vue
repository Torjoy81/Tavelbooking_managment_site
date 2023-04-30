<template>
  <div>
    <h1
      class="mb-4 text-4xl tracking-tight font-proza font-extrabold leading-none dark:text-white"
    >
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        >Popular Destination</span
      >
    </h1>
    <div class="grid grid-cols-2 xsm:grid-cols-1 gap-5">
      <BaseImageHover
        :imagesrc="palace.imagesrc"
        :city="palace.city"
        :description="palace.description"
        v-for="(palace, index) in destinatonData"
        :key="index"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
interface PopularPlace {
  imagesrc: string;
  city: string;
  description: string;
}

const destinatonData = ref<PopularPlace[]>([
  {
    imagesrc: "berlin.jpg",
    city: "Berlin",
    description:
      "Berlin, the capital city of Germany, is renowned for its exceptional range of landmarks, vibrant cultural scene and way of life that's somehow all go yet relaxed. In fact, the city is best known for its striking contrasts. Historical buildings stand alongside modern architecture as the past and present intermingle.",
  },
  {
    imagesrc: "rome.jpg",
    city: "Rome",
    description:
      "Rome is the third most visited city in Europe and the fourteenth worldwide. It attracts visitors from all over the world who are impatient to discover the city’s impressive monuments and archaeological sites; not to mention its renowned cuisine and its lively atmosphere.",
  },
  {
    imagesrc: "paris.jpg",
    city: "Paris",
    description:
      "Paris is a city of love, history, culture, and beauty. With its iconic landmarks, rich culinary scene, and vibrant arts and fashion scene, there's something for everyone in this magnificent city.",
  },
  {
    imagesrc: "london.jpeg",
    city: "London",
    description:
      "Big Ben, the Tower of London, Buckingham Palace, the London Eye, the list goes on and on. There's nothing quite like the experience of hopping on a red double-decker bus and seeing some of the most recognisable sights in the world from its top deck.",
  },
  {
    imagesrc: "amsterdam.jpeg",
    city: "Amsterdam",
    description:
      "Amsterdam is a glorious city full of markets, museums, and great restaurants and bars. Its majestic canals are lined with 17th-century houses and buildings full of history. While the canal ring is home to some of the most popular attractions, new urban parks and developments outside the historic core mean there are fun, less-crowded places to explore, too",
  },
  {
    imagesrc: "munich.jpeg",
    city: "Munich",
    description:
      "Often overshadowed by Berlin, many people think of Munich as just the home of Oktoberfest but there's so much more to see and do in Bavaria's capital. As well as the many beautiful sights and museums in the city, it also makes the perfect base for exploring southern Germany and its many Alpine lakes.",
  },
]);
</script>
