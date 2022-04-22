<template>
  <div class="w-100 h-vh bg-yellow-200">
    <div class="container mx-auto">
      <TheHeader />

      <div class="px-4 rounded-md bg-white">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
