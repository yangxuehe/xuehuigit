<!--
 * 渠道管理-渠道分类
-->
<template>
  <el-card>
    <el-button type="primary" @click="dialogVisible = true">添加渠道</el-button>
    <!-- 添加渠道 -->
    <el-dialog
      title="添加渠道"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="渠道名称:" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入渠道名称">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
        <el-button type="danger" @click="dialogVisible = false"
          >取 消</el-button
        >
      </span>
    </el-dialog>
    <el-divider></el-divider>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="渠道ID"> </el-table-column>
      <el-table-column prop="type" label="渠道名称" align="center">
      </el-table-column>
      <el-table-column prop="date" label="创建时间" align="center">
      </el-table-column>
      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button type="text" size="small">删除</el-button>
          <!-- 编辑渠道 -->
          <el-dialog
            title="编辑渠道"
            :visible.sync="dialogVisible1"
            width="30%"
            :before-close="handleClose"
          >
            <el-form
              :model="ruleForm1"
              ref="ruleForm1"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="渠道名称:" prop="name1">
                <el-input v-model="ruleForm1.name1" placeholder="huawei">
                </el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogVisible1 = false"
                >确 定</el-button
              >
              <el-button type="danger" @click="dialogVisible1 = false"
                >取 消</el-button
              >
            </span>
          </el-dialog>
        </template>
        
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
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
      dialogVisible: false,
      dialogVisible1: false,
      ruleForm: {
        name: "",
      },
      ruleForm1: {
        name1: "",
      },
      currentPage: 0,
      tableData: [
        {
          date: "2016-05-03 15:21:03",
          id: "335354",
          type: "HUAWEI",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "335354",
          type: "HUAWEI",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "335354",
          type: "HUAWEI",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "335354",
          type: "HUAWEI",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "335354",
          type: "HUAWEI",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "335354",
          type: "HUAWEI",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "335354",
          type: "HUAWEI",
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
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    handleClick() {
      this.dialogVisible1 = true;
    },
  },
};
</script>

<style lang="less" scoped></style>
