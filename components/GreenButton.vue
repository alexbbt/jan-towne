<template>
  <a
    v-if="external"
    :class="classes"
    target="_blank"
    :href="to"
  >
    <slot />
  </a>
  <nuxt-link
    v-else
    :class="classes"
    :to="to"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: 'ProgressiveImage',

  props: {
    to: {
      type: String,
      required: true,
    },
    external: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    classes: 'focus:outline-none text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 '
      + 'focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '
      + 'dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800 inline-block',
  }),
};
</script>
