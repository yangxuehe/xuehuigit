<!--
 * @Author: your name
 * @Date: 2021-01-04 18:02:48
 * @LastEditTime: 2021-01-12 20:46:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /management/pc-management/src/components/header.vue
-->
<template>
  <div>
    <div class="component-header">
      <i
        :class="{ rotate: isCollapse }"
        @click="collapseClick"
        class="iconfont el-icon-s-fold"
      ></i>
      <div class="platformLabel">
        <i class="iconfont icon-kefu" @click="serverClick"></i>
        <i class="iconfont icon-quanping"></i>
        <el-dropdown>
          <span class="el-dropdown-link">
            admin<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
// 导入bus
import bus from "../utils/bus";
export default {
  data() {
    return {
      // 是否折叠
      isCollapse: false,
    };
  },
  methods: {
    collapseClick() {
      this.isCollapse = !this.isCollapse;
      bus.$emit("passitem", this.isCollapse);
    },
    serverClick(){
      this.$router.push('/serveice')
    }
  },
};
</script>

<style lang="less">
.component-header {
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  .el-icon-s-fold {
    font-size: 23px;
    margin-right: 22px;
    transform: 0.5s;
    color: #000;
  }
  .rotate {
    transform: rotate(-180deg);
  }
  .platformLabel {
    .iconfont {
      margin-right: 20px;
      font-size: 20px;
      color: #000;
    }
  }
}
</style>
