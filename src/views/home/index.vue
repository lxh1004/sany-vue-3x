<template>
  <!--容器-->
  <div class="container_boxs">
    <div class="container_header"><v-header></v-header></div>
    <div class="container">
      <div class="container_left">
        <Left />
      </div>
      <div class="container_right">
        <v-tag></v-tag>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Left from "@/layout/left";
import vTag from "@/layout/tag";
import vHeader from "@/layout/header";
export default {
  name: "About",
  components: {
    Left,
    vTag,
    vHeader,
  },
};
</script>
