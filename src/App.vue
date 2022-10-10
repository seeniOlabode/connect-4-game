<template>
  <router-view></router-view>
</template>

<script>
// import MenuScreen from "@/components/MenuScreen.vue";

export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: "Space Grotesk", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-game-purple w-screen h-screen overflow-scroll;
}

* {
  user-select: none;
}
</style>
