<!--
 *订单管理-商城订单
-->
<template>
  <div class="order-list-container">
    <el-card>
      <!--行内 表单 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="订单状态:" class="more-width">
          <el-select v-model="formInline.status" placeholder="请选择订单状态">
            <el-option label="全部" :value="0"></el-option>
            <el-option label="未付款" :value="1"></el-option>
            <el-option label="已付款" :value="2"></el-option>
            <el-option label="已取消" :value="3"></el-option>
            <el-option label="已完成" :value="4"></el-option>
            <el-option label="已关闭" :value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发货状态:" class="more-width">
          <el-select v-model="formInline.status" placeholder="请选择发货状态">
            <el-option label="全部" :value="0"></el-option>
            <el-option label="未发货" :value="1"></el-option>
            <el-option label="已发货" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="售后状态:" class="more-width">
          <el-select v-model="formInline.status" placeholder="请选择售后状态">
            <el-option label="全部" :value="0"></el-option>
            <el-option label="退款审核中" :value="1"></el-option>
            <el-option label="已退款" :value="2"></el-option>
            <el-option label="已拒绝" :value="3"></el-option>
            <el-option label="正常" :value="4"></el-option>
            <el-option label="无" :value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="购买类型:" class="more-width">
          <el-select v-model="formInline.status" placeholder="请选择购买类型">
            <el-option label="全部" :value="0"></el-option>
            <el-option label="新购买" :value="1"></el-option>
            <el-option label="续费" :value="2"></el-option>
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
        <el-form-item label="订单号:" class="more-width">
          <el-input
            v-model="formInline.id"
            placeholder="请输入订单号"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户信息:" class="more-width">
          <el-input
            v-model="formInline.email"
            placeholder="请输入用户邮箱"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" plain>搜索</el-button>
          <el-button type="primary" @click="oneKeyDeliver">一键发货</el-button>
          <el-button type="warning">导出Excel</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 表格 内容 -->
    <el-card class="main-card">
      <el-table :data="tableData" style="width: 100%" highlight-current-row>
        <el-table-column
          prop="zip"
          label="订单系统号"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="下单日期"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="订单状态"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="发货状态"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="售后状态"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="购买类型"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="订单来源"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="用户ID"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="发车日期"
          width="180"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="到期日期"
          width="180"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="商品类型"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="产品属性"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="服务期"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="剩余时间"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="车位"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="收款金额"
          width="150"
          align="center"
        ></el-table-column>
        <!-- <el-table-column prop="create_time" label="创建日期">
          <template slot-scope="scope">
            {{scope.row.create_time | formatTime}}
          </template>
        </el-table-column> -->
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
    // 一键发货
    oneKeyDeliver() {
      this.$confirm("您已选中45条未发货的商城订单,是否进行发货?", "提醒", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
         this.$message({
            type: "success",
            message: "确定",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消",
          });
        });
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
