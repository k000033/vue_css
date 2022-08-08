<script>
export default {
  setup() {
    return {};
  },
};
</script>

<template>
  <div class="wrap">
    <ol class="breadcrumb">
      <li><a href="#">CSS可樂</a></li>
      <li><a href="#">CSS教學</a></li>
      <li><a href="#">金魚系列</a></li>
      <li><a href="#">切版技巧</a></li>
      <li><a href="#">Flex</a></li>
      <li><a href="#">麵包屑</a></li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
$coff0: #ff0;

@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0");
.wrap {
  padding: 10px;
  background: #ec008b;
  .breadcrumb {
    width: 90%;
    margin: auto;
    display: flex;

    li {
      padding: 0 20px;

      a {
        text-decoration: none;
        color: #fff;
        position: relative;
        &::after {
          content: "\e900";
          position: absolute;
          left: 0;
          transform: translateX(-15px);
        }
      }

      & + li {
        padding-left: 0;
        &::before {
          margin-right: 20px;
          content: " < ";
          color: #fff;
        }
      }

      &:hover {
        a {
          color: $coff0;
        }
      }
      &:last-child {
        a {
          color: $coff0;
        }
      }
    }
  }
}
</style>
