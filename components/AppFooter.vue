<template>
  <div
    class="flex justify-evenly border-t border-gray-400 py-3 sticky bottom-0 bg-white"
  >
    <NuxtLink
      v-for="link in links"
      :key="link.path"
      :to="link.path"
      class="flex flex-col items-center p-2 rounded-lg"
    >
      <component :is="link.icon" class="w-6 h-6" />
      <span>
        {{ link.name }}
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import ChartBarSquare from "~/assets/chart-bar-square.svg";
import HomeIcon from "~/assets/home.svg";
import WalletIcon from "~/assets/wallet.svg";

const links = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "Subscriptions", path: "/subscriptions", icon: WalletIcon },
  { name: "Analytics", path: "/analytics", icon: ChartBarSquare },
];
</script>
