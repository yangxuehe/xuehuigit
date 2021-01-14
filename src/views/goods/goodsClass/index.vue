<!--
 * 商品管理-商品分类
-->
<template>
  <el-card>
    <el-button type="primary" @click="dialogVisible = true">添加商品</el-button>
    <!-- 添加商品 -->
    <el-dialog
      title="添加商品"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="商品名称:" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入一级分类名称"> </el-input>
        </el-form-item>
        <el-form-item label="商品标题" prop="title">
          <el-input v-model="ruleForm.title" placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="商品类型" prop="type">
          <el-input v-model="ruleForm.type" placeholder="请输入商品类型代码"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-divider></el-divider>
    <el-table
      :data="product"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      :tree-props="{ children: 'subProduct', hasChildren: 'productSKU' }"
    >
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="code" label="商品类型"> </el-table-column>
      <el-table-column prop="atr" label="产品属性"> </el-table-column>
      <el-table-column prop="price" label="价格"> </el-table-column>
      <el-table-column prop="photo" label="图片"> </el-table-column>
      <el-table-column prop="judge" label="是否上架">
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
      <el-table-column prop="created_at" label="创建时间" width="150">
      </el-table-column>
      <el-table-column label="操作" width="150" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button type="text" size="small">删除</el-button>
          <el-button type="text" size="small" >添加下级</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      ruleForm: {
        name: "",
        title: "",
        type: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" },
        ],
        title: [
          { required: true, message: "请输商品标题", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" },
        ],
        type: [
          { required: true, message: "请输入商品类型代码", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 1 到 20 个字符", trigger: "blur" },
        ],
      },
      product: [
        {
          id: 1,
          grade:"1",
          name: "netflix",
          title: "",
          code: "GNP",
          on_sale: 1,
          image1: null,
          deleted_at: null,
          created_at: "2021-01-04T08:11:12.000000Z",
          updated_at: "2021-01-12T01:28:27.000000Z",
          subProduct: [
            {
              id: 11,
              grade:"2",
              name: "1screen",
              code: "GNP",
              screen: 1,
              atr: "S",
              on_sale: 1,
              deleted_at: null,
              created_at: "2021-01-11T11:24:41.000000Z",
              updated_at: "2021-01-12T01:32:27.000000Z",
              subProduct: [
                {
                  id: 111,
                  grade:"3",
                  name: "1month",
                  month: 12,
                  price: "60.00",
                  on_sale: 1,
                  deleted_at: null,
                  created_at: "2021-01-11T12:12:36.000000Z",
                  updated_at: "2021-01-12T08:13:52.000000Z",
                },
                {
                  id: 112,
                  grade:"3",
                  name: "3month",
                  month: 12,
                  price: "60.00",
                  on_sale: 1,
                  deleted_at: null,
                  created_at: "2021-01-11T12:12:36.000000Z",
                  updated_at: "2021-01-12T08:13:52.000000Z",
                },
              ],
            },
            {
              id: 5,
              grade:"2",
              name: "5screen",
              code: "GNP",
              product_id: 2,
              screen: 5,
              atr: "P",
              on_sale: 1,
              deleted_at: null,
              created_at: "2021-01-11T12:34:43.000000Z",
              updated_at: "2021-01-11T12:34:43.000000Z",
              subProduct: [
                {
                  id: 121,
                  grade:"3",
                  name: "1month",
                  product_id: 1,
                  sub_product_id: 1,
                  month: 12,
                  price: "60.00",
                  on_sale: 1,
                  deleted_at: null,
                  created_at: "2021-01-11T12:12:36.000000Z",
                  updated_at: "2021-01-12T08:13:52.000000Z",
                },
                {
                  id: 122,
                  grade:"3",
                  name: "3month",
                  product_id: 1,
                  sub_product_id: 1,
                  month: 12,
                  price: "60.00",
                  on_sale: 1,
                  deleted_at: null,
                  created_at: "2021-01-11T12:12:36.000000Z",
                  updated_at: "2021-01-12T08:13:52.000000Z",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    changeSwitch(){
      console.log("switch");
      console.log("this",this.product[0].subProduct[0].subProduct[0].grade);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="less" scoped>
</style>
