<template>
  <div class="homepage">
    <mt-header :title="headertitle" class="header">
    </mt-header>
    <!-- logo ~ input -->
    <div class="reveal">
      <div class="reveal_logo">
        <img src="" alt="">
      </div>
      <div class="reveal_seartab">
        <p>
          <span v-for="(item, index) in searchbase" :key="index" @click="changebase(index)" :class="{'basecolor': checkbase == index}">{{item}}</span>
        </p>
      </div>
      <div class="reveal_search">
        <div class="search">
          <input type="text" placeholder="中榜, 让区块链更透明">
          <a href="">
            <img src="../../assets/images/myicons/sous.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <!-- 4个tab -->
    <div class="navtab">
      <mt-navbar v-model="navModel" class="navMo_tab">
        <mt-tab-item id="1">中榜50强</mt-tab-item>
        <mt-tab-item id="2">点评精选</mt-tab-item>
        <mt-tab-item id="3">今日资讯</mt-tab-item>
        <mt-tab-item id="4">币种涨跌</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="navModel" class="navMo_con">
        <!-- 中榜50强 -->
        <mt-tab-container-item id="1" class="fiftyTab">
          <div class="fiftyTab_header">
            <div>
              <span>
                <img src="../../assets/images/myicons/gongzhonghao.png" alt="">
                &nbsp;&nbsp;公众号
              </span>
              <span>
                <img src="../../assets/images/myicons/zhongbangzhishu.png" alt="">
                &nbsp;&nbsp;中榜指数
              </span>
            </div>
          </div>
          <div class="fiftyTab_con">
            <div class="zb_public">
              <div class="zb_img">
                <a href="#">
                  <span>1</span>
                  <img src="" alt="">
                  <div class="img_text">
                    <p>数字货币趋势狂人</p>
                    <p>biesojosay</p>
                  </div>
                </a>
              </div>
              <div class="zb_num">832.1</div>
            </div>
            <p>简介:权威第三方监督搜附近哦按时发哦是否</p>
          </div>
        </mt-tab-container-item>
        <!-- 点评精选 -->
        <mt-tab-container-item id="2" class="billTab">
          <div class="billTab_img">
            <img src="" alt="">
          </div>
          <div class="billTab_con">
            <p>小番茄&nbsp;&nbsp;
              <span>点评了xxxxxxx</span>
            </p>
            <p>架飞机按房间爱上咖啡机安抚埃及法发工地施工啊嘎嘎阿哥大发发</p>
            <p>
              <span>3分钟前</span>
              <span>
                <a href="">分享挖矿</a>
                <span>赞</span>
              </span>
            </p>
          </div>
        </mt-tab-container-item>
        <!-- 今日资讯 -->
        <mt-tab-container-item id="3" class="infTab">
          <div> </div>
        </mt-tab-container-item>
        <!-- 币种涨跌 -->
        <mt-tab-container-item id="4" class="updownTab">
          <div>
            <mt-navbar v-model="bzModel">
              <mt-tab-item id="1">自选</mt-tab-item>
              <mt-tab-item id="2">涨幅榜</mt-tab-item>
              <mt-tab-item id="3">跌幅榜</mt-tab-item>
            </mt-navbar>
            <!-- tab-container -->
            <mt-tab-container v-model="bzModel">
              <!-- 涨幅榜 -->
              <mt-tab-container-item id="1">
                <div>自选</div>
              </mt-tab-container-item>
              <!-- 涨幅榜 -->
              <mt-tab-container-item id="2">
                <div>涨幅榜</div>
              </mt-tab-container-item>
              <!-- 跌幅榜 -->
              <mt-tab-container-item id="3">
                <div>跌幅榜</div>
              </mt-tab-container-item>
            </mt-tab-container>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <!-- 底部主tabbar -->
    <maintab></maintab>
  </div>
</template>
<script>
import Maintab from '@/components/Maintab'
export default {
  components: {
    Maintab
  },
  data () {
    return {
      headertitle: '', // 标题
      searchbase: ['公众号', '网址', '币种'], // 搜索tab
      checkbase: '0',
      navModel: '1', // 首页4个tab切换
      bzModel: '1' // 币种涨跌tab
    }
  },
  watch: {
    navModel: function (val, oldVal) {
      console.log(val, oldVal)
    },
    bzModel: function (val, oldVal) {
      console.log('涨跌幅')
    }
  },
  created () {
    this.headertitle = '中榜'
  },
  methods: {
    changebase (index) {
      this.checkbase = index
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
.basecolor {
  color: $fontcol;
}
.homepage {
  font-size:26px;
  .header {
    height: 88px;
    line-height:88px;
    width:100%;
    background: #fff;
    color:#000;
    font-size: 36px;
  }
  /* logo-search */
  .reveal {
    height: 312px;
    border-bottom: 1px solid $borderline;
    &_logo {
      height:130px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 288px;
        height: 88px;
        background: #ddd;
      }
    }
    &_seartab{
      height: 56px;
      padding: 0px 31px;
      box-sizing: border-box;
      p {
        height: 56px;
        line-height: 56px;
        span {
          margin-right: 24px;
          box-sizing:border-box;
        }
      }
    }
    &_search{
      height: 126px;
      padding: 13px 31px;
      box-sizing: border-box;
      /* border:1px solid red; */
      .search {
        height: 76px;
        line-height: 76px;
        width: 688px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid #535353;
        input[type="text"] {
          width: 592px;
          height: 48px;
          border: none;
          border-radius: 0;
          border-right: 1px solid #e5e5e5;
          font-size: 26px;
          text-indent: 25px;
        }
        a {
          width: 96px;
          height: 48px;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 42px;
            height: 42px;
          }
        }
      }
    }
  }
  /* navtab */
  .navtab {
    .navMo_tab {
      padding: 0 31px;
      height: 108px;
    }
    .navMo_con {
      .fiftyTab {
        &_header {
          background:rgba(246,246,246,1);
          height: 60px;
          line-height: 60px;
          margin-top: 1px;
          padding: 0px -31px;
          border-top: 1px solid #EEEEEE;
          div {
            font-size: 20px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            span {
              display: flex;
              justify-content: center;
              align-items: center;
              img {
                width: 26px;
                height: 26px;
              }
            }
          }
        }
        &_con {}
      }
    }
  }
}

</style>
