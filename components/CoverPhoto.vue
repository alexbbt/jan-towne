<template>
  <div>
    <div
      ref="cover"
      class="cover"
    >
      <progressive-background
        src="/images/full-size/banner.jpeg"
        placeholder="/images/placeholder/banner.jpeg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoverPhoto'
}
</script>

<style>
  .cover .progressive-background {
    max-height: 800px;
  }

  .cover .progressive-background-image {
    background-position: 50% 15%;
  }
</style>
