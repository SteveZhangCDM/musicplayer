<template>
  <div class="index">
    <!-- nav in the left   -->
    <div class="nav">
      <ul>
        <li>discovery more</li>
        <li>recommend songs</li>
        <li>new songs</li>
        <li>new mv</li>
      </ul>
    </div>
    <!-- the container at right -->
    <div class="main"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.index {
  display: flex;
  height: 850px;
}

.index .nav {
  width: 250px;
  background-color: #8da9c4;
}

.index .nav li {
  text-align: center;
  margin: 10px;
}

.main {
  background-color: pink;
  flex: 1;
}
</style>
