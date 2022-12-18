<template>
    <div class="p-[1rem] flex flex-col text-justify bg-[#898bff] rounded-lg">
        <div class="flex flex-col gap-[.5rem]">
            <div class="">
                <NuxtImg :alt="image" class="mt-auto object-contai max-w-[90px] max-h-[70px]" :src="`/${image}`" />
            </div>
            <h1 class="font-bold">{{ title }}</h1>
        </div>
        <p class="text-[13px] basis-[3.5rem] grow-0 shrink">
            {{ description }}
        </p>
    </div>
</template>
<script setup>

defineProps(['title', 'image', 'description'])
</script>
