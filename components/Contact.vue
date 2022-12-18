<template>
    <section id="contact" class=" bg-[#000] relative  !py-[4rem] sm:!py-[8rem] text-white">
        <div class="custom-shape-divider-top-1671220182">
            <svg class="sm:!h-[150px] !h-[50px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    opacity=".25" class="shape-fill"></path>
                <path
                    d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                    opacity=".5" class="shape-fill"></path>
                <path
                    d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                    class="shape-fill"></path>
            </svg>
        </div>
        <div class="main_container  ">
            <h1 class="text-[#4245d6] text-[18px] font-bold uppercase tracking-[.5rem]">Get in Touch</h1>
            <p class="mb-[2rem] text-[25px] sm:text-[35px]">Feel free to contact me anytime</p>
            <form @submit.prevent="send" class="flex flex-col gap-[3rem]">
                <div class="flex flex-col relative ">
                    <input v-model="user.name" required placeholder=" " id="name" type="text" />
                    <label for="name">Name</label>
                </div>
                <div class="flex flex-col relative">
                    <input v-model="user.email" required placeholder=" " id="email" type="email" />
                    <label for="email">Email</label>
                </div>
                <div class="flex flex-col relative">
                    <input v-model="user.subject" placeholder=" " id="suject" type="text" />
                    <label for="suject">Subject</label>
                </div>
                <div class="flex flex-col relative">
                    <textarea v-model="user.message" required class=" resize-none" placeholder=" " id="message"
                        cols="30" rows="10"></textarea>
                    <label for="message">Message</label>
                </div>
                <div class="w-full items-center gap-[1rem] justify-between flex flex-col-reverse sm:flex-row">
                    <NuxtLink
                        class="max-w-[220px] flex justify-center items-center gap-1 w-full uppercase py-[1rem] px-[2rem] text-[#000] text-center hover:text-[#8991ff] font-bold bg-[#8991ff] rounded-[10px] hover:bg-[#fff] duration-300"
                        to="mailto:emmanuelapabiekun@gmail.com"><span>
                            <Icon size="25" name="ion:mail" />
                        </span>Email me</NuxtLink>
                    <button
                        class="max-w-[220px] flex items-center justify-center uppercase  w-full py-[1rem] px-[2rem] hover:text-[#000] text-[#8991ff] text-center font-bold hover:bg-[#8991ff] rounded-[10px] bg-[#fff] duration-300"><span>
                            <Icon size="25" name="ion:paper-plane" />
                        </span>Send
                        Message</button>
                </div>
            </form>
        </div>
        <p class="absolute bottom-[10px] text-center right-0 left-0 text-[12px] sm:text-[20px]">© Copyright 2022 Design
            by Apabiekun Emmanuel</p>
    </section>
</template>

<script setup>
const config = useRuntimeConfig()

const user = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
})




const send = () => {
    try {
        const withoutLineBreaks = user.value.message.replace(/[\r\n]/gm, ' <b>(NEXTLINE).</b> ')
        var content = `<b>Name: </b> ${user.value.name} %0A<b>Email: </b> ${user.value.email}%0A<b>Subject: </b>${user.value.subject} %0A<b>Message: </b>${withoutLineBreaks}`;
        const url = `https://api.telegram.org/bot${config.telegramToken}/sendMessage?chat_id=${config.public.chatId}&text=${content}&parse_mode=html`;
        let api = new XMLHttpRequest();

        api.open("GET", url, true);
        if (api.readyState === 1) {
            if (api.status === 0) {
                // toaster
                alert('Request sent')
            } else {
                // toaste
                alert('Request failed');
            }
        }
        api.send();
        user.value.email = ''
        user.value.name = ''
        user.value.message = ''
        user.value.subject = ''
    } catch (error) {
        console.log(error);
        alert('There was an error, If error still persist email me. Sorry for the inconvenience')
    }

}

</script>

<style>
.custom-shape-divider-top-1671220182 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1671220182 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 147px;
    transform: rotateY(180deg);
}

.custom-shape-divider-top-1671220182 .shape-fill {
    fill: white;
}

input,
textarea {
    border-bottom: black 2px solid;
    outline: none;
    padding: .5rem 1rem;
    transition-duration: 300ms;
    font-size: 16px;
    font-weight: 700;
    color: #898bff;
    background: #ffffff11;
}

input+label {
    position: absolute;
    height: 100%;
    align-items: center;
    transition: 300ms ease;
    transform: translateX(1rem);
    display: flex;
}

textarea+label {
    position: absolute;
    align-items: center;
    transition: 300ms ease;
    transform: translateX(1rem);
    display: flex;
    top: .2rem;
}

input:hover,
input:focus,
input:not(:placeholder-shown),
textarea:hover,
textarea:focus,
textarea:not(:placeholder-shown) {
    background: #898bff38;
    border-bottom-color: #8991ff;
}

input:hover+label,
input:focus+label,
input:not(:placeholder-shown)+label {
    transform: translateY(-35px);
}

textarea:hover+label,
textarea:focus+label,
textarea:not(:placeholder-shown)+label {
    transform: translateY(-100%);
    top: 0px;
}
</style>
