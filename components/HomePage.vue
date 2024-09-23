<template>
  <div class="bg-white text-base">
    <button
      class="bg-blue-600 w-full text-white items-center py-4 px-2 rounded-lg my-4 text-sm"
    >
      Add a new subscription
    </button>
    <div class="">
      <div class="flex justify-between items-center">
        <h2 class="text-lg mt-6">My Subscriptions</h2>
      </div>
      <div v-if="isLoading" class="text-center mt-4">
        <p>Loading...</p>
      </div>
      <div
        v-else-if="subscriptions && subscriptions.length === 0"
        class="text-center mt-4"
      >
        <p>No subscriptions found</p>
      </div>
      <div
        v-else
        v-for="subs in subscriptions"
        class="flex my-4 rounded-2xl text-sm bg-gray-100"
      >
        <img
          :src="subs.imageUrl"
          alt="subscription-service-logo"
          class="w-32 h-32 object-cover rounded-2xl"
        />
        <div class="flex flex-col justify-between py-2 px-2">
          <h3 class="text-base pt-2">{{ subs.title }}</h3>
        </div>
        <div class="flex flex-col justify-between w-16 ml-auto py-2">
          <span>${{ subs.cost }}</span>
          <span>{{ subs.duration }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { z } from "zod";
import { SubscriptionType } from "~/types";

const { data: subscriptions = [], isLoading } = useQuery({
  queryKey: ["get-all-subscriptions"],
  queryFn: async () => {
    const response = await fetch("/api/subscriptions");
    const res = await response.json();
    return z.array(SubscriptionType).parse(res);
  },
});
</script>
