<!--
 *库存管理-账号库存
-->
<template>
  <el-card>
    <el-form :inline="true">
      <el-form-item label="账号状态:">
        <el-radio-group v-model="radio" size="medium">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="已售"></el-radio-button>
          <el-radio-button label="待售"></el-radio-button>
          <el-radio-button label="即将续费"></el-radio-button>
          <el-radio-button label="未续费"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="坑位状况:">
        <el-radio-group v-model="radio" size="medium">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="有坑位"></el-radio-button>
          <el-radio-button label="无坑位"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="产品类型:">
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
      <el-form-item label="产品属性:">
        <el-select v-model="value" filterable placeholder="请选择">
          <el-option
            v-for="item1 in options1"
            :key="item1.value"
            :label="item1.label"
            :value="item1.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      
      <el-form-item label="员工查找:">
        <el-input placeholder="请输入账号ID/名字" prefix-icon="el-icon-search">
        </el-input>
      </el-form-item>
      <el-form-item label="录入时间:">
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="账号搜素:" class="more-width">
        <el-input
          v-model="formInline.id"
          placeholder="请输入产品账号"
          class="el-input-order"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">Excel导出</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" highlight-current-row>
      <el-table-column prop="inputDate" label="录入日期" width="180" align="center"> </el-table-column>
      <el-table-column prop="doneDate" label="生效日期" width="180" align="center"> </el-table-column>
      <el-table-column prop="account" label="账号" width="180" align="center"> </el-table-column>
      <el-table-column prop="APassword" label="账号密码(权限)" width="180" align="center"> </el-table-column>
      <el-table-column prop="EPassword" label="邮箱密码(权限)" width="180" align="center"> </el-table-column>
      <el-table-column prop="expireTime" label="到期时间" width="180" align="center"> </el-table-column>
      <el-table-column prop="AState" label="账号状态" width="80" align="center"> </el-table-column>
      <el-table-column prop="surplusCount" label="坑位剩余数量" width="120" align="center"> </el-table-column>
      <el-table-column prop="type" label="产品类型" width="80" align="center"> </el-table-column>
      <el-table-column prop="atr" label="产品属性" width="80" align="center"> </el-table-column>
      <el-table-column prop="id" label="执行人ID" width="80" align="center"> </el-table-column>
      <el-table-column prop="who" label="执行人" width="80" align="center"> </el-table-column>
      <el-table-column label="操作" width="150" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" size="small">修改</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >详情</el-button
          >
          <el-button type="text" size="small">删除</el-button>
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
      formInline: {},
      currentPage: 0,
      value1:"",
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
      options1:[
        {
          value: "1",
          label: "全部",
        },
        {
          value: "2",
          label: "GNP-P(独享)",
        },
        {
          value: "3",
          label: "GNP-S(分享)",
        },
      ],
      value: "",
      radio: "全部",
      tableData: [
        {
          inputDate: "2021-01-22 12:12:33",
          doneDate: "2021-01-22 12:12:33",
          account: "32424@pp.com",
          APassword: "********",
          EPassword:"********",
          expireTime:"2022-01-22 12:12:33",
          AState:"待售",
          surplusCount:"1",
          type: "GNF",
          atr: "S",
          id: "236523",
          who: "小风",
        },
        {
          inputDate: "2021-01-22 12:12:33",
          doneDate: "2021-01-22 12:12:33",
          account: "32424@pp.com",
          APassword: "********",
          EPassword:"********",
          expireTime:"2022-01-22 12:12:33",
          AState:"待售",
          surplusCount:"1",
          type: "GNF",
          atr: "S",
          id: "236523",
          who: "小风",
        },
        {
          inputDate: "2021-01-22 12:12:33",
          doneDate: "2021-01-22 12:12:33",
          account: "32424@pp.com",
          APassword: "********",
          EPassword:"********",
          expireTime:"2022-01-22 12:12:33",
          AState:"待售",
          surplusCount:"1",
          type: "GNF",
          atr: "S",
          id: "236523",
          who: "小风",
        },
        {
          inputDate: "2021-01-22 12:12:33",
          doneDate: "2021-01-22 12:12:33",
          account: "32424@pp.com",
          APassword: "********",
          EPassword:"********",
          expireTime:"2022-01-22 12:12:33",
          AState:"待售",
          surplusCount:"1",
          type: "GNF",
          atr: "S",
          id: "236523",
          who: "小风",
        },
        {
          inputDate: "2021-01-22 12:12:33",
          doneDate: "2021-01-22 12:12:33",
          account: "32424@pp.com",
          APassword: "********",
          EPassword:"********",
          expireTime:"2022-01-22 12:12:33",
          AState:"待售",
          surplusCount:"1",
          type: "GNF",
          atr: "S",
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

<style lang="less">
.el-form--inline .el-form-item {
  margin-right: 30px;
}
.el-form--inline {
  border-bottom: none;
}
.el-input-order .el-input__inner {
  width: 230px;
}
</style>