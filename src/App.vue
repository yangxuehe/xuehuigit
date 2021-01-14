
<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style lang="less">
.app-container {
  height: 100%;
}
/* 分页器样式 */
.el-pagination {
  text-align: center;
  margin-top: 30px;
}
/* 表格样式 */
 .el-input__inner {
    width: 100px;
  }

  .more-width {
    .el-input__inner {
      width: 150px;
    }
  }
  //   日期
  .el-date-editor.el-input__inner {
    width: 280px;
  }
  
  .main-card {
    margin-top: 20px;
  }
  
  // 禁用状态
  .red {
    color: red;
  }
 
.el-table__header-wrapper {
  .cell {
    color: #666;
  }
}
.el-table__row {
  .cell {
    font-size: 12px;
  }
}
// 按钮盒子
.btn-box {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
