<template>
  <div
    class="w-full h-full flex items-center justify-center flex-wrap content-center px-5"
  >
    <div class="w-full flex justify-center mb-20">
      <img class="" src="@/assets/images/logo.svg" alt="" />
    </div>
    <div class="w-full flex justify-center flex-wrap">
      <action-button-vue buttonType="rect-red" class="mb-8">
        PLAY CPU <img src="@/assets/images/player-vs-cpu.svg" alt=""
      /></action-button-vue>
      <action-button-vue buttonType="rect-yellow" class="mb-8">
        PLAYER VS PLAYER <img src="@/assets/images/player-vs-player.svg" alt=""
      /></action-button-vue>
      <action-button-vue buttonType="rect-white">
        GAME RULES
      </action-button-vue>
    </div>
  </div>
</template>

<script>
import ActionButtonVue from "./shared/ActionButton.vue";

export default {
  name: "MenuScreen",
  components: { ActionButtonVue },
};
</script>

<style></style>
