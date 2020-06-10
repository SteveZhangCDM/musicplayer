<template>
  <div class="discovery-container">
    <!-- banner  -->
    <el-carousel :interval="4000" type="card">
      <!-- 循环获取到的接口数据 -->
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img :src="item.imageUrl" />
      </el-carousel-item>
    </el-carousel>

    <!-- recommend list -->
    <div class="recommend">
      <h3 class="title">Recommend Songs</h3>
      <div class="items">
        <div class="item" v-for="(item, index) in list" :key="index">
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{ item.copywriter }}</span>
            </div>
            <img :src="item.picUrl" alt />
            <span class="iconfont icon-play"></span>
          </div>
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
    </div>

    <!-- new songs -->
    <div class="news">
      <h3 class="title">NEW Song</h3>
      <div class="items">
        <div class="item" v-for="(item, index) in songs" :key="index">
          <div class="img-wrap">
            <img :src="item.picUrl" alt />
            <span></span>
          </div>
          <div class="song-wrap">
            <div class="song-name">{{ item.name }}</div>
            <div class="singer">{{ item.song.artists[0].name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios
import axios from "axios";

export default {
  name: "discovery",
  data() {
    return {
      banners: [],
      list: [],
      songs: []
    };
  },
  created() {
    //get banner
    axios({
      url: "https://autumnfish.cn/banner",
      method: "get"
    }).then(res => {
      this.banners = res.data.banners;
    });
    //get recommend
    axios({
      url: "https://autumnfish.cn/personalized",
      method: "get",
      params: {
        limit: 10
      }
    }).then(res => {
      // console.log(res);
      this.list = res.data.result;
    });
    //get new songs
    axios({
      url: "https://autumnfish.cn/personalized/newsong",
      method: "get"
    }).then(res => {
      // console.log(res);
      this.songs = res.data.result;
    });
  },
  methods: {
    playMusic(id) {
      axios({
        url: "https://autumnfish.cn/song/url",
        method: "get",
        params: {
          id
        }
      }).then(res => {
        let url = res.data.data[0].url;
        this.$parent.musicUrl = url;
      });
    }
  }
};
</script>

<style>
</style>
