<!--
 * @Author: your name
 * @Date: 2021-01-11 19:09:35
 * @LastEditTime: 2021-01-13 09:36:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /management/pc-management/src/views/system/configuration/index.vue
-->
<!--
 * 系统管理-配置管理
-->
<template>
  <el-card>
    <div class="config-main">
      <span class="system-title">用户端:</span>
      <div class="system-con">
        <div class="system-tip">
          续费到期提醒日期:
          <el-input class="input-tip" v-model="input1" size="mini"></el-input>
          <span class="tip-date">天≤</span>
          发送提醒
        </div>
      </div>
      <el-button round size="mini" type="primary" class="save-btn"
        >保存</el-button
      >
    </div>
    <el-divider></el-divider>
    <div class="config-main">
      <span class="system-title">客户端:</span>
      <div class="system-con">
        <div class="system-tip">
          自动发货比例:
          <el-input class="input-tip" v-model="input2" size="mini"></el-input>
          %
        </div>
        <div class="system-tip">
          商品账号到期通知:
          <el-input class="input-tip" v-model="input3" size="mini"></el-input>
          <span class="tip-date">天≤</span>
          进行系统提醒
        </div>
        <div class="system-tip">
          单个PayPal账户总额度上限达到:
          <el-input class="input-tip" v-model="input4" size="mini"></el-input>
          % 进行系统提醒
        </div>
        <div class="system-tip">
          单个商品库存数量过少警示通知:
          <el-input class="input-tip" v-model="input5" size="mini"></el-input>
          <span class="tip-date">个≤</span>
          进行系统提醒
        </div>
        <div class="system-tip">
          单个产品库存数量过少警示通知:
          <el-input class="input-tip" v-model="input6" size="mini"></el-input>
          <span class="tip-date">个≤</span>
          进行系统提醒
        </div>
      </div>
      <el-button round size="mini" type="primary" class="save-btn"
        >保存</el-button
      >
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      input1: 7,
      input2: 7,
      input3: 100,
      input4: 70,
      input5: 7,
      input6: 7,
    };
  },
};
</script>

<style lang="less" scoped>
.config-main {
  position: relative;
}
.system-title {
  font-size: 18px;
  font-weight: 600;
  color: #000;
}
.system-con {
  margin-top: 20px;
  font-size: 14px;
  .system-tip {
    margin-bottom: 20px;
    .input-tip {
      width: 60px;
      margin-left: 10px;
      margin-right: 5px;
    }
  }
}
.tip-date {
  margin-right: 10px;
  color: #fd4d50;
}
.save-btn {
  width: 80px;
  position: absolute;
  bottom: 0;
  right: 30px;
}
</style>
