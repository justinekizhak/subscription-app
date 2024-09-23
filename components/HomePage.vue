<template>
  <div>
    <button>Add a new subscription</button>
    <div>
      <div>
        <h2>My Subscriptions</h2>
        <span>></span>
      </div>
      <div v-for="subs in subscriptions">
        <img :src="subs.imageUrl" />
        <div>
          <h3>{{ subs.title }}</h3>
        </div>
        <div>
          <span>{{ subs.cost }}</span>
          <span>{{ subs.duration }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import type { Subscription } from "~/types";

const { data: subscriptions } = useQuery<Subscription[]>({
  queryKey: ["get-all-subscriptions"],
  queryFn: async () => {
    const response = await fetch("/api/subscriptions");
    const res = await response.json();
    return res;
  },
});
</script>
