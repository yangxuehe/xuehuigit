<template>
  <div class="userList1">
    <div class="chat-head">
      <div class="serve-avatar">头像</div>
      <div class="serve-detail">
        <div class="serve-id">
          <span>昵称：小风</span>
          <span>ID：9527</span>
        </div>
        <div class="customer-service">客服</div>
        <div class="serve-state">在线</div>
      </div>
    </div>
    <div class="email-search">
      <div class="search-font">搜索:</div>
      <input class="input-search" type="text" placeholder="请输入邮箱用户" />
      <img src="@/assets/images/search.png" alt="" />
    </div>
    <div class="list-info">
			<div class="user-email-info">
				<div class="user-avatar">用户</div>
				<div class="user-email">ddd@pp.net</div>
				<div class="user-info-hot"></div>
			</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.userList1 {
  width: 100%;
  height: calc(100% - 120px);
}
.chat-head {
  width: 220px;
  height: 60px;
  position: relative;
  padding: 10px 0;
  /* border-bottom: 1px solid #000; */
  font-size: 12px;
  background-color: #8a7c7c;
  position: fixed;
  top: 0;
}

.serve-avatar {
  position: absolute;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: #fff;
  top: 50%;
  transform: translate(0, -50%);
  margin-left: 20px;
}

.serve-detail {
  margin-left: 90px;
}

.email-search{
	position: fixed;
	top: 80px;
	width: 220px;
	height: 40px;
	font-size: 12px;
}

.search-font{
	display: inline-block;
	width: 40px;
	height: 40px;
	text-align: end;
	line-height: 40px;
}

.input-search {
	width: 140px;
  height: 40px;
	line-height: 40px;
	padding-left: 5px;
	box-sizing: border-box;
}

.email-search > img {
	width: 24px;
  height: 24px;
	padding: 8px 5px 8px 11px;
	margin-top: -1px;
} 

.list-info {
	height: 100%;
	margin-top: 120px;
	overflow-y: scroll;
	background-color: #8a7c7c;
}
.user-email-info{
	height: 40px;
	background-color: #8a7c7c;
	padding: 10px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.user-avatar{
	width: 40px;
	height: 40px;
	background-color: #fff;
	text-align: center;
	line-height: 40px;
}

.user-email{
	flex: 1;
	margin-left: 10px;
}

.user-info-hot{
	width: 10px;
	height: 10px;
	background-color: rgb(209, 97, 97);
	border-radius: 50%;
}
</style>