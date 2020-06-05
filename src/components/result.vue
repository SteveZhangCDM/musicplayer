<template>
  <div>
    <img src="../assets/result.png" alt="" />
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route.query.q);
  },
};
</script>

<style></style>
