<template>

    <section class="main_container !py-[4rem] sm:!py-[8rem]" id="about">
        <h1 class="text-[#4245d6] text-[18px] font-bold uppercase tracking-[.5rem]">About</h1>
        <p class="mb-[2rem] text-[25px] sm:text-[35px]">Let me introduce myself.</p>
        <div class="flex lg:flex-row flex-col  gap-[2rem] max-w-[1200px] justify-start lg:items-start items-center">
            <div class=""><nuxt-img alt="my image" class="rounded-md shadow-[#2b2a2a9d] shadow-md" sizes="sm:250px md:350px lg:500px"
                    width="" height="600" src="/emmanuel.jpg" /></div>
            <div class="max-w-[800px] w-full">
                <h1 class="text-[25px]  font-[600]">
                    I'm, Apabiekun Emmanuel, a Fullstack Web and Mobile Developer
                </h1>
                <p class="leading-[2rem] text-justify text-[15px] my-[2rem] ">
                    I'm a software developer based in Nigeria and i have been building applications websites for
                    years bring
                    startup ideas to life. I help convert a vision and an idea into meaningful and useful software
                    product.
                    Having the ability transform requirements into useful software helps me prioritize task, iterate
                    fast and
                    deliever faster. Take a look at my portfolio, work and lets see if we can work together on your
                    next
                    project.
                </p>

                <div class="flex gap-[.9rem] sm:gap-[2rem] flex-row-reverse justify-end mt-[2rem]">

                    <NuxtLink to="#projects">
                        <span
                            class="border-[2px] border-[#898bff] hover:border-[#4244d68e] bg-[#4244d68e] px-[2rem] py-[.5rem] text-[17px] sm:text-[20px] rounded-md hover:bg-[black] hover:text-[#fff] duration-300">Projects</span>
                    </NuxtLink>

                    <NuxtLink href="apabiekunemmanuel.pdf" target="_blank">
                        <span
                            class="border-[2px] cursor-pointer border-[#4244d68e] px-[2rem] py-[.5rem] text-[17px] sm:text-[20px] rounded-md hover:border-[black] duration-300">
                            My
                            Resume</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>
