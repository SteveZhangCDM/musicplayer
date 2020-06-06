<template>
  <div class="index">
    <!-- nav in the left   -->
    <div class="nav">
      <ul>
        <li>
          <router-link to="/discovery">
            <span class="iconfont icon-find-music"></span>Discovery More
          </router-link>
        </li>
        <li>
          <router-link to="/recommendmusic">
            <span class="iconfont icon-music-list"></span>Recommend Music
          </router-link>
        </li>
        <li>
          <router-link to="/newsongs">
            <span class="iconfont icon-music"></span>New Song
          </router-link>
        </li>
        <li>
          <router-link to="/newmvs">
            <span class="iconfont icon-mv"></span>New MV
          </router-link>
        </li>
      </ul>
    </div>
    <!-- the container at right -->
    <div class="main">
      <!-- router exit -->
      <router-view></router-view>
    </div>
    <!-- <div class="player">
      <audio src="musicUrl" controls></audio>
    </div>-->
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
