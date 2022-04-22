<template>
  <header>
    <div class="block w-full h-full">
      <CoverPhoto />
    </div>

    <nuxt-link to="/">
      <div class="rounded-md bg-white my-4 overflow-hidden">
        <div class="border-pink-500 border-y-big">
          <div class="border-lime-700 border-y-big">
            <div class="px-6 pt-8 pb-10">
              <h1 class="text-3xl md:text-5xl text-center mb-2">
                Janet (Jan) Arlene Peterson Towne
              </h1>

              <div class="flex justify-center items-center">
                <div class="w-32">
                  <ProgressiveImage
                    src="pink-gerbera-daisy-left.png"
                    skip-placeholder
                    aspect-ratio="0.71"
                  />
                </div>
                <h2 class="text-2xl md:text-4xl text-center italic mx-4">
                  Memorial
                </h2>
                <div class="w-32">
                  <ProgressiveImage
                    src="pink-gerbera-daisy-right.png"
                    skip-placeholder
                    aspect-ratio="0.71"
                  />
                </div>
              </div>
            </div>
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
