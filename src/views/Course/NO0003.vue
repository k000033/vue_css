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
      <img src="https://picsum.photos/300/300?random=10" />
      <div class="txt">
        <h2>CSS可樂</h2>
        <p>
          一個優質的技術型 Youtube
          頻道，旨在讓更多網路新手跳坑學習網站開發技術，平日用簡單易懂的教學方式讓新手能跨進網頁設計領域，並開設知名的網路課程「網頁設計暴力入門班」用紮實的原理解析讓新手能學習到深入的網頁製作技術及知識。知識。
        </p>
      </div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/300/300?random=20" />
      <div class="txt">
        <h2>Amos</h2>
        <p>
          現任 Youtube CSScoke
          頻道直播主，屬緣分系直播主，平日不定時會突然發懶不直播（過分！），頻道內分享業界實務技巧，不定時邀請業界大神免費分享實用技巧與經驗，有機會跟到直播的話表示你我有緣，何不斗內支持直播主製作更多優質節目呢。
        </p>
      </div>
    </div>
    <div class="item">
      <img src="https://picsum.photos/300/300?random=30" />
      <div class="txt">
        <h2>推坑大魔王</h2>
        <p>
          不是路不平！而是坑太多！閒暇時看到好東西就會推坑給周遭朋友，不管是好物或是好書甚至是好課，無一不推！看似抽庸很大卻是一毛不取，一個佛系推坑方式，希望能讓周遭朋友用較低的負擔獲得更多技術，並努力轉換成收入，讓所有周遭的朋友發大財！
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);
  margin: auto;

  .item {
    width: 368px;
    margin: 0 15px;
    border: 1px solid #ccc;
    text-align: center;
    transition: transform 0.35s;

    img {
      width: 100%;
      vertical-align: middle;
    }
    .txt {
      padding: 20px;
      position: relative;
      transition: color 0.25s;
      h2 {
        border-bottom: 1px solid #ccc;
        padding-bottom: 15px;
        margin-bottom: 15px;

        &::before {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-top: 50px solid transparent;
          border-left: 184px solid #fff;
          border-right: 184px solid #fff;
          transform: translateY(-100%);
        }
      }
    }

    p {
      font-family: "Noto Sans TC", sans-serif;
      line-height: 1.6;
      font-weight: 300;
    }

    &:hover {
      transform: translatey(-50px);

      .txt {
        background: linear-gradient(0deg, #fb8076, #feb85d);
        color: #fff;
        h2 {
          &::before {
            border-left: 184px solid #feb85d;
            border-right: 184px solid #feb85d;
          }
        }
      }
    }
  }
}
</style>
