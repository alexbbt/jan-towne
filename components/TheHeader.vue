<template>
  <header>
    <div class="block w-full h-full">
      <CoverPhoto />
    </div>

    <div class="px-6 pt-8 pb-10 rounded-md bg-white my-4">
      <div class="w-24 float-left">
        <ProgressiveImage
          src="orange-gerbera-daisy.png"
        />
      </div>
      <div class="w-32 float-right">
        <ProgressiveImage
          src="fuschia-gerbera-daisy.png"
        />
      </div>

      <h1 class="text-5xl text-center">
        Janet A. Towne
        <br>
        <small>Memorial</small>
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>
