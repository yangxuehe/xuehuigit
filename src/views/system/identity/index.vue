<!--
 * 系统管理-身份管理
-->
<template>
  <el-card>
      <el-button type="primary">添加身份管理</el-button>
    <el-divider></el-divider>
    <el-table :data="tableData" style="width: 100%" highlight-current-row>
      <el-table-column prop="name" label="身份名称"> </el-table-column>
      <el-table-column prop="type" label="权限名称" align="center"> </el-table-column>
      <el-table-column prop="val" label="是否显示" align="center">
        <template slot-scope="scope">
          <el-switch
            @change="changeSwitch(scope.$index, scope.row)"
            v-model="scope.row.val"
            prop="val"
            :width="50"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="创建时间" align="center"> </el-table-column>
      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.$index, scope.row)" type="text" size="small"
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
      value: "100",
      tableData: [
        {
          date: "2016-05-03 15:21:03",
          name: "管理员",
          type: "基础配置",
          val:true,
        },
        {
          date: "2016-05-03 15:21:03",
          name: "管理员",
          type: "基础配置",
          val:true,
        },
        {
          date: "2016-05-03 15:21:03",
          name: "管理员",
          type: "基础配置",
          val:true,
        },
        {
          date: "2016-05-03 15:21:03",
          name: "采购",
          type: "基础配置",
          val:false,
        },
        {
          date: "2016-05-03 15:21:03",
          name: "运营",
          type: "首页,系统配置",
          val:true,
        },
        {
          date: "2016-05-03 15:21:03",
          name: "管理员",
          type: "首页,系统配置",
          val:true,
        },
        {
          date: "2016-05-03 15:21:03",
          name: "客服",
          type: "首页,系统配置",
          val:false,
        },
      ],
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleClick(index,row) {
      console.log(index,row);
    },
    changeSwitch(index,row) {
        console.log(index,row);
    },
  },
};
</script>

<style lang="less" scoped></style>
