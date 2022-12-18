<template>

    <section class="main_container !py-[4rem] sm:!py-[8rem]" id="projects">
        <h1 class="text-[#4245d6] text-[18px] font-bold uppercase tracking-[.5rem]">
            Projects
        </h1>
        <p class="leading-[2rem] text-justify text-[15px]">
            Showcasing complete functional projects that demonstrates what i can bring to your project. I built these
            projects
            from the ground up to demonstrate skill front-end, back-end, mobile apps and database development. All these
            projects are fullstack web projects that are built so that you can demo them easily. Contact me to get a
            complete code walkthrough.
        </p>
        <div class="my-[2rem] grids justify-center">
            <div :class="projects.length == 1 ? 'rounded-[10px]' : ''" class=" card photo-1" v-for="project in projects"
                :key="project">

                <NuxtImg class="" :src="project.image" />
                <div class="bg"></div>
                <div class="content">
                    <p>{{ project.app }}</p>
                    <p>Description </p>
                    <div class="flex gap-[1rem] py-[.2rem]">
                        <Icon @click="openModal" size="30" name="ion:ios-eye" />
                        <Icon size="30" name="ri:external-link-line" />
                    </div>
                </div>

            </div>
        </div>
    </section>

    <Teleport to="body">
        <Modal :show="open" animation="door" :duration="300" className="modal lg:grid place-items-center" @hide="open = false">
            <div class="">
                <div class="flex lg:items-start items-center flex-col lg:flex-row max-w-[1100px] mx-auto gap-[2rem] justify-center">
                    <div class="max-w-[600px] w-full">
                        <swiper :autoplay="true" :pagination="{
                            clickable: true
                        }" :modules="modules">
                            <swiper-slide>
                                <NuxtImg sizes="sm:250px md:350px lg:500px" height="" class="rounded-[10px] object-top" src="/nuxtjs.png" />
                            </swiper-slide>
                            <swiper-slide>
                                <NuxtImg sizes="sm:250px md:350px lg:500px" height="" class="rounded-[10px] object-top" src="/nuxtjs.png" />
                            </swiper-slide>
                            <swiper-slide>
                                <NuxtImg sizes="sm:250px md:350px lg:500px" height="" class="rounded-[10px] object-top" src="/nuxtjs.png" />
                            </swiper-slide>
                        </swiper>
                    </div>

                    <div class="">
                        <h1 class="text-[25px] font-bold">Ip Tracker</h1>
                        <p class="my-[1rem] text-[16px] text-justify leading-[1.5rem]">Lorem ipsum dolor sit, amet
                            consectetur
                            adipisicing
                            elit. Ut ratione et sit consectetur dolor debitis
                            tempora aspernatur expedita necessitatibus quaerat dolorum, nesciunt laborum qui reiciendis
                            tenetur
                            corporis molestias. Libero voluptatum a facilis hic illum nisi minima autem laboriosam,
                            repudiandae
                            officiis!
                            <br>
                            <br>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id temporibus illum
                            magnam
                            modi
                            pariatur quia voluptatum ea beatae sequi, maiores sapiente, ipsa delectus consequuntur
                            praesentium
                            architecto laudantium in expedita accusantium incidunt veritatis ipsum numquam ab! Corrupti,
                            ea
                            asperiores officia consequatur, omnis expedita voluptates nostrum optio recusandae
                            reiciendis
                            facilis
                            mollitia.
                        </p>
                        <div class="grid grid-cols-2 gap-[1rem] mb-[2rem]">
                            <div>
                                <h1>Project:</h1>
                                <p>Ip Tracker</p>
                            </div>
                            <div>
                                <h1>Category:</h1>
                                <p>Web Application</p>
                            </div>
                            <div>
                                <h1>Technologies</h1>
                                <p>Vuejs, Css, LeafletJs, Mapbox</p>
                            </div>
                        </div>
                        <div class="flex gap-[1rem]">
                            <button class="px-[2rem] py-[1rem] bg-[#898bff] rounded-[10px] button">
                                <span class="text">Live Preview</span>
                                <span class="icon">
                                    <Icon size="20" name="ri:external-link-line" />
                                </span>
                            </button>
                            <button @click="open = false"
                                class="px-[2rem] py-[1rem] bg-[#fa6161] rounded-[10px] button">
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
    </Teleport>

</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Pagination, Navigation, Autoplay]
const open = ref(false)
const openModal = () => {
    open.value = true
}
const projects = ref([
    {
        app: 'Ip Tracker',
        image: 'iptracker.png'
    },
    {
        app: 'Ip Tracker',
        image: 'iptracker.png'
    },
    {
        app: 'Ip Tracker',
        image: 'iptracker.png'
    },
    {
        app: 'Ip Tracker',
        image: 'iptracker.png'
    },
    {
        app: 'Ip Tracker',
        image: 'iptracker.png'
    },
    {
        app: 'Ip Tracker',
        image: 'iptracker.png'
    },
    {
        app: 'Ip Tracker',
        image: 'iptracker.png'
    },
    {
        app: 'Ip Tracker',
        image: 'iptracker.png'
    }
])
</script>
<style>
.grids {
    display: grid;
    grid-template-columns: minmax(100px, 1fr);
    grid-auto-rows: 320px;
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



.card,
.card>img {
    position: relative;
    overflow: hidden;
    cursor: pointer;
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
