<template>
  <header>
    <div class="block w-full h-full">
      <CoverPhoto />
    </div>

    <nuxt-link to="/">
      <div class="px-6 pt-8 pb-10 rounded-md bg-white my-4">
        <h1 class="text-5xl text-center mb-2">
          Janet (Jan) Arlene Peterson Towne
        </h1>

        <div class="flex">
          <div class="w-24">
            <ProgressiveImage
              src="orange-gerbera-daisy.png"
            />
          </div>
          <h2 class="text-4xl h-24 text-center flex-1" style="line-height: 6rem;">
            Memorial
          </h2>
          <div class="w-32">
            <ProgressiveImage
              src="fuschia-gerbera-daisy.png"
            />
          </div>
        </div>
      </div>
    </nuxt-link>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>
