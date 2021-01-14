<template>
  <div class="userChat1">
    <!-- 标题区 -->
    <div class="fixed-head">
      <img
        src="https://i.gtimg.cn/qqlive/img/jpgcache/files/qqvideo/hori/z/zm91ry6rctntum8_big.jpg"
      />
      <span>
        <p>ddd.net</p>
        <p>在线</p>
      </span>
    </div>
    <!-- 内容区 -->
    <div class="main">
      <div class="box">
        <div class="chat-time">2020-12-28 12:22:11</div>
        <!-- 循环整个列表 -->
        <div>
          <!-- 左边指用户 -->
          <div class="item left">
            <img
              class="header-img"
              src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2412251804,2477073135&fm=26&gp=0.jpg"
            />
            <div class="user-content">
              <div style="margin-left: 10px">ddd@pp.net</div>
              <span class="message">你好你好你好你好你好你好</span>
              <span class="message-state">已读</span>
            </div>
          </div>

          <!-- 右边指客服 -->
          <div class="item right">
            <img
              class="header-img"
              src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3204200282,925291642&fm=26&gp=0.jpg"
            />
            <div class="serve-content">
              <div style="margin-left: 10px">客服小风 ID:9527</div>
              <span class="message">您好您好您好</span>
              <span class="message2-state">已读</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部输入区 -->
    <div class="edit-box">
      <button>关闭</button>
      <button>发送</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "userChat",
  data() {
    return {
      messageList: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.userChat1 {
  height: 100%;
  padding-top: 70px;
  padding-bottom: 150px;
  box-sizing: border-box;
  border-left: 1px solid #000000;
  border-right: 1px solid #000000;
  // 头
  .fixed-head {
    display: flex;
    align-items: center;
    padding: 0 12px;
    position: fixed;
    top: 0;
    left: 220px;
    right: 220px;
    height: 70px;
    background: rgb(223, 158, 169);
    border-left: 1px solid #000000;
    border-right: 1px solid #000000;
    img {
      margin-right: 20px;
      width: 40px;
      height: 40px;
    }
  }
  // 主内容区
  .main {
    overflow: auto;
    height: 100%;
    .box {
      box-sizing: border-box;
      padding: 8px 8px 0 8px;
      margin-top: 10px;
    }
    .chat-time{
      text-align: center;
    }

    .header-img {
      width: 38px;
      height: 38px;
      border-radius: 4px;
    }

    .user-content {
      position: relative;
      .message-state {
        position: absolute;
        right: -40px;
        bottom: 0px;
      }
    }
    .serve-content {
      position: relative;
      .message2-state {
        position: absolute;
        left: -40px;
        bottom: 0px;
      }
    }

    .message {
      display: flex;
      align-items: center;
      min-height: 25px;
      padding: 6px 10px;
      color: #222121;
      background: #fff;
      border-radius: 4px;
    }

    .item {
      display: flex;
      margin-bottom: 12px;
    }

    .left {
      flex-direction: row;
    }

    .left .message {
      margin-left: 10px;
      display: flex;
      align-items: center;
      max-width: 500px;
      word-break: break-all;
      border-radius: 0 4px 4px 4px;
    }

    .right {
      flex-direction: row-reverse;
    }

    .right .message {
      margin-right: 10px;
      display: flex;
      align-items: center;
      max-width: 500px;
      word-break: break-all;
      border-radius: 4px 0 4px 4px;
      background: rgb(149, 235, 108);
    }
  }

  // 尾
  .edit-box {
    position: fixed;
    bottom: 0;
    left: 220px;
    right: 220px;
    height: 150px;
    background: rgb(240, 244, 245);
    border-top: 1px solid #000;
    border-left: 1px solid #000000;
    border-right: 1px solid #000000;
  }
  .edit-box button {
    width: 60px;
    height: 30px;
    position: absolute;
  }
  .edit-box button:nth-child(1) {
    bottom: 10px;
    right: 100px;
  }
  .edit-box button:nth-child(2) {
    bottom: 10px;
    right: 20px;
  }
}
</style>