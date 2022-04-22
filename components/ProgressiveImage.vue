<template>
  <client-only>
    <progressive-img
      :src="'/jan-towne/images/full-size/' + src"
      :placeholder="'/jan-towne/images/placeholder/' + src"
    />
  </client-only>
</template>

<script>
export default {
  name: 'ProgressiveImage',

  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>
