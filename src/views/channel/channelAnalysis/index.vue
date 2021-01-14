<!--
 * 渠道管理-渠道分析
-->
<template>
  <!-- 渠道详细数据分析 -->
  <el-card>
    <div class="title activity-title">渠道详细数据分析</div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="渠道名称:" class="more-width">
        <el-select v-model="formInline.channel">
          <el-option label="全部" :value="0"></el-option>
          <el-option label="HUAWEI" :value="1"></el-option>
          <el-option label="eBay" :value="2"></el-option>
          <el-option label="Apple" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="时间:">
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
          <span class="data-main-txt">使用用户数</span>
          <span class="data-main-num">1000人</span>
        </li>
        <li>
          <span class="data-main-txt">复购用户数</span>
          <span class="data-main-num">99人</span>
        </li>
         <li>
          <span class="data-main-txt">用户复购率</span>
          <span class="data-main-num">30%</span>
        </li>
      </ul>
    </div>
    <el-divider></el-divider>
    <div class="data-main">
      <ul>
        <li>
          <span class="data-main-txt">发放订单数量</span>
          <span class="data-main-num">1000次</span>
        </li>
        <li>
          <span class="data-main-txt">使用订单数量</span>
          <span class="data-main-num">720次</span>
        </li>
        <li>
          <span class="data-main-txt">订单使用率</span>
          <span class="data-main-num">60%</span>
        </li>
        <li>
          <span class="data-main-txt">复购订单数</span>
          <span class="data-main-num">400次</span>
        </li>
        <li>
          <span class="data-main-txt">订单复购率</span>
          <span class="data-main-num">49%</span>
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
