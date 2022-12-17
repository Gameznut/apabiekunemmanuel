<template>
    <div class="p-[1rem] flex flex-col text-justify bg-[#898bff] rounded-lg">
        <div class="flex flex-col gap-[.5rem]">
            <div class="">
                <NuxtImg class="mt-auto" width="90" height="70" fit="contain" background="898bff"  format="avif"  :src="image" />
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
