<template>
  <div class="discovery">
    <!-- banner  -->
    <el-carousel :interval="4000" type="card" height="230px">
      <!-- 循环获取到的接口数据 -->
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>

    <!-- recommend list -->
    <div class="recommend">
      <h3 class="title">
        推荐歌单
      </h3>
      <div class="items">
        <div
          class="item"
          :key="index"
          v-for="(item, index) in list"
          @click="toPlayList(item.id)"
        >
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{ item.copywriter }}</span>
            </div>
            <el-image :src="item.picUrl" fit="cover">
              <template v-slot:load>
                <i class="el-icon-loading"></i>
                <strong>图片正在加载中</strong>
              </template>
              <template v-slot:error>
                <i class="el-icon-picture-outline"></i>
                <strong>加载失败</strong>
              </template>
            </el-image>
            <i class="iconfont icon-icon_Play"></i>
          </div>
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
    </div>

    <!-- new songs -->
    <div class="newsong">
      <h3 class="title">
        NEW Song
      </h3>
      <div class="items">
        <div class="item" v-for="(item, index) in songs" :key="index">
          <div class="img-wrap">
            <img src="item.picUrl" alt="" />
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
import axios from 'axios';

export default {
  name: 'discovery',
  data() {
    return {
      banners: [],
      list: [],
      songs: [],
    };
  },
  created() {
    //get banner
    axios({
      url: 'https://autumnfish.cn/banner',
      method: 'get',
    }).then((res) => {
      this.banners = res.data.banners;
    });
    //get recommend
    axios({
      url: 'https://autumnfish.cn/personalized',
      method: 'get',
      params: {
        limit: 10,
      },
    }).then((res) => {
      // console.log(res);
      this.list = res.data.result;
    });
    //get new songs
    axios({
      url: 'https://autumnfish.cn/personalized/newsong',
      method: 'get',
    }).then((res) => {
      // console.log(res);
      this.songs = res.data.result;
    });
  },
  methods: {
    playMusic(id) {
      axios({
        url: 'https://autumnfish.cn/song/url',
        method: 'get',
        params: {
          id,
        },
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

h3 .titile {
  font-weight: 500;
  height: 50px;
  line-height: 50px;
}

p .name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.recommend .items {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 80px;
}

.recommend .items .item {
  width: 19%;
  overflow: hidden;
}

.recommend .item .img-wrap {
  position: relative;
  width: 100%;
}

.recommend .item .img-wrap .desc-wrap {
  position: absolute;
  width: 100%;
  top: -50px;
  left: 0;
  font-size: 16px;
  transition: all 0.5s;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  max-height: 50px;
  padding: 5px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.newsong .items {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 80px;
}

.newsong .items .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 100px;
  padding-left: 15px;
  box-sizing: border-box;
}
</style>
