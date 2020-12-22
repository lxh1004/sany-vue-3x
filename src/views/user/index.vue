<template>
  <div class="hello">
    {{ getName }}---{{ getDoneTodosCount }}---{{ getAnotherName }}
    <button type="button" @click="setMyName('小猪佩奇')">点击更改</button>
    <router-link :to="{ name: 'MyStore' }">点击跳转另一个页面</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",

  data() {
    return {};
  },
  methods: {
    ...mapActions({
      setMyName: "users/setMyName",
    }),
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters({
      getName: "users/getName",
      getDoneTodosCount: "users/getDoneTodosCount",
      getAnotherName: "users/getAnotherName",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
