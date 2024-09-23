
<template>
  <div>
    <NuxtLink v-for="link in links" :key="link.path" :to="link.path">
      {{  link.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang='ts'>

const links = [
  { name: 'Home', path: '/' },
  { name: 'Subscriptions', path: '/subscriptions' },
  { name: 'Analytics', path: '/analytics' },
]
</script>