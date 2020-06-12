<template>
  <div class="index-container">
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
    <div class="player">
      <audio :src="musicUrl" controls autoplay></audio>
    </div>
  </div>
</template>

<script>
// import discovery from './01discovery';
export default {
  name: "index",
  data() {
    return {
      musicUrl:
        "http://m7.music.126.net/20200303182550/8aa5971b1630d1527a922ccd2b97f392/ymusic/035d/0109/520e/478f86cc9f6c6539f7c8ed3e06c1bf8e.mp3"
    };
  }
};
</script>

<style>
</style>
