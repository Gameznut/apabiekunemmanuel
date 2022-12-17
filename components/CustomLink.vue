<template>
  <div>
    <NuxtLink :to="destinataion" v-if="internal ?? false">
      <slot name="internal"></slot>
    </NuxtLink>
    <a :href="downloaddestinataion" download="" v-if="download ?? false">
      <slot name="download"></slot>
    </a>
  </div>
</template>

<script setup>
const props = defineProps([
  "internal",
  "destinataion",
  "download",
  "downloaddestinataion",
]);
</script>
