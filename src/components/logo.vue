<!--
 * @Author: your name
 * @Date: 2021-01-10 17:50:36
 * @LastEditTime: 2021-01-11 19:59:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /management/pc-management/src/components/logo.vue
-->
<template>
  <div>
    <div class="component-logo">
      <img
        class="component-img"
        src="../assets/images/logo.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.component-logo {
  background-color: #2b2f3a;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  .component-img {
    width: auto;
    height: 32px;
    vertical-align: middle;
    overflow: hidden;
  }
}
</style>
