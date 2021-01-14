
<template>
  <el-container class="container">
    <el-aside width="auto">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header />
      </el-header>
      <el-main class="main">
        <router-view class="main-view"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  .el-aside {
    background-color: #314255;
  }
  .header {
    padding: 0;
  }
  .el-aside::-webkit-scrollbar {
    display: none;
  }
  .main {
    background-color: #ffffff;
    margin-top: 40px;
    padding: 30px;
    box-sizing: border-box;
  }
}
</style>
