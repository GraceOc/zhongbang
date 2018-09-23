<template>
  <div class="billpage">
    <mt-header :title="headertitle" class="header">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
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
      headertitle: ''
    }
  },
  created () {
    this.headertitle = '榜单'
  }
}
</script>

<style lang="scss" scoped>
.billpage {
  .header {
    border: 1px solid red;
    height: 88px;
    line-height:88px;
    width:750px;
    background: #fff;
    color:#000;
    font-size:36px;
  }
}

</style>
