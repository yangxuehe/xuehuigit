<!--
 * 库存管理-库存分析
-->
<template>
  <!-- 库存详细数据分析 -->
  <el-card>
    <div class="title activity-title">账号数量概况分析</div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="商品类型:" class="more-width">
        <el-select v-model="formInline.channel">
          <el-option label="Netflix" :value="0"></el-option>
          <el-option label="Stream" :value="1"></el-option>
          <el-option label="Youtube" :value="2"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <!-- 内容 -->
    <div class="data-main browse-data">
      <ul>
        <li>
          <span class="data-main-txt">账号总数量</span>
          <span class="data-main-num">999人</span>
        </li>
        <li>
          <span class="data-main-txt">坑位总数量</span>
          <span class="data-main-num">1100人</span>
        </li>
      </ul>
    </div>
    <el-divider></el-divider>
    <div class="data-main">
      <div class="child-title">XXX(1屏幕)产品</div>
      <ul>
        <li>
          <span class="data-main-txt">账号数量</span>
          <span class="data-main-num">100个</span>
        </li>
        <li>
          <span class="data-main-txt">已售账号数量</span>
          <span class="data-main-num">10个</span>
        </li>
        <li>
          <span class="data-main-txt">待售账号数量</span>
          <span class="data-main-num">90个</span>
        </li>
        <li>
          <span class="data-main-txt">待续费账号数量</span>
          <span class="data-main-num">0个</span>
        </li>
      </ul>
      <ul>
        <li>
          <span class="data-main-txt">坑位数量</span>
          <span class="data-main-num">100个</span>
        </li>
        <li>
          <span class="data-main-txt">已售坑位数量</span>
          <span class="data-main-num">10个</span>
        </li>
        <li>
          <span class="data-main-txt">待售坑位数量</span>
          <span class="data-main-num">90个</span>
        </li>
        <li>
          <span class="data-main-txt">待续费账号数量</span>
          <span class="data-main-num">0个</span>
        </li>
      </ul>
    </div>
    <el-divider></el-divider>
    <div class="data-main">
      <div class="child-title">XXX(5屏幕)产品</div>
      <ul>
        <li>
          <span class="data-main-txt">账号数量</span>
          <span class="data-main-num">100个</span>
        </li>
        <li>
          <span class="data-main-txt">已售账号数量</span>
          <span class="data-main-num">10个</span>
        </li>
        <li>
          <span class="data-main-txt">待售账号数量</span>
          <span class="data-main-num">90个</span>
        </li>
        <li>
          <span class="data-main-txt">待续费账号数量</span>
          <span class="data-main-num">0个</span>
        </li>
      </ul>
      <ul>
        <li>
          <span class="data-main-txt">坑位数量</span>
          <span class="data-main-num">100个</span>
        </li>
        <li>
          <span class="data-main-txt">已售坑位数量</span>
          <span class="data-main-num">10个</span>
        </li>
        <li>
          <span class="data-main-txt">待售坑位数量</span>
          <span class="data-main-num">90个</span>
        </li>
        <li>
          <span class="data-main-txt">待续费账号数量</span>
          <span class="data-main-num">0个</span>
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
.child-title{
  font-size: 20px;
  font-weight: 900;
}
.el-form--inline{
  border-bottom: none;
}
</style>
