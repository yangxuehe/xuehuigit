<!--
 *财务管理-收款账号
-->
<template>
  <el-card>
    <el-button type="primary">添加Paypal</el-button>
    <el-divider></el-divider>
    <el-table :data="tableData" style="width: 100%" highlight-current-row>
      <el-table-column prop="type" label="账户类型"> </el-table-column>
      <el-table-column prop="account" label="账号" align="center"> </el-table-column>
      <el-table-column prop="up_money" label="收款额度上限" align="center"> </el-table-column>
      <el-table-column prop="answer_money" label="应收账额" align="center"> </el-table-column>
      <el-table-column prop="official_money" label="实收账额" align="center"> </el-table-column>
      <el-table-column prop="all_money" label="总账款" align="center"></el-table-column>
      <el-table-column prop="limit" label="剩余额度" width="80" align="center"> </el-table-column>
      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          type: "Paypal",
          account: "hihi@oo.cn",
          up_money:"$5200.00 USD",
          answer_money:"$5200.00 USD",
          official_money:"$5000.00 USD",
          all_money:"$185000.00 USD",
          limit:"10%"
        },
        {
          type: "Paypal",
          account: "hihi@oo.cn",
          up_money:"$5200.00 USD",
          answer_money:"$5200.00 USD",
          official_money:"$5000.00 USD",
          all_money:"$185000.00 USD",
          limit:"10%"
        },
        {
          type: "Paypal",
          account: "hihi@oo.cn",
          up_money:"$5200.00 USD",
          answer_money:"$5200.00 USD",
          official_money:"$5000.00 USD",
          all_money:"$185000.00 USD",
          limit:"10%"
        },
        {
          type: "Paypal",
          account: "hihi@oo.cn",
          up_money:"$5200.00 USD",
          answer_money:"$5200.00 USD",
          official_money:"$5000.00 USD",
          all_money:"$185000.00 USD",
          limit:"10%"
        },
        {
          type: "Paypal",
          account: "hihi@oo.cn",
          up_money:"$5200.00 USD",
          answer_money:"$5200.00 USD",
          official_money:"$5000.00 USD",
          all_money:"$185000.00 USD",
          limit:"10%"
        },
        {
          type: "Paypal",
          account: "hihi@oo.cn",
          up_money:"$5200.00 USD",
          answer_money:"$5200.00 USD",
          official_money:"$5000.00 USD",
          all_money:"$185000.00 USD",
          limit:"10%"
        },
        {
          type: "Paypal",
          account: "hihi@oo.cn",
          up_money:"$5200.00 USD",
          answer_money:"$5200.00 USD",
          official_money:"$5000.00 USD",
          all_money:"$185000.00 USD",
          limit:"10%"
        },
      ],
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
};
</script>

<style lang="less" scoped></style>
