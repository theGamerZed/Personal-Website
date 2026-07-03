<script>
  import { fly } from "svelte/transition";
  import Footer from "$lib/components/footer.svelte";
  import Navbar from "$lib/components/navbar.svelte";
  import imga from "/static/images/illlustrations.svg";
  
  // Add your projects here
  const projects = [
    {
      title: "My Project",
      description: "This is my portfolio project. It showcases my skills and work.",
      image: "/static/project pics/me.jpg",
      url: "https://personal-website-wheat-nine-73.vercel.app/",
      buttonText: "View Project"
    },
    // Add more projects below:
    {
      title: "Online Movie Database",
      description: "A simple movie database application built with Flask and Cline and Bootstrap. It allows users to add movies, view details, and manage their favorite/watched movies.",
      image: "/static/project pics/movie.png",
      url: "https://github.com/theGamerZed/Cline-Mastery",
      buttonText: "View Project"
    },
    {
      title: "Automatic job application",
      description: "An application that automatically applies to jobs on JOBRUF.com based on preset preferences and qualifications.",
      image: "/static/project pics/job_ruf.png",
      url: "https://github.com/theGamerZed/jobruf-jobs-",
      buttonText: "View Project"
    },
  ];
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>
<Navbar />
<div
  class="container mx-auto px-4 py-12"
  in:fly={{ y: 100 }}
>
  <h1 class="font-head text-5xl font-extrabold text-center mb-12">
    My Projects
  </h1>
  
  {#if projects.length > 0}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each projects as project}
        <div class="card bg-base-100 shadow-xl">
          <figure class="px-4 pt-4">
            <img 
              src={project.image} 
              alt={project.title} 
              class="rounded-xl w-full h-48 object-cover"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-head text-2xl">{project.title}</h2>
            <p class="text-base-content/70">{project.description}</p>
            <div class="card-actions mt-4">
              <a href={project.url} class="btn btn-primary" target="_blank">
                {project.buttonText}
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="grid place-items-center w-full min-h-[50vh]">
      <div class="max-w-xs">
        <img src={imga} alt="freelancing 404" class="!max-w-xs" />
        <h1 class="font-head text-center font-extrabold text-3xl mt-8">
          No Projects yet
        </h1>
        <p class="text-xl mb-4 text-center">
          I am working hard to add more amazing content soon
        </p>
      </div>
      <a href="/" class="btn btn-primary btn-wide">Take me back</a>
    </div>
  {/if}
</div>
<Footer />
