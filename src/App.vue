<template>
  <menu-screen />
</template>

<script>
import MenuScreen from "@/components/MenuScreen.vue";

export default {
  name: "App",
  components: {
    MenuScreen,
  },
};
</script>

<style>
#app {
  font-family: "Space Grotesk";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply bg-game-purple w-screen h-screen;
}
</style>
