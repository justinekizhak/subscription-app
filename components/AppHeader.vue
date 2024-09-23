
<template>
  <div>
    <div v-if="showGreetings">
      Greetings
    </div>
    <div v-else @click="$router.back()">
      <
    </div>
  </div>
</template>

<script setup lang='ts'>

const showGreetings = ref(false)
</script>