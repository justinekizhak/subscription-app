<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <div class="flex-grow px-8">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
