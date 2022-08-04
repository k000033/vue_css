<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="banner">
    <div class="container">
      <div class="banner-txt">
        <h1>
          金魚都能懂的
          <small> 這個網頁畫面怎麼切 </small>
        </h1>
        <h2>圖文滿版區塊</h2>
        <p>
          這畫面實在常見，在各種樣版網站可說是設計常客<br />
          金魚切不出來實在說不過去阿
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: calc(100vh - 70px);
  background-color: #ccc;
  background: linear-gradient(115deg, #7df 50%, transparent 50%) center
      center/100% 100%,
    url("https://picsum.photos/1200/600?random=10") right center / auto 100%;
  .container {
    width: 100%;
    max-width: 1440px;
    height: 100%;
    margin: auto;
  }
  .banner-txt {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1 {
      font-size: 80px;
      border-bottom: 1px solid #333;
      font-weight: 900;
      padding-bottom: 0.3em;
      margin-bottom: 0.3em;
    }

    h2 {
      font-size: 50px;
      font-weight: 700;
    }
    small {
      display: block;
      font-size: 53px;
      font-weight: 700;
    }
    p {
      font-size: 20px;
      font-weight: 300;
    }
  }
}
</style>
