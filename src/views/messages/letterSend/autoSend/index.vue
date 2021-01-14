<template>
  <el-card>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="TName" label="模版名"> </el-table-column>
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="content" label="发送内容"> </el-table-column>
      <el-table-column prop="type" label="状态">
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
      <el-table-column prop="type" label="邮件发送">
        <template slot-scope="scope">
          <el-switch
            @change="changeSwitch1(scope.$index, scope.row)"
            v-model="scope.row.val"
            prop="val"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="addDate" label="添加时间"> </el-table-column>
      <el-table-column label="操作" width="150" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      radio: '全部',
      tableData: [
        { 
          TName:'新建账号欢迎书',
          title:'新建账号欢迎书',
          content:'欢迎您注册',
          type:'true',
          addDate:'2021-01-22 12:12:33',
          val:'0'
        },
        { 
          TName:'新建账号欢迎书',
          title:'新建账号欢迎书',
          content:'欢迎您注册',
          type:'true',
          addDate:'2021-01-22 12:12:33',
          val:'0'
        },
        { 
          TName:'新建账号欢迎书',
          title:'新建账号欢迎书',
          content:'欢迎您注册',
          type:'true',
          addDate:'2021-01-22 12:12:33',
          val:'0'
        },
        { 
          TName:'新建账号欢迎书',
          title:'新建账号欢迎书',
          content:'欢迎您注册',
          type:'true',
          addDate:'2021-01-22 12:12:33',
          val:'0'
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
 
</style>