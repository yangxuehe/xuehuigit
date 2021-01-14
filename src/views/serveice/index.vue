<template>
  <div class="serveice">
      <!-- 用户列表模块 -->
      <div class="userList">
          <userList></userList>
      </div>
      <!-- 用户聊天页面模块 -->
      <div class="userChat">
          <userChat></userChat>
      </div>
      <!-- 用户订单模块 -->
      <div class="userOrder">
          <userOrder></userOrder>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import userChat from "./components/userChat";
import userList from "./components/userList";
import userOrder from "./components/userOrder";
export default {
  components: {
    userChat,
    userList,
    userOrder,
  },
};
</script>

<style>
.serveice{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
}

.userList{
    width: 220px;
    height: 100%;
}

.userChat{
    flex: 1;
    /* border-left: 1px solid #000000;
    border-right: 1px solid #000000; */
}

.userOrder{
    width: 220px;
    height: 100%;
}
</style>