<template>
    <section class="main_container !py-[4rem] sm:!py-[8rem]" id="skill">
        <h1 class="text-[#4245d6] text-[18px] font-bold uppercase tracking-[.5rem]">
            My Skillset
        </h1>
        <p class="leading-[2rem] text-justify text-[15px] ">
            As a fullstack web and mobile developer, I am proficient in using Vue.js, Nuxt.js, and Nest.js to build
            high-quality and scalable applications. With experience in frontend and backend development, as well as database
            management using MongoDB and Google Firebase, I have a well-rounded skillset that allows me to handle all aspects of web
            and mobile development. In addition to my technical expertise, I am a problem-solver with the ability to quickly learn
            and adapt to new technologies. I am also a team player with excellent communication and collaboration skills. My passion
            is delivering top-notch solutions that exceed client expectations.
        </p>
        <div class="w-full my-[2rem] gap-[1rem] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
            <div class="" v-for="skill in skills" :key="skill">
                <SkillCard :title="skill.title" :image="skill.image" :description="skill.description" />
            </div>

        </div>
    </section>
</template>
<script setup>
const skills = [
    {
        image: "nuxtjs.png",
        title: "FullStack Web Development",
   },
    {
        image: "vue.png",
        title: "Frontend Development",
    },
    {
        image: "flutter.png",
        title: "Cross Platform Development",
    },
    {
        image: "nestjs.png",
        title: "Backend Development",
    },
    {
        image: "mongodb.png",
        title: "Database Development",
    },
    {
        image: "firebase.png",
        title: "Backend as a Service",
    },
]
</script>
