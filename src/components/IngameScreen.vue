<template>
  <div class="w-full h-full py-14 px-5">
    <ingame-menu :displayValue="ingameMenu" @closeMenu="closeIngameMenu()" />
    <div class="header flex justify-between items-center">
      <action-button-vue buttonType="secondary" @click="openIngameMenu()"
        >MENU</action-button-vue
      >
      <img src="@/assets/images/logo.svg" alt="" />
      <action-button-vue buttonType="secondary" @click="restartGame()"
        >RESTART</action-button-vue
      >
    </div>

    <div class="scoreboard flex justify-between mt-12 gap-5">
      <div
        class="flex relative bg-game-white w-2/4 flex-wrap rounded-3xl score-count"
      >
        <span class="w-full text-base text-center mt-3 mb-2">PLAYER 1</span>
        <span class="w-full text-3xl text-center font-bold mb-3">{{
          redCount
        }}</span>
        <div class="absolute -left-5 h-full flex items-center">
          <img src="@/assets/images/you.svg" alt="" />
        </div>
      </div>
      <div
        class="flex relative bg-game-white w-2/4 flex-wrap rounded-3xl score-count"
      >
        <span class="text-base w-full text-center mt-3 mb-2">PLAYER 2</span>
        <span class="text-center w-full text-3xl font-bold mb-3">{{
          yellowCount
        }}</span>
        <div class="absolute -right-5 h-full flex items-center">
          <img src="@/assets/images/cpu.svg" alt="" />
        </div>
      </div>
    </div>
    <game-grid class="mt-14" />
  </div>
</template>

<script>
import ActionButtonVue from "./shared/ActionButton.vue";
import GameGrid from "./shared/GameGrid.vue";
import IngameMenu from "./IngameMenu.vue";
import { mapState } from "vuex";

export default {
  name: "IngameScreen",
  components: {
    ActionButtonVue,
    GameGrid,
    IngameMenu,
  },
  data() {
    return {
      ingameMenu: false,
    };
  },
  computed: {
    ...mapState({
      HoleProto: (state) => state.holePrototype,
    }),
    redCount() {
      console.log("proto", this.HoleProto);
      return this.HoleProto.redScore;
    },
    yellowCount() {
      return this.HoleProto.yellowScore;
    },
  },
  methods: {
    openIngameMenu() {
      this.ingameMenu = true;
    },
    closeIngameMenu() {
      this.ingameMenu = false;
    },
    restartGame() {
      this.$store.dispatch("resetGame");
    },
  },
};
</script>

<style scoped>
.score-count {
  box-shadow: 0px 10px 0px 0px #000000;
  @apply border-solid border-4 border-game-black;
}
</style>
