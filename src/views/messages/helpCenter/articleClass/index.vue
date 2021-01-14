<!--
 * 系统管理-身份管理
-->
<template>
  <el-card>
    <el-button type="primary">添加文章分类</el-button>
    <el-divider></el-divider>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="type" label="文章分类"> </el-table-column>
      <el-table-column prop="type" label="显示">
        <template slot-scope="scope">
          <el-switch
            @change="changeSwitch(scope.$index, scope.row)"
            v-model="scope.row.val"
            active-value="100"
            inactive-value="0"
            prop="val"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="创建时间"> </el-table-column>
      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.$index, scope.row)"
            type="text"
            size="small"
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
          id: "1",
          type: "关于交易",
          val: 0,
        },
        {
          date: "2016-05-03 15:21:03",
          id: "2",
          type: "关于账户",
          val: 1,
        },
        {
          date: "2016-05-03 15:21:03",
          id: "3",
          type: "关于付款",
          val: 1,
        },
        {
          date: "2016-05-03 15:21:03",
          id: "4",
          type: "关于重置密码",
          val: 0,
        },
      ],
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleClick(index, row) {
      console.log(index, row);
    },
    changeSwitch(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style lang="less" scoped></style>
