<template>
    <header class="bg-[#000] text-white duration-300 fixed nav top-0 z-[10] w-full">
        <nav class="flex items-center !py-[2rem] justify-end main_container">
            <!-- <NuxtLink class="hover:text-[white]" to="/">EA</NuxtLink> -->
            <div class="gap-[1rem] sm:gap-[2rem] flex items-center justify-end">
                <NuxtLink class="hover:text-[white] text-[20px] font-bold uppercase" to="#skill">Skill</NuxtLink>
                <NuxtLink class="hover:text-[white] text-[20px] font-bold uppercase" to="#projects">Projects</NuxtLink>
                <div>
                    <nuxt-link to="#contact"
                        class="py-[1rem] px-[2rem] text-[#fff] hover:text-[#898bff] font-bold bg-[#4244d68e] rounded-[10px] hover:bg-white duration-300">Hire
                        me</nuxt-link>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
onMounted(() => {
    const nav = document.querySelector(".nav");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 1) nav!.classList.add("scroll");
        else nav!.classList.remove("scroll");
    });
});
</script>
