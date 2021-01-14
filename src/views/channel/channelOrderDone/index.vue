<!--
 *渠道管理-渠道生效订单
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
      <el-form-item label="渠道订单状态:">
        <el-radio-group v-model="radio" size="medium">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="进行中"></el-radio-button>
          <el-radio-button label="已完成"></el-radio-button>
          <el-radio-button label="未完成"></el-radio-button>
        </el-radio-group>
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
      <el-form-item label="订单号:" class="more-width">
        <el-input
          v-model="formInline.id"
          placeholder="请输入渠道订单号/系统订单号"
          class="el-input-order"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">Excel导出</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%" highlight-current-row>
      <el-table-column prop="number" label="渠道订单号"> </el-table-column>
      <el-table-column prop="name" label="渠道名称"> </el-table-column>
      <el-table-column prop="inputDate" label="录入日期"> </el-table-column>
      <el-table-column prop="source" label="订单来源"> </el-table-column>
      <el-table-column prop="sysNum" label="系统订单号"> </el-table-column>
      <el-table-column prop="CState" label="渠道订单状态"> </el-table-column>
      <el-table-column prop="userId" label="用户ID"> </el-table-column>
      <el-table-column prop="goodsID" label="商品账号"> </el-table-column>
      <el-table-column prop="space" label="车位"> </el-table-column>
      <el-table-column prop="type" label="产品类型"> </el-table-column>
      <el-table-column prop="atr" label="产品属性"> </el-table-column>
      <el-table-column prop="cycle" label="服务期"> </el-table-column>
      <el-table-column prop="second" label="使用次数"> </el-table-column>
      <el-table-column prop="carTime" label="上车时间"> </el-table-column>
      <el-table-column prop="expireTime" label="到期时间"> </el-table-column>
      <el-table-column prop="surplusTime" label="剩余时间"> </el-table-column>
      <el-table-column prop="id" label="执行人ID"> </el-table-column>
      <el-table-column prop="who" label="执行人"> </el-table-column>
      <el-table-column label="操作" width="150" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button type="text" size="small">失效</el-button>
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
      value: "",
      radio: "全部",
      tableData: [
        {
          number: "wx32435436545345",
          name: "HUAWEI",
          inputDate: "2021-01-22 12:12:33",
          source: "渠道",
          sysNum:"we12343543",
          CState:"进行中",
          userId:"132@163.com",
          goodsID:"133ewq2@163.com",
          space:"3号",
          type: "GNF",
          atr: "S",
          cycle: "6个月",
          second: "1次",
          carTime: "2021-01-22 12:12:33",
          expireTime: "2021-02-22 12:12:33",
          surplusTime: "30天1小时",
          id: "236523",
          who: "小风",
        },
        {
          number: "wx32435436545345",
          name: "HUAWEI",
          inputDate: "2021-01-22 12:12:33",
          source: "渠道",
          sysNum:"we12343543",
          CState:"进行中",
          userId:"132@163.com",
          goodsID:"133ewq2@163.com",
          space:"3号",
          type: "GNF",
          atr: "S",
          cycle: "6个月",
          second: "1次",
          carTime: "2021-01-22 12:12:33",
          expireTime: "2021-02-22 12:12:33",
          surplusTime: "30天1小时",
          id: "236523",
          who: "小风",
        },
        {
          number: "wx32435436545345",
          name: "HUAWEI",
          inputDate: "2021-01-22 12:12:33",
          source: "渠道",
          sysNum:"we12343543",
          CState:"进行中",
          userId:"132@163.com",
          goodsID:"133ewq2@163.com",
          space:"3号",
          type: "GNF",
          atr: "S",
          cycle: "6个月",
          second: "1次",
          carTime: "2021-01-22 12:12:33",
          expireTime: "2021-02-22 12:12:33",
          surplusTime: "30天1小时",
          id: "236523",
          who: "小风",
        },
        {
          number: "wx32435436545345",
          name: "HUAWEI",
          inputDate: "2021-01-22 12:12:33",
          source: "渠道",
          sysNum:"we12343543",
          CState:"进行中",
          userId:"132@163.com",
          goodsID:"133ewq2@163.com",
          space:"3号",
          type: "GNF",
          atr: "S",
          cycle: "6个月",
          second: "1次",
          carTime: "2021-01-22 12:12:33",
          expireTime: "2021-02-22 12:12:33",
          surplusTime: "30天1小时",
          id: "236523",
          who: "小风",
        },
        {
          number: "wx32435436545345",
          name: "HUAWEI",
          inputDate: "2021-01-22 12:12:33",
          source: "渠道",
          sysNum:"we12343543",
          CState:"进行中",
          userId:"132@163.com",
          goodsID:"133ewq2@163.com",
          space:"3号",
          type: "GNF",
          atr: "S",
          cycle: "6个月",
          second: "1次",
          carTime: "2021-01-22 12:12:33",
          expireTime: "2021-02-22 12:12:33",
          surplusTime: "30天1小时",
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