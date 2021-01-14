<template>
  <el-card>
    <el-form>
      <el-form-item label="订单状态:">
        <el-radio-group v-model="radio" size="medium">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="未发送"></el-radio-button>
          <el-radio-button label="已发送"></el-radio-button>
        </el-radio-group>
        <div class="button-add">
          <el-button type="primary">添加模版</el-button>
          <el-button type="primary">发送</el-button>
        </div>
      </el-form-item>
    </el-form>
    <el-divider></el-divider>
    <el-table :data="tableData" style="width: 100%" highlight-current-row>
      <el-table-column prop="title" label="标题"> </el-table-column>
      <el-table-column prop="content" label="内容"> </el-table-column>
      <el-table-column prop="type" label="邮件显示">
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
      <el-table-column prop="state" label="信件状态"> </el-table-column>
      <el-table-column prop="addDate" label="添加时间"> </el-table-column>
      <el-table-column prop="sendDate" label="发送时间"> </el-table-column>
      <el-table-column prop="id" label="执行人ID"> </el-table-column>
      <el-table-column prop="who" label="执行人"> </el-table-column>
      <el-table-column label="操作" width="150" align="center" fixed="right">
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
      radio: "全部",
      tableData: [
        {
          title: "youtube产品上架通知书",
          content: "youtube产品已上线……",
          type: "true",
          state: "未发送",
          addDate: "2021-01-22 12:12:33",
          sendDate: "2021-01-22 12:12:33",
          id: "236523",
          who: "小风",
        },
        {
          title: "youtube产品上架通知书",
          content: "youtube产品已上线……",
          type: "true",
          state: "未发送",
          addDate: "2021-01-22 12:12:33",
          sendDate: "2021-01-22 12:12:33",
          id: "236523",
          who: "小风",
        },
        {
          title: "youtube产品上架通知书",
          content: "youtube产品已上线……",
          type: "true",
          state: "未发送",
          addDate: "2021-01-22 12:12:33",
          sendDate: "2021-01-22 12:12:33",
          id: "236523",
          who: "小风",
        },
        {
          title: "youtube产品上架通知书",
          content: "youtube产品已上线……",
          type: "true",
          state: "未发送",
          addDate: "2021-01-22 12:12:33",
          sendDate: "2021-01-22 12:12:33",
          id: "236523",
          who: "小风",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.button-add {
  float: right;
  padding-right: 20px;
}
</style>