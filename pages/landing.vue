<template>
  <Section class="space-y-12 flex flex-col items-center">
    <h1 class="text-7xl font-black text-blue-500 m-0 p-0">
      {{ course.title }}
    </h1>
    <div class="text-2xl text-center font-medium">
      Oops! It looks like you havent bought the course yet.
    </div>
    <button
      class="bg-yellow-400 hover:bg-yellow-500 transition px-8 py-4 w-80 text-xl font-bold rounded-lg"
      @click="() => (showPayment = !showPayment)"
    >
      Buy Now
    </button>
    <button
      class="bg-green-400 hover:bg-green-500 transition px-8 py-4 w-80 text-xl font-bold rounded-lg"
      @click="navToChapterOne()"
    >
      Checkout The First Chapter for Free
    </button>
  </Section>
  <LazyPayment
    v-if="showPayment"
    @close="showPayment = false"
  />
</template>

<script setup lang="ts">
const course = await useCourse();
const firstLesson = await useFirstLesson();
const showPayment = ref(false);
const navToChapterOne = () => {
  navigateTo(firstLesson.path);
};
</script>
