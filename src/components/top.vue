<template>
  <div class="top">
    <input
      type="text"
      autocomplete="off"
      placeholder="Search"
      class="el-input__inner"
      v-model="inputValue"
      @keyup.enter="toResult"
    />
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    toResult() {
      if (this.inputValue === "") {
        this.$message.warning("please input the song you want to search");
      } else {
        this.$router.push("/result?q=" + this.inputValue);
      }
    }
  }
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
  background: #eaf4f4;
}

.top input {
  float: right;
  height: 37px;
  width: 300px;
  margin: 4px 30px 0 0;
  border-color: #a6a9ad;
}
</style>
