<template>
  <div class="main_tabbar">
    <mt-tabbar v-model="selected" class="maintab">
      <mt-tab-item id="1" class="maintab_img">
        <img slot="icon" src="../assets/images/myicons/home.png" v-show="home">
        <img slot="icon" src="../assets/images/myicons/check_home.png" v-show="ch_home">
        首页
      </mt-tab-item>
      <mt-tab-item id="2" class="maintab_img">
        <img slot="icon" src="../assets/images/myicons/bangdan.png" v-show="bangdan">
        <img slot="icon" src="../assets/images/myicons/check_bangdan.png" v-show="ch_bangdan">
        榜单
      </mt-tab-item>
      <mt-tab-item id="3" class="maintab_img">
        <img slot="icon" src="../assets/images/myicons/dianping.png" v-show="dianping">
        <img slot="icon" src="../assets/images/myicons/check_dianping.png" v-show="ch_dianping">
        点评
      </mt-tab-item>
      <mt-tab-item id="4" class="maintab_img">
        <img slot="icon" src="../assets/images/myicons/me.png" v-show="me">
        <img slot="icon" src="../assets/images/myicons/check_me.png" v-show="ch_me">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Maintab',
  data () {
    return {
      selected: '1',
      home: false,
      ch_home: true,
      bangdan: true,
      ch_bangdan: false,
      dianping: true,
      ch_dianping: false,
      me: true,
      ch_me: false
    }
  },
  watch: {
    selected: function (val, oldVal) {
      switch (val) {
        case '1':
          this.$router.push('/')
          this.home = false
          this.ch_home = true
          this.bangdan = true
          this.ch_bangdan = false
          this.dianping = true
          this.ch_dianping = false
          this.me = true
          this.ch_me = false
          break
        case '2':
          this.$router.push('/bill')
          this.home = true
          this.ch_home = false
          this.bangdan = false
          this.ch_bangdan = true
          this.dianping = true
          this.ch_dianping = false
          this.me = true
          this.ch_me = false
          break
        case '3':
          this.$router.push('/com')
          this.home = true
          this.ch_home = false
          this.bangdan = true
          this.ch_bangdan = false
          this.dianping = false
          this.ch_dianping = true
          this.me = true
          this.ch_me = false
          break
        case '4':
          this.$router.push('/me')
          this.home = true
          this.ch_home = false
          this.bangdan = true
          this.ch_bangdan = false
          this.dianping = true
          this.ch_dianping = false
          this.me = false
          this.ch_me = true
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';
.main_tabbar {
  .maintab{
    position: fixed;
    bottom:0px;
    height:98px;
    border-top:1px solid $borderline;
    &_img {
      height: 98px;
      line-height:98px;
      padding-top: 16px;
      box-sizing: border-box;
      color: $tabfontcol;
    }
  }
}

</style>
