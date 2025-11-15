<script>
  import Marquee from "svelte-fast-marquee";
  import ImageLoader from "$lib/components/ImageLoader.svelte";
  import CompanyLogo from "$lib/components/companyLogo.svelte";
  import { SearchIcon, SendIcon, UserIcon } from "svelte-feather-icons";
  import Navbar from "$lib/components/navbar.svelte";
  import BlogCard from "$lib/components/blogCard.svelte";
  import Footer from "$lib/components/footer.svelte";
  import SvelteSeo from "svelte-seo";
  import img404 from "/static/error.png";
  import me2 from "/static/images/me2.jpg";
  import { navigating } from "$app/stores";
  import logoFull from "/static/images/me.jpg";
  import TextSlideshow from "$lib/components/textSlideshow.svelte";
</script>

<SvelteSeo
  title="Foka | Home"
  description="Personal website of Foka Idriss"
  keywords="web-developer portfolio "
/>
<Navbar />
<section
  class="relative hero-bg lg:px-12 px-6 lg:h-screen text-center lg:text-left flex flex-col lg:!flex-row-reverse items-start lg:gap-x-8"
>
  <div
    class="lg:w-[50%] w-full my-8 lg:my-0 grid place-items-center lg:pt-[5rem]"
  >
    <div class=" hidden lg:inline-flex max-w-md p-12 bg-amber-100 c">
      <img src={logoFull} alt="foka Idriss" class="w-full" />
    </div>
    <div class="max-w-[15rem] md:max-w-[20em] lg:hidden">
      <img src={logoFull} alt="Foka Idriss" class="w-full" />
    </div>
  </div>
  <div class="lg:max-w-[50%] w-full flex lg:min-h-full items-center">
    <div>
      <h1
        class="text-6xl md:text-7xl lg:text-8xl font-extrabold font lg:!text-left break-words text-center"
      >
        Design. <br />
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-[#dd4e4e] to-[#771e77]"
          >Create.</span
        > <br /> Code.
      </h1>
      <p
        class="text-2xl mt-4 !mb-12 capitalize opacity-70 text-center lg:text-left font"
      >
        Python and CPP developer/ aspiring Robotics and AI Engineer,turning <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#dd4e4e] to-[#771e77]"
          >Ideas</span
        >
        to
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r to-[#dd4e4e] from-[#771e77]"
          >Reality.</span
        >
      </p>
    </div>
  </div>
</section>
<section>
  <div class="py-3">
    <Marquee>
      <div class="p-3 my-2 rounded-box shadow-xl bg-base-100 mx-4">
        <CompanyLogo size={36} name="svelte" config="mx-8" />
      </div>
      <div class="p-3 my-2 rounded-box shadow-xl bg-base-100 mx-4">
        <CompanyLogo size={36} name="tailwindcss" config="mx-8" />
      </div>
      <div class="p-3 my-2 rounded-box shadow-xl bg-base-100 mx-4">
        <CompanyLogo size={36} name="nodejs" config="mx-8" />
      </div>
      <div class="p-3 my-2 rounded-box shadow-xl bg-base-100 mx-4">
        <CompanyLogo size={36} name="js" config="mx-8" />
      </div>
      <div class="p-3 my-2 rounded-box shadow-xl bg-base-100 mx-4">
        <CompanyLogo size={40} name="sass" config="mx-8" />
      </div>
      <div class="p-3 my-2 rounded-box shadow-xl bg-base-100 mx-4">
        <CompanyLogo size={36} name="supabase" config="mx-8" />
      </div>
      <div class="p-3 my-2 rounded-box shadow-xl bg-base-100 mx-4">
        <CompanyLogo size={36} name="vercel" config="mx-8" />
      </div>
      <div class="p-3 my-2 rounded-box shadow-xl bg-base-100 mx-4">
        <CompanyLogo size={36} name="contentful" config="mx-8" />
      </div>
      <div class="p-3 my-2 rounded-box shadow-xl bg-base-100 mx-4">
        <CompanyLogo size={36} name="pwa" config="mx-8" />
      </div>
    </Marquee>
  </div>
  <div class="hero">
    <div
      class="hero-content flex-col lg:flex-row items-center lg:items-center gap-12 text-center lg:text-left lg:px-20 mt-20"
    >
      <div
        class="p-2 bg-gradient-to-r from-amber-700 via-[#dd4e4e] to-[#771e77] h-max w-full max-w-[140px] rounded-box shadow-2xl bg-repeat-y"
      >
        <div
          class="w-full min-h-[290px] pfp rounded-box"
          style={`background-image: url(./images/me2.jpg)`}
        />
      </div>

      <div>
        <h1 class="text-5xl font-extrabold font-head capitalize">
          Student • Designer • <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-[#dd4e4e] to-[#771e77]"
            >Developer</span
          >
        </h1>
        <div class="prose prose-xl py-6 lg:max-w-2xl">
          <p>
            My name is <b>Idriss Foka</b> and I am a self-taught Python, C++ and
            frontend developer with a knack for design and digital stuff.
          </p>
          <p>
            A 22 year old who discovered coding back in 2019 and has been
            fiddling with these technologies ever since. <br />
            When I'm not coding I'm playing <b>Clash of Clans</b> or watching tutorials
            on Youtube
          </p>
        </div>
        <div
          class="w-full flex gap-8 lg:gap-x-16 sm:flex-nowrap flex-wrap items-center justify-center"
        >
          <div class="w-full lg:w-[50%]">
            <h3 class="font-head font-black text-3xl my-4">Skills</h3>
            <div
              class="flex flex-row gap-5 flex-wrap justify-center lg:justify-start"
            >
              <div
                class="p-2 rounded-md shadow-xl max-w-fit flex gap-4 items-center bg-base-100"
              >
                <div class="max-w-[16rem]">
                  <CompanyLogo size={24} name="js" />
                </div>
                <div class="text-xl font-bold font-code">Javascript</div>
              </div>
              <div
                class="p-2 rounded-md shadow-xl max-w-fit flex gap-4 items-center bg-base-100"
              >
                <div class="max-w-[16rem]">
                  <CompanyLogo size={24} name="tailwindcss" />
                </div>
                <div class="text-xl font-bold font-code">TailwindCSS</div>
              </div>
              <div
                class="p-2 rounded-md flex gap-4 items-center shadow-xl max-w-fit bg-base-100"
              >
                <div class="max-w-[16rem]">
                  <CompanyLogo size={24} name="ts" />
                </div>
                <div class="text-xl font-bold font-code">Typescript</div>
              </div>
              <div
                class="p-2 rounded-md flex gap-4 items-center shadow-xl max-w-fit bg-base-100"
              >
                <div class="max-w-[16rem]">
                  <CompanyLogo size={24} name="svelte" />
                </div>
                <div class="text-xl font-bold font-code">Svelte</div>
              </div>
              <div
                class="p-2 rounded-md flex gap-4 items-center shadow-xl max-w-fit bg-base-100"
              >
                <div class="max-w-[16rem]">
                  <CompanyLogo size={24} name="nodejs" />
                </div>
                <div class="text-xl font-bold font-code">nodejs</div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-[50%]">
            <h3 class="font-head font-black text-3xl my-4">Hobbies</h3>
            <div
              class="flex flex-row gap-5 flex-wrap justify-center lg:justify-start"
            >
              <div
                class="p-2 rounded-md shadow-xl max-w-fit flex gap-4 items-center bg-base-100"
              >
                <div class="max-w-[16rem]">
                  <CompanyLogo size={24} name="playstation" />
                </div>
                <div class="text-xl font-bold font-code">Games</div>
              </div>
              <div
                class="p-2 rounded-md shadow-xl max-w-fit flex gap-4 items-center bg-base-100"
              >
                <div class="max-w-[16rem]">
                  <CompanyLogo size={24} name="wattpad" />
                </div>
                <div class="text-xl font-bold font-code">Reading</div>
              </div>
              <div
                class="p-2 rounded-md shadow-xl max-w-fit flex gap-4 items-center bg-base-100"
              >
                <div class="max-w-[16rem]">
                  <CompanyLogo size={24} name="vscode" />
                </div>
                <div class="text-xl font-bold font-code">Coding</div>
              </div>
              <div
                class="p-2 rounded-md shadow-xl flex gap-4 items-center bg-base-100 max-w-max justify-start"
              >
                <CompanyLogo size={24} name="youtube" />

                <div class="text-xl font-bold font-code">Youtube</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="hero mt-24">
  <div
    class="hero-content flex-col lg:flex-row-reverse lg:items-start gap-12 w-full"
  >
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-extrabold font-head">Got a Project?</h1>
      <p class="py-6 text-2xl">Let's talk about anything (*_*)</p>

      <div class="p-4 rounded-box w-full">
        <h3 class="font-head font-bold text-2xl py-3">Social links</h3>
        <div
          class="flex flex-row gap-5 flex-wrap justify-center lg:justify-start"
        >
          <a href="/">
            <div
              class="p-2 rounded-md shadow-xl max-w-fit flex gap-4 items-center bg-base-100 hover:bg-base-300 transition"
            >
              <div class="max-w-[16rem]">
                <CompanyLogo size={24} name="facebook" />
              </div>
              <div class="text-xl font-bold font-code">Facebook</div>
            </div>
          </a>
          <a href="/">
            <div
              class="p-2 rounded-md shadow-xl max-w-fit flex gap-4 items-center bg-base-100 hover:bg-base-300 transition"
            >
              <div class="max-w-[16rem]">
                <CompanyLogo size={24} name="discord" />
              </div>
              <div class="text-xl font-bold font-code">Discord</div>
            </div>
          </a>
          <a href="/">
            <div
              class="p-2 rounded-md shadow-xl max-w-fit flex gap-4 items-center bg-base-100 hover:bg-base-300 transition"
            >
              <div class="max-w-[16rem]">
                <CompanyLogo size={24} name="twitter" />
              </div>
              <div class="text-xl font-bold font-code">Twitter</div>
            </div>
          </a>
          <a href="/">
            <div
              class="p-2 rounded-md shadow-xl max-w-fit flex gap-4 items-center bg-base-100 hover:bg-base-300 transition"
            >
              <div class="max-w-[16rem]">
                <CompanyLogo size={24} name="youtube" />
              </div>
              <div class="text-xl font-bold font-code">Youtube</div>
            </div>
          </a>
          <a href="/">
            <div
              class="p-2 rounded-md shadow-xl max-w-fit flex gap-4 items-center bg-base-100 hover:bg-base-300 transition"
            >
              <div class="max-w-[16rem]">
                <CompanyLogo size={24} name="youtube" />
              </div>
              <div class="text-xl font-bold font-code">Git</div>
            </div>
          </a>
          <a href="/">
            <div
              class="p-2 rounded-md shadow-xl max-w-fit flex gap-4 items-center bg-base-100 hover:bg-base-300 transition"
            >
              <div class="max-w-[16rem]">
                <CompanyLogo size={24} name="youtube" />
              </div>
              <div class="text-xl font-bold font-code">Linkedin</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label" for="name">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label" for="Email">
            <span class="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Email@doodles.com"
            class="input input-bordered"
          />
        </div>
        <div class="form-control" id="contact">
          <label class="label" for="">
            <span class="label-text">Message</span>
          </label>
          <textarea placeholder="message" class="input input-bordered h-28" />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Send a message</button>
        </div>
      </div>
    </div>
  </div>
</div>
<section class="">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-5xl text-4xl font-bold mb-4">Let's collaborate!</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        I am a very friendly individual who loves to get to know new people. <br
        />
        Got any <strong>Tasty Ideas?</strong> shoot me a message!
      </p>
    </div>
    <div
      class="flex lg:w-2/3 w-full md:flex-row flex-col mx-auto px-8 md:px-0 md:items-end md:space-x-4 md:space-y-0 space-y-4"
    >
      <div class="relative md:mb-0 flex-grow w-full">
        <label for="email" class="label">Email</label>
        <input
          type="email"
          placeholder="theZed@google.com"
          id="email"
          name="email"
          class="input input-bordered w-full"
        />
      </div>
      <div class="relative md:mb-0 flex-grow w-full">
        <label for="text" class="label">Message</label>
        <input
          type="text"
          placeholder="Message..."
          name="text"
          class="input input-bordered w-full"
        />
      </div>
      <button class="btn btn-secondary">Collaborate</button>
    </div>
  </div>
</section>

<Footer />

<style>
  .hero-bg {
    background-color: transparent;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.13'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .pfp {
    background-size: cover;
    background-repeat: no-repeat;
  }
  .c {
    @apply border-2  border-black duration-75;

    box-shadow: -4px 4px #000;
  }
  .c:hover {
    box-shadow: -5px 5px #000;
    @apply border-black;
  }
</style>
