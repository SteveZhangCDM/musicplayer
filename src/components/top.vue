<template>
  <div class="top">
    <el-button type="info" icon="el-icon-search"></el-button>
    <input type="text" v-model="inputValue" @keyup.enter="toSearch" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    toSearch() {
      if (this.inputValue === '') {
        alert('please type the song you want to search');
      } else {
        this.$router.push(`/result?q=${this.inputValue}`);
      }
    },
  },
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
