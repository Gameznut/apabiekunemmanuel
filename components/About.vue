<template>

    <section class="main_container !py-[4rem]  sm:!py-[8rem]" id="about">
        <h1 class="text-[#4245d6] text-[18px] mb-[2rem] font-bold uppercase tracking-[.5rem]">About</h1>
        <!-- <p class=" text-[25px] sm:text-[35px]">Let me introduce myself.</p> -->
        <div class="flex lg:flex-row flex-col  gap-[2rem] max-w-[1200px] justify-start lg:items-start items-center">
            <div class=""><nuxt-img alt="my image" class="rounded-md shadow-[#2b2a2a9d] shadow-md" sizes="sm:250px md:350px lg:500px"
                    width="" height="600" src="/emmanuel.jpg" /></div>
            <div class="max-w-[800px] w-full">
                <!-- <h1 class="text-[25px]  font-[600]">
                    I'm, Apabiekun Emmanuel, a Fullstack Web and Mobile Developer
                </h1> -->
                <p class="leading-[2rem] text-justify text-[16px] my-[2rem] ">
                    Are you a startup with a big idea but not sure how to bring it to life? Look no further! My name is Apabiekun Emmanuel
                    and I am a fullstack web and mobile developer with a passion for turning vision into reality. Based in Nigeria, I have
                    years of experience in software development and a track record of success helping startups achieve their goals. With my
                    ability to prioritize tasks and iterate quickly, I deliver high-quality results on time and within budget.
                    
                    But it's not just startups that I can help - I also offer my services to businesses looking to refresh and revitalize
                    their old web applications. So whether you're a startup with a bold new idea or a business looking to update and
                    upgrade, I'm the developer for you. Take a look at my portfolio of work and see for yourself the value I can bring to
                    your next project. I am confident in my ability to help your business succeed and achieve its goals. Contact me today to
                    discuss how I can turn your vision into a reality.
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
