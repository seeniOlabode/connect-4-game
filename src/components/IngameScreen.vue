<template>
  <div class="w-full h-full py-14 px-5 sm:px-16 max-w-3xl mx-auto sm:py-7">
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
    <div class="relative">
      <div
        class="scoreboard flex justify-between mt-12 sm:mt-8 gap-5 lg:absolute right-0 left-0"
      >
        <div
          class="score-child player-1 flex relative bg-game-white w-2/4 flex-wrap rounded-3xl score-count sm:justify-center sm:gap-5 lg:absolute lg:-left-1/4"
        >
          <span
            class="w-full text-base text-center mt-3 sm:mb-0 sm:mt-0 sm:text-xl sm:w-auto"
            >PLAYER 1</span
          >
          <span
            class="w-full text-3xl text-center font-bold mb-3 sm:mb-0 sm:text-5xl sm:w-auto"
            >{{ redCount }}</span
          >
          <div class="score-image absolute -left-5 h-full flex items-center">
            <img src="@/assets/images/player-one.svg" alt="" />
          </div>
        </div>
        <div
          class="score-child player-2 flex relative bg-game-white w-2/4 flex-wrap rounded-3xl score-count justify-center gap-5 py-2 lg:absolute lg:-right-1/4"
        >
          <span
            class="text-base w-full text-center mt-3 sm:mb-0 sm:mt-0 sm:text-xl sm:order-2 sm:w-auto lg:order-1"
            >PLAYER 2</span
          >
          <span
            class="text-center w-full text-3xl font-bold mb-3 sm:mb-0 sm:text-5xl sm:order-1 sm:w-auto lg:order-2"
            >{{ yellowCount }}</span
          >
          <div class="score-image absolute -right-5 h-full flex items-center">
            <img src="@/assets/images/player-two.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <game-grid class="mt-14 sm:mt-8" />
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
      holes: (state) => state.holes,
    }),
    redCount() {
      return this.$store.getters.getRedCount;
    },
    yellowCount() {
      return this.$store.getters.getYellowCount;
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

@media (min-width: 640px) {
  .scoreboard {
    height: 80px;
  }
}

.score-child {
  @apply sm:flex-nowrap items-center lg:h-48 lg:w-36 lg:flex-wrap lg:content-center lg:top-40;
  z-index: 100000;
}

.score-child span {
  @apply lg:w-full;
}

.score-image {
  @apply lg:h-auto lg:-top-7;
}

@media (min-width: 1024px) {
  .score-image {
    left: revert;
    right: revert;
  }
}

@media (min-width: 1200px) {
  .score-child.player-1 {
    @apply -left-64;
    /* display: none; */
  }

  .score-child.player-2 {
    @apply -right-64;
    /* display: none; */
  }
}
</style>
