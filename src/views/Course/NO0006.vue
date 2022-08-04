<script>
export default {};
</script>

<template>
  <div class="main-footer">
    <div class="container">
      <div class="footer-item">
        <h4>關於暴力課程</h4>
        <nav>
          <a href="#"><i class="fa fa-angle-right"></i> 課程目標</a>
          <a href="#"><i class="fa fa-angle-right"></i> 辦學理念</a>
          <a href="#"><i class="fa fa-angle-right"></i> 課程宗旨</a>
        </nav>
      </div>
      <div class="footer-item">
        <h4>課程列表</h4>
        <nav>
          <a href="#"><i class="fa fa-angle-right"></i> 暴力網頁入門班</a>
          <a href="#"><i class="fa fa-angle-right"></i> RWD網頁深入理解</a>
          <a href="#"><i class="fa fa-angle-right"></i> CSS3互動動畫設計</a>
          <a href="#"><i class="fa fa-angle-right"></i> Bootstrap框架實務</a>
        </nav>
      </div>
      <div class="footer-item">
        <h4>服務項目</h4>
        <nav>
          <a href="#"><i class="fa fa-angle-right"></i> 網站建置顧問</a>
          <a href="#"><i class="fa fa-angle-right"></i> 網站設計建置</a>
          <a href="#"><i class="fa fa-angle-right"></i> 網站規劃</a>
          <a href="#"><i class="fa fa-angle-right"></i> 企業教育訓練</a>
        </nav>
      </div>
      <div class="footer-item footer-subs">
        <h4>訂閱電子報</h4>
        <form>
          <input type="text" name="" />
          <input type="submit" value="訂閱" />
        </form>
      </div>
    </div>
    <div class="conpyright">
      Copyright &copy; 2019 金魚都能懂得這個網頁畫面怎麼切
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
.main-footer {
  display: flex;
  flex-direction: column;
  padding-top: 140px;
  background: linear-gradient(-20deg, #3f5494, #08c7a5);
  box-sizing: border-box;
  .container {
    width: 1200px;
    margin: auto;
    display: flex;

    .footer-item {
      width: 0;
      flex-grow: 1;
      margin: 0 15px;

      h4 {
        border-bottom: 1px dashed #fff;
        margin-bottom: 15px;
        padding-bottom: 15px;
        color: #fff;
      }
      nav {
        display: flex;
        flex-direction: column;

        a {
          line-height: 1.4;
          text-decoration: none;
          padding: 5px 0;
          color: #fff;
        }
      }
    }
  }

  .conpyright{
	width: 100%;
	text-align: center;
	margin: 150px 0 0 ;
	padding: 10px 0px;
	background-color: #3e5293;
	color: #70f6df;
    
}
}

.footer-subs {
    display: flex;
    flex-direction: column;
 form{
   display: flex;
	width: 100%;
	margin: auto 0px;
   
  input[type="text"] {
    border: none;
    padding: 5px 10px;
    width: 0;
    flex-grow: 1;
  }

  input[type="submit"] {
    border: none;
    padding: 5px 10px;
    color: #70f6df;
	background-color: #3e5293; 
  }
   }
}


</style>
