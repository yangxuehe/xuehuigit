<!--
 *订单管理-退款
-->
<template>
  <div class="container">
    <el-card>
      <!--行内 表单 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="时间选择:" class="more-width">
          <el-radio-group v-model="formInline.radio1" size="mini">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="今天"></el-radio-button>
            <el-radio-button label="昨天"></el-radio-button>
            <el-radio-button label="最近7天"></el-radio-button>
            <el-radio-button label="本月"></el-radio-button>
            <el-radio-button label="本年"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
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
          <el-button type="warning">导出Excel</el-button>
        </el-form-item>
        <div class="money-detail-con">
          <ul>
            <li>
              <span class="round round-blue"></span>
              <p class="money-con">
                <span class="money-num">99888</span>
                <span class="money-txt">退款账款</span>
              </p>
            </li>
            <li>
              <span class="round round-orange"></span>
              <p class="money-con">
                <span class="money-num">20</span>
                <span class="money-txt">退款单数</span>
              </p>
            </li>
            <li>
              <span class="round round-green"></span>
              <p class="money-con">
                <span class="money-num">9%</span>
                <span class="money-txt">退款率</span>
              </p>
            </li>
          </ul>
        </div>
      </el-form>
    </el-card>
    <!-- 表格 内容 -->
    <el-card class="main-card">
      <el-table :data="tableData" style="width: 100%" highlight-current-row>
        <el-table-column
          prop="zip"
          label="系统订单号"
          align="center"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="下单日期"
          align="center"
          width="200"
        ></el-table-column>
        <el-table-column
          prop="order_status"
          label="订单状态"
          align="center"
        ></el-table-column>

        <el-table-column
          prop="order_status"
          label="发货状态"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="after_status"
          label="售后状态"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="money"
          label="订单金额"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="money"
          label="收款金额"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="money"
          label="退款账款"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="money"
          label="实收金额"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="打出PayPal"
          align="center"
          width="200"
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
          order_status: "未付款",
          after_status: "正常",
          money: "$30.00",
          address: "金沙江路 1516 弄",
          zip: "235364326345645125212",
        },
        {
          date: "2016-05-03 15:30:00",
          order_status: "未付款",
          after_status: "正常",
          money: "$30.00",
          address: "金沙江路 1516 弄",
          zip: "235364326345645125212",
        },
        {
          date: "2016-05-03 15:30:00",
          order_status: "未付款",
          after_status: "正常",
          money: "$30.00",
          address: "金沙江路 1516 弄",
          zip: "235364326345645125212",
        },
        {
          date: "2016-05-03 15:30:00",
          order_status: "未付款",
          after_status: "正常",
          money: "$30.00",
          address: "金沙江路 1516 弄",
          zip: "235364326345645125212",
        },
        {
          date: "2016-05-03 15:30:00",
          order_status: "未付款",
          after_status: "正常",
          money: "$30.00",
          address: "金沙江路 1516 弄",
          zip: "235364326345645125212",
        },
        {
          date: "2016-05-03 15:30:00",
          order_status: "未付款",
          after_status: "正常",
          money: "$30.00",
          address: "金沙江路 1516 弄",
          zip: "235364326345645125212",
        },
        {
          date: "2016-05-03 15:30:00",
          order_status: "未付款",
          after_status: "正常",
          money: "$30.00",
          address: "金沙江路 1516 弄",
          zip: "235364326345645125212",
        },
        {
          date: "2016-05-03 15:30:00",
          order_status: "未付款",
          after_status: "正常",
          money: "$30.00",
          address: "金沙江路 1516 弄",
          zip: "235364326345645125212",
        },
      ],
      value1: "",
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.el-form--inline .el-form-item {
  margin-right: 30px;
}
.el-form--inline {
  border-bottom: none;
}
@import url("../../../styles/financeCollect.css");
</style>
