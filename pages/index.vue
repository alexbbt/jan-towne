<template>
  <div>
    <section class="p-4 rounded-md bg-white my-4">
      <h2 class="text-4xl">
        Celebration of Life
      </h2>

      <p class="text-l my-4 cinzel">
        Janet (Jan) Arlene Peterson Towne <br>
        Saturday, June 25, 2022 at 3 pm. <br>
      </p>

      <p class="text-l my-4 cinzel">
        Sunnyside Christian Church <br>
        2025 N. Murray Blvd <br>
        Colorado Springs, CO. <br>
      </p>

      <p class="text-l my-4 cinzel">
        Dress code: casual attire
      </p>

      <p class="my-4">
        The family will be holding a Celebration of Life service on June 25th, 2022 at
        the Sunnyside Christian Church in Colorado Springs, Co. We are asking for those
        who wish to attend to please RSVP at the link below so that we can ensure space
        to accommodate everyone. The Celebration will be held in a function room on the
        lower level with direct access to the southside parking lot. Casual attire and
        bring a story to share about Jan. If you don’t want to read it or speak aloud you
        can give it to Jennifer, Greg’s wife and she will read them for you.
      </p>

      <p class="my-4">
        Following the event, there will be a potluck dinner in the same room.  For those
        interested, please bring a dish.  We will be supplying bottles of water. The
        room is connected to the church kitchen.
      </p>

      <GreenButton
        to="https://docs.google.com/forms/d/e/1FAIpQLSf4lZXvx89opr29dOWoYd_re2OY8QHRttlM6bvLSWFFG7V3pg/viewform"
        external
      >
        RSVP
      </GreenButton>

      <p class="my-4">
        If you cannot join in the celebration and would like to send a personal message
        please send it to <a href="mailto:jeffjant@gmail.com">jeffjant@gmail.com</a>.
      </p>
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
