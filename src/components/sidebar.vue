<template>
  <div class="component-aside">
    
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#314255"
      text-color="#fff"
      active-text-color="#46A0FC"
      :collapse="isCollapse"
      router
    >
    <Logo />
      <el-menu-item index="/index">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-shop"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item index="/goods/goodsClass">商品分类</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-claim"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item index="/order/list">订单列表</el-menu-item>
        <el-menu-item index="/order/dispute">纠纷</el-menu-item>
        <el-menu-item index="/order/refund">退款</el-menu-item>
        <el-menu-item index="/order/disputeClass">纠纷分类</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-s-marketing"></i>
          <span>渠道管理</span>
        </template>
        <el-menu-item index="/channel/channelClass">渠道分类</el-menu-item>
         <el-menu-item index="/channel/channelOrderHandle">渠道订单处理</el-menu-item>
         <el-menu-item index="/channel/channelOrderDone">渠道生效订单</el-menu-item>
         <el-menu-item index="/channel/channelOrderSummary">渠道订单汇总</el-menu-item>
          <el-menu-item index="/channel/channelAnalysis">渠道分析</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-s-flag"></i>
          <span>活动管理</span>
        </template>
        <el-menu-item index="/activity/activityClass">活动分类</el-menu-item>
        <el-menu-item index="/activity/activityCreate">活动生成</el-menu-item>
        <el-menu-item index="/activity/activityList">活动订单查询</el-menu-item>
        <el-menu-item index="/activity/activityInventory">活动库存</el-menu-item>
        <el-menu-item index="/activity/activityAnalysis">活动分析</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-s-management"></i>
          <span>库存管理</span>
        </template>
        <el-menu-item index="/inventory/accountInput">账号录入</el-menu-item>
        <el-menu-item index="/inventory/accountStock">账号库存</el-menu-item>
        <el-menu-item index="/inventory/accountAnalysis">库存分析</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-s-comment"></i>
          <span>消息管理</span>
        </template>
        <el-submenu index="7-1">
          <template slot="title">帮助中心</template>
          <el-menu-item index="/messages/helpCenter/articleClass">文章分类</el-menu-item>
          <el-menu-item index="/messages/helpCenter/articleEdit">文章编辑</el-menu-item>
        </el-submenu>
        <el-submenu index="7-2">
          <template slot="title">官网信件发送</template>
          <el-menu-item index="/messages/letterSend/letterEdit">信件编辑</el-menu-item>
          <el-menu-item index="/messages/letterSend/autoSend">自动发送模板</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span>财务管理</span>
        </template>
        <el-menu-item index="/finance/shroffAccount">收款账号</el-menu-item>
        <el-submenu index="8-2">
          <template slot="title">财务分析</template>
          <el-menu-item index="/finance/shroffCollect">收款汇总</el-menu-item>
          <el-menu-item index="/finance/refundCollect">退款汇总</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/system/identity">身份管理</el-menu-item>
        <el-menu-item index="/system/account">账号管理</el-menu-item>
        <el-menu-item index="/system/configuration">配置管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
// 导入公用bus
import bus from "../utils/bus";
import Logo from "../components/logo";
export default {
  components: {
    Logo,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  created() {
    //  接受兄弟组件传过来的参数
    bus.$on("passitem", (value) => {
      this.isCollapse = value;
    });
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less">
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
