<!--
 *活动管理-活动分类
-->
<template>
  <div class="order-list-container">
    <el-card>
      <!--表单 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
         <el-form-item label="活动搜索:" class="more-width">
          <el-input
            v-model="formInline.id"
            placeholder="活动名称/活动ID"
          ></el-input>
        </el-form-item>
        <el-form-item label="活动时间:">
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
          <el-button type="primary" icon="el-icon-search" plain>搜索</el-button>
          <el-button type="primary">添加活动</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 表格 内容 -->
    <el-card class="main-card">
      <el-table :data="tableData" style="width: 100%" highlight-current-row>
        <el-table-column
          prop="zip"
          label="活动ID"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="活动名称"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="创建时间"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="开始时间"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="结束时间"
          align="center"
        ></el-table-column>
       
          <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button type="text" size="small">删除</el-button>
        </template>
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
</style>
