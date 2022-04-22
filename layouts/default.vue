<template>
  <div class="w-100 h-vh bg-yellow-200 overflow-hidden">
    <div class="container mx-auto">
      <TheHeader />

      <div class="p-4 rounded-md bg-white mb-12">
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
