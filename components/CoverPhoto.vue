<template>
  <div>
    <div class="cover">
      <client-only>
        <progressive-background
          src="/jan-towne/images/full-size/banner.jpeg"
          placeholder="/jan-towne/images/placeholder/banner.jpeg"
          alt="Jan and Jeff with their three sons"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoverPhoto',
};
</script>

<style>
  .cover .progressive-background {
    max-height: 500px;
  }

  .cover .progressive-background-image {
    background-position: 50% 15%;
  }
</style>
