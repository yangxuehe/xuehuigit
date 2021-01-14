<template>
  <div class="userOrder1">
    <div class="order-head">用户的订单</div>
    <div class="order-navbar">
      <div class="navbar-content">全部</div>
      <div class="navbar-content">已完成</div>
    </div>
    <div class="order-list">
      <!-- <div class="list-title">
        <div class="list-title-left">用户的订单</div>
        <div class="list-title-right">更多 ></div>
      </div> -->
      <!-- 订单列表内容 -->
      <div class="list-content">
        <div class="list-content-avatar">头像</div>
        <div class="list-content-detail">
          <div class="list-detail-head">网飞｜分享账号</div>
          <img
            src="@/assets/images/copy.png"
            style="width: 16px; height: 16px"
            alt=""
          />
          <div class="detail-content-order">订单号：Z344364574</div>
          <div class="detail-date-state">
            <div class="detail-date">2020-12-22</div>
            <div class="detail-state">进行中</div>
          </div>
          <div class="list-detail-footer">
            <div class="detail-footer-left">实付款</div>
            <div class="detail-footer-right">$30.00USD</div>
          </div>
        </div>
        <div class="list-content-footer">
          <button class="content-footer-button">纠纷</button>
          <button class="content-footer-button">查看</button>
          <button class="content-footer-button">发送</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.userOrder1 {
  width: 100%;
  height: 100%;
  font-size: 14px;
  overflow: scroll;
}
.order-head {
  width: 100%;
  height: 44px;
  background-color: #dacdcd;
  line-height: 44px;
  padding-left: 15px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
}
.order-navbar {
  width: 100%;
  height: 70px;
  padding: 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #000000;
  position: fixed;
  top: 44px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.navbar-content {
  line-height: 39px;
  text-align: center;
  width: 95px;
  border-bottom: 1px solid #000000;
}
.navbar-content:nth-child(1) {
  border-right: 1px solid #000000;
}

.order-list {
  height: calc(100% - 114px);
  margin-top: 114px;
}


/* .list-title {
  width: 100%;
  height: 44px;
  position: relative;
  line-height: 44px;
  font-size: 14px;
  position: fixed;
  background-color: #fff;
}
.list-title-left {
  position: absolute;
  display: inline-block;
  left: 10px;
}
.list-title-right {
  margin-left: 160px;
} */

.list-content {
  top: 10px;
  width: 96%;
  height: 110px;
  font-size: 14px;
  position: relative;
  box-sizing: border-box;
  margin: 10px auto;
  border: 5px solid #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #999999;
  z-index: -99;
}

.list-content-avatar {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: rgb(150, 208, 226);
  text-align: center;
  line-height: 50px;
}

.list-content-detail {
  position: absolute;
  padding-left: 60px;
  width: 100%;
  box-sizing: border-box;
}
.list-content-detail>img{
	float: right;
}
.list-detail-head {
  font-size: 14px;
  width: 100%;
}
.detail-content-order {
  font-size: 12px;
  width: 100%;
}
.detail-date-state {
  width: 100%;
  font-size: 12px;
}
.detail-date {
  float: left;
}
.detail-state {
  float: right;
}
.list-detail-footer {
  width: 100%;
  font-size: 12px;
  clear: both;
}
.detail-footer-left {
  float: left;
}
.detail-footer-right {
  float: right;
}

.list-content-footer {
  position: absolute;
  bottom: 0;
  right: 0;
}
.content-footer-button {
  margin-right: 10px;
}
</style>