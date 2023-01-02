<template>
    <div class="p-[1rem] flex flex-col text- bg-[#898bff] rounded-lg">
        <div class="flex flex-col gap-[.5rem]">
            <div class="">
                <NuxtImg :alt="image" class="mt-auto object-contai max-w-[90px] max-h-[70px]" :src="`/${image}`" />
            </div>
            <h1 class="font-bold text-[14px]">{{ title }}</h1>
        </div>
        <p class="text-[12px]">
            {{ description }}
        </p>
    </div>
</template>
<script setup>

defineProps(['title', 'image', 'description'])
</script>
