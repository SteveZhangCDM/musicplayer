<template>
  <div>
    app
    <input type="button" @click="alertHi" />
  </div>
</template>

<script>
export default {
  methods: {
    alertHi() {
      alert("clicked");
    }
  }
};
</script>

<style>
</style>