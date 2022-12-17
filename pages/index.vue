<template>
  <div>
    <Nav />
    <main>
      <section class="bg-[#000000] text-[white] duration-300 relative">
        <div class="main_container h-screen grid place-items-center">
          <div class="text-center">
            <h2 class="text-[20px]">HELLO, WORLD.</h2>
            <h1 class="lg:text-[80px] text-[40px]">I'm Apabiekun Emmanuel.</h1>
            <p class="text-[20px]">FULLSTACK DEVELOPER</p>
            <nuxt-link to="#about">
              <button
                class="py-[1rem] px-[2rem] hover:border-[#898bff] duration-300 border-[4px] mt-[2rem] uppercase">
                <span class="flex items-center gap-[.8rem]">More About Me
                  <Icon class="" name="ion:arrow-down-b" />
                </span>
              </button>
            </nuxt-link>

          </div>
          <div class="absolute bottom-[10px] lg:bottom-[4rem]">
            <div class="flex gap-[2rem]">
              <Icon size="30" name="ion:social-instagram-outline" />
              <Icon size="30" name="ion:social-facebook" />
              <Icon size="30" name="ion:logo-github" />
              <Icon size="30" name="ion:logo-twitter" />
            </div>
          </div>
        </div>
      </section>
      <About />
      <Skill />
      <section class="bg-[#000]">
        <div class="main_container !py-[3rem] flex justify-between items-center lg:flex-row flex-col gap-[1rem]">
          <div class="text-[white] text-center">
            <p class="text-[25px] lg:text-start font-bold mb-[1rem]">Let's work together!</p>
            <p>I am available for fulltime or freelance projects. Hire me and get your project done.</p>
          </div>
          <div>
            <nuxt-link to="#contact"
              class="py-[1rem] px-[2rem] bg-[#898bff] rounded-[10px] hover:bg-white duration-300 font-bold block ">Hire
              me</nuxt-link>
          </div>
        </div>
      </section>
      <Works />
      <Contact />
    </main>
  </div>
</template>
<script>


</script>
<style>

</style>
