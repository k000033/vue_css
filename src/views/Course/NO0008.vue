<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="wrap">
    <div class="item">
      <img src="https://picsum.photos/500/500?random=10" />
      <div class="txt">
        <h3>金魚都懂切版</h3>
        <p>
          金魚都懂的這個網頁怎麼切，是 IThome
          鐵人賽的主題，主要訴求在簡單快速將一個網頁畫面完成，但也由於時間有限，所以沒有處理RWD部分，留給廣大網友腦補囉。
        </p>
      </div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/500/500?random=20" />
      <div class="txt">
        <h3>金魚也懂CSS</h3>
        <p>
          金魚都能懂的 CSS 選取器，是 IThome
          鐵人賽的主題之一，內容原理與實務並重，看完考試不會考一百分，但是可以學到很多。
        </p>
      </div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/500/500?random=30" />
      <div class="txt">
        <h3>金魚還會HTML</h3>
        <p>
          金魚都能懂的網頁設計入門，是針對新手入門規劃的一個完整的入門課，雖免費但專業度卻絲毫未減，適合大人小孩一起服用。
        </p>
      </div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/500/500?random=40" />
      <div class="txt">
        <h3>阿你會甚麼?</h3>
        <p>
          這是個問句，你會甚麼? 這很重要，因為你可能是程式奇才而不適合切版阿
        </p>
      </div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/500/500?random=66" />
      <div class="txt">
        <h3>對不起我又嗆人了</h3>
        <p>
          如果你覺得我嗆，那你一定沒有在看 CSScoke
          的直播，趁現在趕快去定閱一波阿!
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  background: #aaa;
  width: 100%;
  margin: auto;
  overflow: hidden;
  .item {
    float: left;
    position: relative;
    &.item:first-child {
      width: 50%;
    }

    img {
      width: 100%;
      vertical-align: middle;
    }
    .txt {
      position: absolute;
      left: 0;
      top: 0;
      top: 0;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 15px;
      box-sizing: border-box;
      background: #00000052;
      transform: scale(0);
      color: #fff;
      transition: transform 0.5s;
      opacity: 0;
      text-align: center;
    }

    & ~ .item {
      width: 25%;
    }

    &:hover {
      .txt {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
}
</style>
