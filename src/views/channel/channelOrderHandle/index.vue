<!--
 *渠道管理-渠道订单处理
-->
<template>
  <el-card>
    <el-form :inline="true">
      <el-form-item label="渠道名称:">
        <el-select v-model="value" filterable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="员工查找:">
        <el-input placeholder="请输入账号ID/名字" prefix-icon="el-icon-search">
        </el-input>
      </el-form-item>
      <div class="button-add">
        <el-button type="primary">Excel录入</el-button>
        <el-button type="primary">Excel导出</el-button>
      </div>
    </el-form>
    <el-table :data="tableData" style="width: 100%" highlight-current-row>
      <el-table-column prop="number" label="渠道订单号"> </el-table-column>
      <el-table-column prop="name" label="渠道名称"> </el-table-column>
      <el-table-column prop="inputDate" label="录入日期"> </el-table-column>
      <el-table-column prop="source" label="订单来源"> </el-table-column>
      <el-table-column prop="type" label="产品类型"> </el-table-column>
      <el-table-column prop="atr" label="产品属性"> </el-table-column>
      <el-table-column prop="cycle" label="服务期"> </el-table-column>
      <el-table-column prop="second" label="使用次数"> </el-table-column>
      <el-table-column prop="url" label="URL"> </el-table-column>
      <el-table-column prop="id" label="执行人ID"> </el-table-column>
      <el-table-column prop="who" label="执行人"> </el-table-column>
      <el-table-column label="操作" width="150" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" size="small">删除</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40"
      >
      </el-pagination>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 0,
      options: [
        {
          value: "选项1",
          label: "全部",
        },
        {
          value: "选项2",
          label: "HUAWEI",
        },
        {
          value: "选项3",
          label: "eBay",
        },
        {
          value: "选项4",
          label: "Apple",
        },
      ],
      value: "",
      radio: "全部",
      tableData: [
        {
          number: "wx32435436545345",
          name: "HUAWEI",
          inputDate: "2021-01-22 12:12:33",
          source: "渠道",
          type: "GNF",
          atr: "S",
          cycle: "6个月",
          second: "1次",
          url: "www.google.com",
          id: "236523",
          who: "小风",
        },
        {
          number: "wx32435436545345",
          name: "HUAWEI",
          inputDate: "2021-01-22 12:12:33",
          source: "渠道",
          type: "GNF",
          atr: "S",
          cycle: "6个月",
          second: "1次",
          url: "www.google.com",
          id: "236523",
          who: "小风",
        },
        {
          number: "wx32435436545345",
          name: "HUAWEI",
          inputDate: "2021-01-22 12:12:33",
          source: "渠道",
          type: "GNF",
          atr: "S",
          cycle: "6个月",
          second: "1次",
          url: "www.google.com",
          id: "236523",
          who: "小风",
        },
        {
          number: "wx32435436545345",
          name: "HUAWEI",
          inputDate: "2021-01-22 12:12:33",
          source: "渠道",
          type: "GNF",
          atr: "S",
          cycle: "6个月",
          second: "1次",
          url: "www.google.com",
          id: "236523",
          who: "小风",
        },
        {
          number: "wx32435436545345",
          name: "HUAWEI",
          inputDate: "2021-01-22 12:12:33",
          source: "渠道",
          type: "GNF",
          atr: "S",
          cycle: "6个月",
          second: "1次",
          url: "www.google.com",
          id: "236523",
          who: "小风",
        },
      ],
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
.button-add {
  float: right;
  padding-right: 20px;
}
</style>