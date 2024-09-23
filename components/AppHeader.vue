<template>
  <div
    class="px-8 py-3 flex justify-between items-center sticky top-0 bg-white"
  >
    <div class="h-12 flex items-center">
      <div v-if="showGreetings" class="justify-between flex flex-col h-12">
        <div class="text-sm">{{ greeting }}</div>
        <div class="font-bold">{{ name }}</div>
      </div>
      <ArrowLeft v-else @click="$router.back()" class="h-6 w-6" />
    </div>
    <div
      class="h-12 w-12 bg-gray-600 rounded-full text-white flex items-center justify-center"
    >
      {{ initials }}
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowLeft from "~/assets/arrow-left.svg";
const route = useRoute();

const showGreetings = computed(() => route.path === "/");

const name = "Justine Kizhakkinedath";

const initials = computed(() => {
  const [firstName, lastName] = name.split(" ");
  return firstName[0] + lastName[0];
});

const greeting = computed(() => {
  const hours = new Date().getHours();
  if (hours < 12) return "Good morning";
  if (hours < 18) return "Good afternoon";
  return "Good evening";
});
</script>
