<!--
 *订单管理-纠纷
-->
<template>
  <div class="container">
    <el-card>
      <!--行内 表单 -->
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="纠纷状态:" class="more-width">
          <el-radio-group v-model="formInline.radio1" size="mini">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="处理中"></el-radio-button>
            <el-radio-button label="审核中"></el-radio-button>
            <el-radio-button label="已处理"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="打回申请状态:" class="more-width">
          <el-radio-group v-model="formInline.radio2" size="mini">
            <el-radio-button label="全部"></el-radio-button>
            <el-radio-button label="未申请"></el-radio-button>
            <el-radio-button label="已申请"></el-radio-button>
            <el-radio-button label="已驳回"></el-radio-button>
            <el-radio-button label="申请通过"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="订单号:" class="more-width">
          <el-input
            v-model="formInline.email"
            placeholder="请输入订单号"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户信息:" class="more-width">
          <el-input
            v-model="formInline.email"
            placeholder="请输入用户邮箱/ID"
          ></el-input>
        </el-form-item>
        <el-form-item label="员工寻找:" class="more-width">
          <el-input
            v-model="formInline.email"
            placeholder="请输入账号ID/名字"
          ></el-input>
        </el-form-item>
        <el-form-item label="纠纷类型:" class="more-width">
          <el-select v-model="formInline.status" placeholder="请选择纠纷类型">
            <el-option label="全部" :value="0"></el-option>
            <el-option label="物流问题" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="纠纷状态变更时间选择:">
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" icon="el-icon-search" plain>搜索</el-button>
          <el-button type="primary" @click="subAudit">提交审核</el-button>
          <el-button type="warning">导出Excel</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 表格 内容 -->
    <el-card class="main-card">
      <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        highlight-current-row
      >
        <el-table-column type="selection" width="50"> </el-table-column>
        <el-table-column
          prop="zip"
          label="系统订单号"
          width="200"
          align="center"
        ></el-table-column>

        <el-table-column
          prop="date"
          label="下单日期"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="date"
          label="纠纷状态变更时间"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="纠纷类型"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="纠纷状态"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="申请状态"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="issue"
          label="收货人邮箱"
          width="200"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="收款金额"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="city"
          label="执行人ID"
          width="150"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="name"
          label="执行人"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column label="操作" width="120" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="showChange(scope.row)"
              >修改</el-button
            >
            <el-button type="text" size="small">详情</el-button>
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
    <!-- 纠纷修改弹窗 -->
    <el-dialog
      class="dialog-box"
      title="纠纷修改"
      :visible.sync="changeFormVisible"
      center
      top="30vh"
    >
      <el-form
        :model="changeForm"
        :rules="changeRules"
        ref="changeForm"
        status-icon
      >
        <el-form-item
          label="执行人ID:"
          prop="zip"
          :label-width="formLabelWidth"
        >
          <span>{{ changeForm.zip }}</span>
        </el-form-item>
      </el-form>
      <el-form
        :model="changeForm"
        :rules="changeRules"
        ref="changeForm"
        status-icon
      >
        <el-form-item label="执行人:" prop="name" :label-width="formLabelWidth">
          <span>{{ changeForm.name }}</span>
        </el-form-item>
      </el-form>
      <el-form
        :model="changeForm"
        :rules="changeRules"
        ref="changeForm"
        status-icon
      >
        <el-form-item
          label="纠纷类型:"
          prop="issue"
          :label-width="formLabelWidth"
        >
          <el-select v-model="changeForm.issue">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form
        :model="changeForm"
        :rules="changeRules"
        ref="changeForm"
        status-icon
      >
        <el-form-item
          label="纠纷备注:"
          prop="issue"
          :label-width="formLabelWidth"
        >
          <!-- <div ref="titleEditor"></div> -->
           <span>{{ changeForm.issue }}</span>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button class="cancel-btn" @click="changeFormVisible = false"
          >取 消</el-button
        >
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// 富文本编辑器
// import WangEditor from "wangeditor";
export default {
  data() {
    return {
      formInline: {
        radio1: "全部",
        radio2: "全部",
      },
      // 备注富文本
      titleEditor: undefined,
      multipleSelection: [],
      // 纠纷修改表单
      changeForm: {},
      // 弹框是否弹出
      changeFormVisible: false,
      // 表单验证规则
      changeRules: {
        type: [{ message: "必填!" }],
      },
      // 文字和input一排
      formLabelWidth: "100px",
      // 表格数据
      tableData: [
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          issue: "物流问题",
          zip: "235364",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          issue: "物流问题",
          zip: "235364",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          issue: "支付问题",
          zip: "235364",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          issue: "支付问题",
          zip: "235364",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          issue: "支付问题",
          zip: "235364",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          issue: "物流问题",
          zip: "235364",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          issue: "物流问题",
          zip: "235364",
        },
        {
          date: "2016-05-03 15:30:00",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          issue: "物流问题",
          zip: "235364",
        },
      ],
      value1: "",
      currentPage4: 0,
      // 下拉框内容
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
    };
  },
  // dom第一次渲染完毕
  // mounted() {
  //   // 创建富文本
  //   window.console.log(document.querySelector("#editor"));
  //   var editor = new WangEditor('#editor');
  //   editor.create();
  // },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 纠纷修改
    showChange(rows) {
      console.log(rows);
      this.changeFormVisible = true;
      // 解决联动问题 --深拷贝
      this.changeForm = JSON.parse(JSON.stringify(rows));
    },
    // addOpened() {
    //   // 标题富文本
    //   // 非空判断
    //   if (!this.titleEditor) {
    //     // 调整设置
    //     this.titleEditor = new WangEditor(this.$refs.titleEditor);
    //     this.titleEditor.customConfig.onchange = (html) => {
    //       // html 即变化之后的内容
    //       // window.console.log(html);
    //       // 设置给标题
    //       this.changeForm.type = html;
    //     };
    //     // 创建
    //     this.titleEditor.create();
    //   }
    // },
    // 提交审核
    subAudit() {
      this.$confirm("所选纠纷状态的订单即将提交审核,是否产生退款?", "提醒", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "是",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "否",
          });
        });
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
.container {
  .el-dialog__header {
    background-color: #46a0fc;
    .el-dialog__title {
      color: #fff;
    }
    .el-dialog__close {
      color: #fff;
    }
  }
}
// 尾部按钮
.el-dialog__footer {
  .cancel-btn {
    margin-right: 30px;
  }
}
</style>
