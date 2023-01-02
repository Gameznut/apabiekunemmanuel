<template>

    <section class="main_container !py-[4rem] sm:!py-[8rem]" id="projects">
        <h1 class="text-[#4245d6] text-[18px] font-bold uppercase tracking-[.5rem]">
            Projects
        </h1>
        <p class="leading-[2rem] text-justify text-[15px]">
            As a fullstack web developer, I have a portfolio of projects that demonstrate my skills in front-end,
            back-end, mobile
            apps, and database development. These projects are complete and functional, and I built them from scratch to
            show my
            capabilities as a developer. If you would like to see the projects in action, just let me know and I can
            provide a demo.
            I am also happy to go over the code with you to give you a better understanding of how the projects were
            built. My
            portfolio showcases my skills and experience as a fullstack web developer, and I believe I can bring value
            to your
            project. Please don't hesitate to contact me if you have any questions.
        </p>
        <div class="my-[2rem] grids justify-center">
            <div :class="projects.length == 1 ? 'rounded-[10px]' : ''" class=" card photo-1" v-for="project in projects"
                :key="project">

                <NuxtImg :alt="project.images[0]" class="" :src="project.images[0]" />
                <div class="bg"></div>
                <div class="content">
                    <p>{{ project.app }}</p>
                    <p>{{ project.desc }} </p>
                    <div class="flex gap-[1rem] py-[.2rem]">
                        <Icon class=" cursor-pointer" @click="openModal(project)" size="30" name="ion:ios-eye" />\
                        <nuxt-link target="_blank" href="https://gameznut.github.io/iptracker/">
                            <Icon class=" cursor-pointer" size="25" name="ri:external-link-line" />
                        </nuxt-link>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <Modal :show="open" animation="door" :duration="300" className="modal lg:grid place-items-center"
        @hide="open = false">
        <div class="">
            <div
                class="flex lg:items-start items-center flex-col lg:flex-row max-w-[1100px] mx-auto gap-[2rem] justify-center">
                <div class="max-w-[600px] w-full">
                    <swiper  :autoplay="true" :spaceBetween="10" :pagination="{
    clickable: true
}" :modules="modules">
                        <swiper-slide v-for="(image, index) in project.images" :key="index">
                            <NuxtImg alt="iptracker 1" class="rounded-[10px] min-h-[500px] object-top"
                                :src="image" />
                        </swiper-slide>
                    </swiper>
                </div>

                <div class="">
                    <h1 class="text-[25px] font-bold">{{ project.app }}</h1>
                    <p class="my-[1rem] text-[16px] text-justify leading-[1.5rem]">
                        {{ project.longDesc }}
                    </p>
                    <div class="grid grid-cols-2 gap-[1rem] mb-[2rem]">
                        <div>
                            <h1>Project:</h1>
                            <p>{{ project.app }}</p>
                        </div>
                        <div>
                            <h1>Category:</h1>
                            <p>{{project.category}}</p>
                        </div>
                        <div>
                            <h1>Technologies</h1>
                            <p>{{ project.techs }}</p>

                        </div>
                    </div>
                    <div class="flex gap-[1rem] flex-col sm:flex-row">



                        <nuxt-link
                            class="flex justify-center items-center button  sm:max-w-[150px] py-[1rem] uppercase font-bold bg-[#898bff] rounded-[10px]"
                            href="https://gameznut.github.io/iptracker/" target="_blank">
                            <span class="text">Live Preview</span>
                            <span class="icon">
                                <Icon size="20" name="ri:external-link-line" />
                            </span></nuxt-link>

                        <nuxt-link
                            class="flex justify-center items-center button  px-[2rem] py-[1rem] sm:max-w-[150px] text-[#898bff] uppercase font-bold bg-[#000000] rounded-[10px]"
                            href="https://github.com/Gameznut/iptracker" target="_blank">
                            <span class="text">Github</span>
                            <span class="icon">
                                <Icon size="20" name="ri:github-line" />
                            </span></nuxt-link>


                        <button @click="open = false"
                            class="px-[2rem] py-[1rem] bg-[#fa6161] text-white sm:max-w-[150px] uppercase font-bold rounded-[10px] button">
                            <span class="text">Close</span>
                            <span class="icon">
                                <Icon size="20" name="ion:close-round" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Modal>

</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Pagination, Navigation, Autoplay]
const open = ref(false)
const project = ref({
    app: '',
    images: [],
    desc: '',
    longDesc: "",
    category: '',
    techs: ''
},)
const openModal = (p) => {
    project.value = p
    open.value = true

}
const projects = ref([
    {
        app: 'Ip Tracker',
        images: ['iptracker.png', 'iptrackerb.png'],
        desc: 'Know the location of any Ip Address',
        longDesc: "The IP tracker tool allows you to easily locate any IP address and find out where it is located. Simply enter the IP address you want to track and it will provide you with detailed information about the location of the IP address, including the country, region, city, and ISP. This information can be helpful for a variety of purposes, such as identifying the location of a website visitor or checking the location of a suspicious IP address. Whether you are a business owner, security professional, or just curious about the location of an IP address, our tool is a quick and easy way to get the information you need",
        category: 'Web Application',
        techs: 'Vuejs, Css, LeafletJs, Mapbox'
    }
])
</script>
<style>
.swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.button {
    width: 100%;
}

.button>.icon {
    display: none;
    transition-duration: 300ms;
}

.button:hover>.icon {
    display: block;
}

.button:hover>.text {
    display: none;
}

.modal {
    position: fixed;
    inset: 0;
    z-index: 100;
    background-color: #fff;
    color: rgb(22, 22, 22);
    padding: 1rem;
    overflow-y: auto;
}

.grids {
    display: grid;
    grid-template-columns: minmax(100px, 1fr);
    grid-auto-rows: 320px;
}

.card,
.card>img {
    position: relative;
    overflow: hidden;
}

.card>img {
    object-fit: cover;
    object-position: top;
    width: 100%;
    height: 100%;
    transition: all 300ms ease-in-out;
}

.card .bg {
    position: absolute;
    inset: 0;
    transition: 300ms;
}

.card:hover .bg,
.card:hover img,
.card:hover .content {
    background-color: rgba(28, 29, 29, 0.562);
    scale: 1.1;
    opacity: 1;
}

.card .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #898bff;
    justify-content: center;
    transition: 300ms;
    opacity: 0;
    position: absolute;
    inset: 0;
}

.card:last-child {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
}

.card:first-child {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

@media (min-width: 700px) {
    .grids {
        grid-template-columns: repeat(2, minmax(100px, 500px));
        grid-auto-rows: 120px;
    }

    .card:first-child,
    .card:last-child {
        grid-row: span 4;
        grid-column: span 2;

    }

    .card:nth-child(3),
    .card:nth-child(7) {
        grid-row: span 3;
    }

    .card:nth-child(2),
    .card:nth-child(6) {
        grid-row: span 4;
    }

    .card:nth-child(4),
    .card:nth-child(5) {
        grid-row: span 3;
    }
}
</style>
