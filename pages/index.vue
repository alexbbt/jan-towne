<template>
  <div>
    <section class="p-4 rounded-md bg-white my-4">
      <h2 class="text-4xl">
        Celebration of Life
      </h2>

      <p class="text-l my-4">
        June 25, 2022 at 3 pm in Colorado Springs, CO.
      </p>

      <p class="my-4">
        The family will be holding a Celebration of Life service on June 25th, 2022
        in Colorado Springs, Co. We are asking for those who wish to attend to please
        RSVP at the link bellow so that we can ensure space to accommodate everyone.
      </p>

      <GreenButton
        to="https://google.com"
        external
      >
        RSVP for Service
      </GreenButton>
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
          allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </section>

    <section class="p-4 rounded-md bg-white my-4">
      <h2 class="text-4xl">
        Obituary
      </h2>

      <p class="my-4">
        Janet (Jan) Arlene Peterson Towne, known to all as Jan, was born September 25, 1944,
        in Quincy, Massachusetts.  She passed away at home in her sleep surrounded by her
        loved ones on January 26, 2022, after a long fight with COVID-19 pneumonia...
      </p>
      <GreenButton to="/obituary">
        Read More
      </GreenButton>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>
