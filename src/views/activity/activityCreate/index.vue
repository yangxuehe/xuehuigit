<!--
 *活动管理-活动生成
-->
<template>
  <div class="container">
    <el-card>
      <!--行内 表单 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="活动名称:" class="more-width">
          <el-select v-model="formInline.status" placeholder="请选择订单状态">
            <el-option label="全部" :value="0"></el-option>
            <el-option label="电商" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="URL状态:" class="more-width">
          <el-radio-group v-model="formInline.radio2" size="mini">
            <el-radio-button label="待生成"></el-radio-button>
            <el-radio-button label="已生成"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="渠道名称:" class="more-width">
          <el-select v-model="formInline.channel">
            <el-option label="全部" :value="0"></el-option>
            <el-option label="HUAWEI" :value="1"></el-option>
            <el-option label="eBay" :value="2"></el-option>
            <el-option label="Apple" :value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="el-mar-right" label="创建活动时间:">
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
          <el-button type="primary">录入信息</el-button>
           <el-button type="primary">生成URL</el-button>
           <el-button type="warning">导出Excel</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 表格 内容 -->
    <el-card class="main-card">
      <el-table :data="tableData" style="width: 100%" highlight-current-row>
        <el-table-column
          prop="zip"
          label="活动ID"
          width="100"
          align="center"
        ></el-table-column>

        <el-table-column
          prop="city"
          label="活动名称"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="渠道名称"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="产品类型"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="产品属性"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="服务期"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="使用次数"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="创建时间"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="开始时间"
          width="180"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="结束时间"
          width="180"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="活动状态"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="address"
          label="URL"
          width="200"
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
        radio2: "待生成",
      },
      tableData: [
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "235364",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "235364",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "235364",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "235364",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "235364",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "235364",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "235364",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: "235364",
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
.el-mar-right {
  margin-right: 100px !important;
}
.el-form--inline {
  border-bottom: none;
}
</style>
