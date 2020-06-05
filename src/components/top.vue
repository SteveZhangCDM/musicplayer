<template>
  <div class="top">
    <el-button type="info" icon="el-icon-search" id="top_searchBtn"></el-button>
    <input type="text" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

.top {
  width: 1920px;
  height: 45px;
  background: #eef4ed;
}

.top button {
  float: right;
  margin: 3px 3px 0 0;
  border-radius: 0;
}

.top input {
  float: right;
  height: 37px;
  width: 300px;
  margin: 3px 0 0 0;
  border-color: #a6a9ad;
}
</style>
