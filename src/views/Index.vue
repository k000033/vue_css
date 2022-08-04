<script>
import { reactive, ref } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";
import { defineAsyncComponent, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
import axios from "axios";
export default {
  components: {
    NO0001: defineAsyncComponent(() => import("../views/Course/NO0001.vue")),
    NO0002: defineAsyncComponent(() => import("../views/Course/NO0002.vue")),
    NO0003: defineAsyncComponent(() => import("../views/Course/NO0003.vue")),
    NO0004: defineAsyncComponent(() => import("../views/Course/NO0004.vue")),
    NO0005: defineAsyncComponent(() => import("../views/Course/NO0005.vue")),
    NO0006: defineAsyncComponent(() => import("../views/Course/NO0006.vue")),
  },
  setup() {
    const course_id = ref("NO0002");

    const link_click = (id) => {
      course_id.value = id;
    };
    return { link_click, course_id };
  },
};
</script>

<template>
  <div>
    <div class="header">
      <div class="container">
        <nav>
          <a @click="link_click('NO0001')">圖文滿版區塊</a>
          <a @click="link_click('NO0002')">互動圖文卡片</a>
          <a @click="link_click('NO0003')">人員介紹卡片</a>
          <a @click="link_click('NO0004')">交錯漂浮版</a>
          <a @click="link_click('NO0005')">超通用橫式版面</a>
          <a @click="link_click('NO0006')">網頁頁尾版塊</a>
        </nav>
        <div class="tst">ddddd</div>
      </div>
    </div>
    <div class="components">
      <component :is="course_id"></component>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: #000;
  color: #fff;
  .container {
    height: 70px;
    max-width: 80rem;
    margin: auto;
    display: flex;
    align-items: center;
    a {
      padding: 4px 12px;
    }
    .tst {
      margin-left: auto;
    }
  }
}
.components {
  // height: calc(100vh - 70px);
}
</style>
