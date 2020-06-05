<template>
  <div class="index">
    <!-- nav in the left   -->
    <div class="nav">
      <ul>
        <li><router-link to="/discovery">Discovery More</router-link></li>
        <li><router-link to="/recommendmusic">Recommend Music</router-link></li>
        <li><router-link to="/newsongs">New Song</router-link></li>
        <li><router-link to="/newmvs">New MV</router-link></li>
      </ul>
    </div>
    <!-- the container at right -->
    <div class="main">
      <!-- router exit -->
      <!-- <discovery></discovery> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import discovery from './01discovery';
export default {
  // components: {
  //   discovery,
  // },
};
</script>

<style>
.index {
  display: flex;
  height: 850px;
}

.index .nav {
  width: 250px;
  background-color: #c5c3c6;
}

.index .nav li {
  text-align: center;
  margin: 10px;
}

.index .nav a {
  text-decoration: none;
}

.main {
  background-color: pink;
  flex: 1;
}
</style>
