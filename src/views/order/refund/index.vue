<!--
 *订单管理-退款
-->
<template>
  <div class="container">
    <el-card>
      <!--行内 表单 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="退款状态:" class="more-width">
          <el-radio-group v-model="formInline.radio1" size="mini">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="审核中"></el-radio-button>
            <el-radio-button label="已拒绝"></el-radio-button>
            <el-radio-button label="已退款"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="订单号:" class="more-width">
          <el-input
            v-model="formInline.email"
            placeholder="请输入订单号"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户信息:" class="more-width">
          <el-input
            v-model="formInline.email"
            placeholder="请输入用户邮箱/ID"
          ></el-input>
        </el-form-item>
        <el-form-item label="退款状态变更时间选择:">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="员工寻找:" class="more-width">
          <el-input
            v-model="formInline.email"
            placeholder="请输入账号ID/名字"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" plain>搜索</el-button>
          <el-button type="warning">导出Excel</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 表格 内容 -->
    <el-card class="main-card">
      <el-table :data="tableData" style="width: 100%" highlight-current-row>
        <el-table-column
          prop="zip"
          label="系统订单号"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="下单日期"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="退款状态变更时间"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="退款状态"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="收货人邮箱"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="收款金额"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="退款金额"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="执行人ID"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="执行人"
          width="100"
          align="center"
        ></el-table-column>
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
      formInline: {
        radio1: "全部",
        radio2: "全部",
      },
      tableData: [
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "235364326345645125212",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "235364326345645125212",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "235364326345645125212",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "235364326345645125212",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "235364326345645125212",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "235364326345645125212",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "235364326345645125212",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "235364326345645125212",
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
