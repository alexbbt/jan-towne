<template>
  <client-only>
    <progressive-img
      :src="'/images/full-size/' + src"
      :placeholder="skipPlaceholder || '/images/placeholder/' + src"
      :aspect-ratio="aspectRatio"
    />
  </client-only>
</template>

<script>
export default {
  name: 'ProgressiveImage',

  props: {
    src: {
      type: String,
      required: true,
    },
    skipPlaceholder: {
      type: Boolean,
      default: false,
    },
    aspectRatio: {
      type: String,
      default: '',
    },
  },
};
</script>
