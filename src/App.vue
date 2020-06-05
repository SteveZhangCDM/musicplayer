<template>
  <div>
    <!-- top of the page -->
    <top></top>
    <index></index>
  </div>
</template>

<script>
//import components
import top from './components/top';
import index from './components/index';

export default {
  components: {
    top,
    index,
  },
  methods: {
    alertHi() {
      alert('clicked');
    },
  },
};
</script>

<style></style>
