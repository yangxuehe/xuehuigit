<template>
  <div class="order-list-container">
    <!-- 表格 内容 -->
    <el-card class="main-card">
      <div class="btn-box">
        <el-button type="primary">表格录入</el-button>
        <el-button type="success" class="sure-btn">确定录入</el-button>
      </div>
      <el-divider></el-divider>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="zip" label="生效日期"></el-table-column>
        <el-table-column prop="date" label="商品账号"></el-table-column>
        <el-table-column prop="name" label="商品密码(权限)"></el-table-column>
        <el-table-column
          prop="city"
          label="商品邮箱密码(权限)"
        ></el-table-column>
        <el-table-column prop="city" label="商品到期日期"></el-table-column>
        <el-table-column prop="name" label="产品类型"></el-table-column>
        <el-table-column prop="city" label="产品属性"></el-table-column>
        <el-table-column
          min-width="100"
          fixed="right"
          align="center"
          label="操作"
        >
          <el-button type="text" size="small">详情</el-button>
        </el-table-column>
      </el-table>
      <!-- 分页器 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {},
      tableData: [
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "200331245431s51a5s451215553",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "200331245431s51a5s451215553",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "200331245431s51a5s451215553",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "200331245431s51a5s451215553",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "200331245431s51a5s451215553",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "200331245431s51a5s451215553",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "200331245431s51a5s451215553",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "200331245431s51a5s451215553",
        },
      ],
      value1: "",
      currentPage4: 0,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="less" scoped>
.el-form--inline .el-form-item {
  margin-right: 30px;
}
.el-form--inline {
  border-bottom: none;
}
.sure-btn {
  margin-left: 30px;
}
</style>
