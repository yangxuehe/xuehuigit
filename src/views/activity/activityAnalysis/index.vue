<!--
 * 活动管理-活动分析
-->

<template>
  <!-- 活动详细数据分析 -->
  <el-card>
    <div class="title activity-title">活动详细数据分析</div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="活动名称:" class="more-width">
        <el-select v-model="formInline.activity">
          <el-option label="全部" :value="0"></el-option>
          <el-option label="电商" :value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="渠道名称:" class="more-width">
        <el-select v-model="formInline.channel" placeholder="请选择渠道名称">
          <el-option label="全部" :value="0"></el-option>
          <el-option label="HUAWEI" :value="1"></el-option>
          <el-option label="eBay" :value="2"></el-option>
          <el-option label="Apple" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="下单时间选择:">
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
          <span class="data-main-txt">复购订单数</span>
          <span class="data-main-num">1000人</span>
        </li>
        <li>
          <span class="data-main-txt">复购总金额</span>
          <span class="data-main-num">$2000 USD</span>
        </li>
      </ul>
    </div>
    <el-divider></el-divider>
    <div class="data-main">
      <ul>
        <li>
          <span class="data-main-txt">有效次数</span>
          <span class="data-main-num">1000次</span>
        </li>
        <li>
          <span class="data-main-txt">注册用户</span>
          <span class="data-main-num">800人</span>
        </li>
        <li>
          <span class="data-main-txt">参与总时长</span>
          <span class="data-main-num">900天</span>
        </li>
        <li>
          <span class="data-main-txt">购买人数</span>
          <span class="data-main-num">400人</span>
        </li>
        <li>
          <span class="data-main-txt">转化率</span>
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
      formInline: {},
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../../../styles/dataAnalysis.css");
</style>
