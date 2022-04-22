<template>
  <div>
    <section class="p-4 rounded-md bg-white my-4">
      <h2 class="text-4xl">
        Celebration of Life
      </h2>

      <p class="text-l my-4">
        June 25, 2022 in Colorado Springs, CO.
      </p>

      <p class="my-4">
        The family will be holding a Celebration of Life service on June 25th, 2022
        in Colorado Springs, Co. We are asking for those who wish to attend to please
        RSVP at the link bellow so that we can ensure space to accommodate everyone.
      </p>

      <a
        class="focus:outline-none text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
        href="https://google.com"
        target="_blank"
      >RSVP for Service</a>
    </section>

    <section class="p-4 rounded-md bg-white my-4">
      <h2 class="text-4xl mb-4">
        Memorial Presentation
      </h2>

      <div
        class="relative h-0 overflow-hidden max-w-full w-full"
        style="padding-bottom: 56.25%;"
      >
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/cHYCxIDAW9k"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </section>

    <section class="p-4 rounded-md bg-white my-4">
      <h2 class="text-4xl">
        Obituary
      </h2>

      <p class="my-4">
        Janet Arlene (Peterson) Towne, known to all as Jan, was born September 25, 1944, in Quincy,
        Massachusetts.  She passed away at home in her sleep surrounded by her loved ones on
        January 26, 2022, after a long fight with COVID-19 pneumonia...
      </p>
      <nuxt-link
        class="focus:outline-none text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
        to="/obituary"
      >
        Read More
      </nuxt-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
