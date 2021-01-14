<!--
 * 首页
-->

<template>
  <!-- 活动详细数据分析 -->
  <el-card>
    <div class="title activity-title">商城数据总览</div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="时间选择:">
        <el-radio-group v-model="formInline.radio2" size="mini">
          <el-radio-button label="今天"></el-radio-button>
          <el-radio-button label="最近7天"></el-radio-button>
          <el-radio-button label="最近30天"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-form-item>
    </el-form>
    <!-- 内容 -->
    <div class="data-main browse-data">
      <ul>
        <li>
          <span class="data-main-txt">商城浏览量</span>
          <span class="data-main-num">1000次</span>
        </li>
        <li>
          <span class="data-main-txt">商城访客数</span>
          <span class="data-main-num">999人</span>
        </li>
      </ul>
    </div>
    <el-divider></el-divider>
    <div class="data-main">
      <ul>
        <li>
          <span class="data-main-txt">订单数</span>
          <span class="data-main-num">1000天</span>
        </li>
        <li>
          <span class="data-main-txt">支付订单数</span>
          <span class="data-main-num">400人</span>
        </li>
        <li>
          <span class="data-main-txt">订单金额</span>
          <span class="data-main-num">$30930</span>
        </li>

        <li>
          <span class="data-main-txt">支付金额</span>
          <span class="data-main-num">400</span>
        </li>
        <li>
          <span class="data-main-txt">下单转化率</span>
          <span class="data-main-num">44.4%</span>
        </li>
      </ul>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      value1: "",
      formInline: {
        radio2: "今天",
      },
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
@import url("../../styles/dataAnalysis.css");
</style>
