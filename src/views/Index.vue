<script>
import { reactive } from "@vue/reactivity";
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const linkArray = reactive({});
    const store = useStore();
    const router = useRouter;

    onMounted(() => {
      store.dispatch("fetchLinkObject");
    });
    return { linkArray };
  },
};
</script>

<template>
  <div>
    <!-- <nav>
      <a v-for="(item, key) in linkArray" key="e" @click="link_click('N')"
        >圖文滿版區塊 NO001</a
      >
    </nav> -->
  </div>
</template>

<style></style>
