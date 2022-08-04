<script>
export default {};
</script>

<template>
  <div>
    <div class="wrap">
      <div class="container">
        <div class="item">
          <div class="pic">
            <img src="https://picsum.photos/400/400?random=10" />
          </div>
          <div class="txt">
            <h2>金魚都能懂的網頁入門</h2>
            <p>
              年度最佳網頁入門教學影片，輕鬆學會網頁製作，原始碼原來如此有趣啊。
            </p>
            <a href="#" class="btn">more</a>
          </div>
        </div>
        <div class="item">
          <div class="pic">
            <img src="https://picsum.photos/400/400?random=11" />
          </div>
          <div class="txt">
            <h2>金魚都能懂的網頁切版</h2>
            <p>
              沒想到切版竟然如此簡單，以往的困難迎刃而解，技巧原來這般單純。
            </p>
            <a href="#" class="btn">more</a>
          </div>
        </div>
        <div class="item">
          <div class="pic">
            <img src="https://picsum.photos/400/400?random=12" />
          </div>
          <div class="txt">
            <h2>金魚都能懂的CSS選取器</h2>
            <p>CSS選取器原來是這道理啊，其實之前都誤解她了，對不起 9523 !</p>
            <a href="#" class="btn">more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+TC:100,500&display=swap");
.wrap {
  height: calc(100vh - 70px);
  font-family: "Noto Sans TC", sans-serif;
  	background: linear-gradient(-30deg,#fdaecb,#e7597f,#fe8556);
  .container {
    height: 100%;
    width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    .item {
      width: 368px;
      display: flex;
      margin: 0 15px;
      border: 1px solid #ccc;

      .pic {
        width: 50%;
        img {
          width: 100%;
          object-fit: cover;
        }
      }
      .txt {
        width: 50%;
        box-sizing: border-box;
        padding: 20px   ;
        display: flex;
        flex-direction: column;
        box-shadow: 0 10px 30px rgba(160,0,0,.5);
        background: #fff;
        h2 {
          font-weight: 500;
          margin-bottom: 0.4em;
          font-size: 17px;
        }
        .btn{
            margin-top: auto;
            align-self: flex-end;
            text-decoration: none;
            border: 1px solid #ccc;
            padding: 0em 1em;
            border-radius: 200px;
                height: 25px;
             line-height: 22px;

             &:hover{
                 background: #aaa;
                 color: #fff;
             }
        }

      }
      p {
        font-weight: 300;
      }
    }
  }
}
</style>
