<template>
    <section class="main_container !py-[4rem] sm:!py-[8rem]" id="skill">
        <h1 class="text-[#4245d6] text-[18px] font-bold uppercase tracking-[.5rem]">
            My Skillset
        </h1>
        <p class="leading-[2rem] text-justify text-[15px] ">
            I am a creative problem solver. I build fullstack web and mobile application. I
            use Vuejs, Nuxtjs, Flutter, Nestjs, Nodejs, Mongodb, Google Firebase. I've
            highlighted my key technical skills that i will bring to your project.
        </p>
        <div class=" flex-wrap w-full my-[2rem] flex justify-center gap-[1rem] items-start">
            <div class="max-w-[500px] sm:max-w-[350px] w-full" v-for="skill in skills" :key="skill">
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
        description: 'NuxtJS is a open source framework to build a full-stack application with features such as server- side rendering using VueJS framework.'
    },
    {
        image: "vue.png",
        title: "Frontend Development",
        description: 'VueJS used for creating Single Page Application'
    },
    {
        image: "flutter.png",
        title: "Cross Platform Development",
        description: 'VueJS used for creating Single Page Application'
    },
    {
        image: "nestjs.png",
        title: "Backend Development",
        description: 'Nestjs '
    },
    {
        image: "mongodb.png",
        title: "Database Development",
        description: 'Mongodb database is the best nosql database out there. It is easy to use and it affordable'
    },
    {
        image: "firebase.png",
        title: "Backend Development",
        description: 'Firebase is good for startup to assist them with the backend development.'
    },
]
</script>
