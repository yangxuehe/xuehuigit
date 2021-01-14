<!--
 * 系统管理-账号管理
-->
<template>
  <el-card>
    <el-button type="primary">添加账号</el-button>
    <el-divider></el-divider>
    <el-table :data="tableData" style="width: 100%" highlight-current-row>
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="type" label="身份" align="center">
      </el-table-column>
      <el-table-column prop="num" label="账号" align="center">
      </el-table-column>
      <el-table-column prop="type" label="是否启用" align="center">
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
      <el-table-column prop="date" label="创建时间" align="center">
      </el-table-column>
      <el-table-column label="操作" width="250" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small">修改密码</el-button>
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
          id: "354312",
          type: "客服",
          val: true,
          num: "ZXC1232",
          name: "小明",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "356564",
          type: "客服",
          val: false,
          num: "ZXC1232",
          name: "小明",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "354312",
          type: "客服",
          val: true,
          num: "ZXC1232",
          name: "小明",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "354312",
          type: "客服",
          val: true,
          num: "ZXC1232",
          name: "小明",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "354312",
          type: "客服",
          val: false,
          num: "ZXC1232",
          name: "小明",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "354312",
          type: "客服",
          val: true,
          num: "ZXC1232",
          name: "小明",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "354312",
          type: "客服",
          val: true,
          num: "ZXC1232",
          name: "小明",
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

<style lang="less" scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
