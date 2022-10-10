<template>
  <div
    class="w-full h-full flex items-center justify-center flex-wrap content-center px-5 sm:bg-game-dark-purple"
  >
    <div
      class="sm:border-solid sm:border-game-black sm:border-4 pt-20 pb-16 max-w-md menu-holder sm:bg-game-purple"
    >
      <div class="w-full flex justify-center mb-20">
        <img class="" src="@/assets/images/logo.svg" alt="" />
      </div>
      <div class="w-full flex justify-center flex-wrap">
        <action-button-vue
          @click="$router.push('/game')"
          buttonType="rect-red"
          class="mb-8"
          disabled="true"
        >
          PLAY CPU <img src="@/assets/images/player-vs-cpu.svg" alt=""
        /></action-button-vue>
        <action-button-vue
          @click="$router.push('/game')"
          buttonType="rect-yellow"
          class="mb-8"
        >
          PLAYER VS PLAYER
          <img src="@/assets/images/player-vs-player.svg" alt=""
        /></action-button-vue>
        <action-button-vue
          @click="$router.push('/rules')"
          buttonType="rect-white"
        >
          GAME RULES
        </action-button-vue>
      </div>
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

<style scoped>
@media (min-width: 640px) {
  .menu-holder {
    box-shadow: 0px 10px 0px #000000;
    border-radius: 40px;
  }
}
</style>
