<template>
  <div class="navigator-wrapper">
    <el-row type="flex">
      <el-col :span="3">
        <a href="#" class="img-container">
          <img
            src="~assets/Navigator/maserati_logo_original.svg"
            title="Maserati"
            class="nv-imge"
          />
        </a>
      </el-col>
      <el-col :span="17" class="middle">
        <el-col :span="2" class="standard" @mouseenter.native="hover" @mouseleave.native="hover">
          <span class="text">品牌</span>
          <span class="iconfont icon-down-arrow"></span>
        </el-col>
        <el-col :span="2" class="standard">
          <span class="text">车型</span>
          <span class="iconfont icon-down-arrow"></span>
        </el-col>
        <el-col :span="2" class="standard">
          <span class="text">新闻</span>
        </el-col>
        <el-col :span="4" class="standard">
          <span class="text">服务 &amp; 售后支持</span>
          <span class="iconfont icon-down-arrow"></span>
        </el-col>
        <el-col :span="3" class="standard">
          <span class="text">工具 &amp; 服务</span>
          <span class="iconfont icon-down-arrow"></span>
        </el-col>
      </el-col>
      <el-col :span="4" class="right">
        <el-col :span="8" class="vh-center white-bg">
          <a href="" class="dealer-text">经销商查询</a>
        </el-col>
        <el-col :span="8" class="vh-center blue-bg">
          <a href="" class="dealer-text">试驾</a>
        </el-col>
        <el-col :span="8" class="vh-center white-bg">
          <a href="">
            <span class="iconfont icon-search"></span>
          </a>
        </el-col>
      </el-col>
    </el-row>
    <!-- 隐藏菜单部分 -->
      <el-row class="disable-mune" v-show="isShow">
        <el-col :span="24">
          <el-col :span="8" class="brand-story">
            <ul class="list">
              <h1 class="title-color">品牌故事</h1>
              <li class="list-item">
                <div class="font-size">
                  意式血统
                  <span class="iconfont icon-down-arrow"></span>
                </div>
                <div class="font-size">
                  传奇历史
                  <span class="iconfont icon-down-arrow"></span>
                </div>
                <div class="font-size">
                  古董车
                  <span class="iconfont icon-down-arrow"></span>
                </div>
              </li>
              <li class="list-item"></li>
              <li class="list-item"></li>
            </ul>
          </el-col>
          <el-col :span="8" class="brand-story">
            <ul class="list">
              <h1 class="title-color">驾驭激情</h1>
              <li class="list-item">
                <div class="font-size">
                  大师驾驶课程
                  <span class="iconfont icon-down-arrow"></span>
                </div>
                <div class="font-size">
                  百年赛车传奇
                  <span class="iconfont icon-down-arrow"></span>
                </div>
                <div class="font-size">
                  工厂之旅
                  <span class="iconfont icon-down-arrow"></span>
                </div>
              </li>
              <li class="list-item"></li>
              <li class="list-item"></li>
            </ul>
          </el-col>
          <el-col :span="8" class="brand-story">
            <ul class="list">
              <h1 class="title-color">合作伙伴</h1>
              <li class="list-item">
                <div class="font-size">
                  杰尼亚
                  <span class="iconfont icon-down-arrow"></span>
                </div>
                <div class="font-size">
                  壳牌
                  <span class="iconfont icon-down-arrow"></span>
                </div>
                <div class="font-size">
                  势霸
                  <span class="iconfont icon-down-arrow"></span>
                </div>
              </li>
            </ul>
          </el-col>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'Navigator',
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    hover() {
      this.isShow = !this.isShow;
    },
    hoverLeave() {
      this.isShow = false;
    }
  }
};
</script>

<style lang="scss" scope>
.el-row {
  position: fixed;
  top: 0;
  left: 0;
  height: 0.9rem;
  border: 1px solid $borderColor;
}
.el-col {
  height: 100%;
  background-color: #fff;
}
.img-container {
  display: block;
  margin: 0 auto;
  width: 1.24rem;
  height: 100%;
  .nv-imge {
    width: 100%;
    height: 100%;
  }
}
.middle {
  height: 0.9rem;
  .standard {
    @include vh-center;
  }
  .text {
    font-size: 0.168rem;
    color: #0c2340;
  }
  .icon-down-arrow {
    display: inline-block;
    font-size: 0.12rem;
    margin-left: 0.02rem;
    transform: rotate(0deg);
    transition: transform 0.2s ease, -webkit-transform 0.2s ease;
    color: #ccc;
  }
  .standard:hover {
    .icon-down-arrow {
      transition: transform 0.2s ease, -webkit-transform 0.2s ease;
      transform: rotate(-180deg);
    }
    border-bottom: 2px solid $defaultFontColor;
  }
}
.right {
  .vh-center {
    @include vh-center;
    height: 100%;
    font-size: 0.144rem;
  }
  .white-bg {
    background-color: $borderColor;
  }
  .blue-bg {
    background-color: $defaultFontColor;
    .dealer-text {
      color: #fff;
    }
  }
  .icon-search {
    font-size: 0.288rem;
    font-weight: 400;
  }
}
.disable-mune {
  height: 3rem;
  border-bottom: 2px solid red;
  .brand-story {
    @include vh-center;
  }
}
.title-color {
  color: $defaultFontColor;
  font-size: 0.35rem;
}
.font-size {
  font-size: 0.2rem;
  margin-top: 0.15rem;
  .icon-down-arrow {
    margin-left: 0.05rem;
    font-size: 0.1rem;
    color: #ccc;
  }
}
//动画部分
</style>