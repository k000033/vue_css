<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="contain">
    <div class="wrap">
      <div class="item">
        <div class="icon">
          <i class="fa fa-gavel"></i>
        </div>
        <div class="txt">
          <h3>暴力網頁入門</h3>
          <p>
            暴力網頁入門是一門強度不低的入門課程，內容彌補了金魚中深度不足的地方，但也考驗各偽的自主訓練與耐心，只要能紮實的把訓練做好與消化，能力立馬提升。
          </p>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <i class="fa fa-thumbs-up"></i>
        </div>
        <div class="txt">
          <h3>金魚都懂切版</h3>
          <p>
            金魚都懂的這個網頁怎麼切，是 IThome
            鐵人賽的主題，主要訴求在簡單快速將一個網頁畫面完成，但也由於時間有限，所以沒有處理RWD部分，留給廣大網友腦補囉。
          </p>
        </div>
      </div>
      <div class="item">
        <div class="icon">
          <i class="fa fa-bell"></i>
        </div>
        <div class="txt">
          <h3>CSScoke</h3>
          <p>
            固定每週二晚上在 youtube
            平台直播，偶爾會偷懶休息，內容從基礎入門到業界實務應有盡有，從技術到經驗無一不談，還有大師常來聊系列，免費讓你學到大師能力。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,300,400,500,700,900&display=swap");
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
.contain {
  background-image: linear-gradient(-45deg, #fffaf0, #f8c3c1);
  height: calc(100vh - 70px);
  .wrap {
    width: 1200px;
    margin: auto;
    display: flex;
    height: 100%;
    align-items: center;

    .item {
      width: 370px;
      margin: 0 15px;
      text-align: center;

      display: flex;
      flex-direction: column;
      align-items: center;
      border: 10px solid #f9cec2;
      box-shadow: 10px 20px 50px #f7b6a7;
      background: #fff;

      .icon {
        width: 150px;
        height: 150px;
        background-color: #fff;
        line-height: 150px;
        border-radius: 50%;
        margin: -75px auto 0;
        position: relative;
        color: #f5afac;
        font-size: 60px;

        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border-top: 10px solid #f9cec2;
          border-right: 10px solid #f9cec2;
          border-bottom: 10px solid transparent;
          border-left: 10px solid transparent;
          left: -10px;
          top: -10px;
          border-radius: 50%;
          transform: rotate(-45deg);
        }
      }

      .txt {
        padding: 20px 20px 2em;
        h3 {
          margin-bottom: 1em;
        }
        p {
          line-height: 30px;
        }
      }

      &:hover {
        .fa {
          animation: ss 0.3s infinite alternate;
        }
      }
    }
  }
}

@keyframes ss {
  0% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(10deg);
  }
}
</style>
