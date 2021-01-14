<!--
 * @Author: your name
 * @Date: 2021-01-11 14:41:45
 * @LastEditTime: 2021-01-13 21:06:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /management/pc-management/src/views/order/disputeClass/index.vue
-->

<!--
 *订单管理-纠纷分类
-->
<template>
  <div class="container">
    <el-card>
      <el-button type="primary" @click="addFormVisible = true"
        >添加纠纷类型</el-button
      >
      <el-divider></el-divider>
      <el-table :data="tableData" style="width: 100%" highlight-current-row>
        <el-table-column prop="id" label="纠纷类型ID"> </el-table-column>
        <el-table-column prop="type" label="纠纷类型" align="center">
        </el-table-column>
        <el-table-column prop="date" label="创建时间" align="center">
        </el-table-column>
        <el-table-column label="操作" width="120" align="center">
          <template slot-scope="scope">
            <el-button @click="showEdit(scope.row)" type="text" size="small"
              >编辑</el-button
            >
            <el-button type="text" size="small" @click="remove(scope.row)"
              >删除</el-button
            >
          </template>
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
    <!-- 添加纠纷类型弹窗 -->
    <el-dialog
      class="dialog-box"
      title="添加纠纷类型"
      :visible.sync="addFormVisible"
      center
      top="30vh"
    >
      <el-form :model="addForm" :rules="addRules" ref="addForm" status-icon>
        <el-form-item
          label="纠纷名称"
          prop="dispute_name"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="addForm.dispute_name"
            autocomplete="off"
            placeholder="请输入纠纷类型名称"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button class="cancel-btn" @click="addFormVisible = false"
          >取 消</el-button
        >
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 编辑纠纷类型弹窗 -->
    <el-dialog
      class="dialog-box"
      title="编辑纠纷类型"
      :visible.sync="editFormVisible"
      center
      top="30vh"
    >
      <el-form :model="editForm" :rules="editRules" ref="editForm" status-icon>
        <el-form-item
          label="纠纷名称"
          prop="dispute_name"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="editForm.dispute_name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button class="cancel-btn" @click="editFormVisible = false"
          >取 消</el-button
        >
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage4: 0,

      // 添加纠纷类型表单
      addForm: {},
      // 弹框是否弹出
      addFormVisible: false,
      // 表单验证规则
      addRules: {
        dispute_name: [{ required: true, message: "名称不能为空!" }],
      },
      // 编辑纠纷类型表单
      editForm: {},
      // 弹框是否弹出
      editFormVisible: false,
      // 表单验证规则
      editRules: {
        dispute_name: [{ required: true, message: "名称不能为空!" }],
      },
      // 文字和input一排
      formLabelWidth: "100px",
      tableData: [
        {
          date: "2016-05-03 15:21:03",
          id: "335354",
          type: "物流问题",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "335354",
          type: "服务问题",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "335354",
          type: "支付问题",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "335354",
          type: "退款问题",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "335354",
          type: "物流问题",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "335354",
          type: "物流问题",
        },
        {
          date: "2016-05-03 15:21:03",
          id: "335354",
          type: "退款问题",
        },
      ],
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 编辑纠纷类型
    showEdit(rows) {
      console.log(rows);
      this.editFormVisible = true;
      // 解决联动问题 --深拷贝
      this.editForm.dispute_name = JSON.parse(JSON.stringify(rows.type));
    },
    
    // 删除
    remove() {
      // window.console.log(data)
      this.$confirm("是否删除该行数据?", "提醒", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>

<style lang="less">
// 添加-编辑弹窗
.el-dialog__header {
  background-color: #46A0FC;
  .el-dialog__title {
    color: #fff;
  }
  .el-dialog__close {
    color: #fff;
  }
}

// 尾部按钮
.el-dialog__footer {
  // text-align: center;
  .cancel-btn {
    margin-right: 30px;
  }
}
</style>
