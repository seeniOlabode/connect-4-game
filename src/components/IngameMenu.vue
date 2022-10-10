<template>
  <div
    v-if="displayValue"
    class="modal-backdrop fixed top-0 left-0 flex items-center justify-center right-0 bottom-0 px-5"
    @click="handleCick"
  >
    <div
      class="content bg-game-purple border-solid border-4 border-game-black w-full pt-7 pb-8 sm:pt-8 sm:pb-10 max-w-lg px-5"
    >
      <h1 class="text-center text-6xl font-bold text-game-white mt-3">PAUSE</h1>

      <div class="flex justify-center mt-9 flex-wrap gap-7">
        <action-button-vue
          class="text-center justify-center flex inmenu-button"
          buttonType="rect-white"
          @click="closeModal"
          >CONTINUE GAME</action-button-vue
        >
        <action-button-vue
          class="text-center justify-center flex inmenu-button"
          buttonType="rect-white"
          @click="restartGame()"
          >RESTART</action-button-vue
        >
        <action-button-vue
          class="text-center justify-center flex inmenu-button"
          buttonType="rect-red"
          @click="quitGame()"
          >QUIT GAME</action-button-vue
        >
      </div>
    </div>
  </div>
</template>

<script>
import ActionButtonVue from "./shared/ActionButton.vue";

export default {
  name: "IngameMenu",
  components: { ActionButtonVue },
  emits: ["closeMenu"],
  props: {
    displayValue: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleCick(ev) {
      if (ev.target.classList[0] == "modal-backdrop") {
        this.$emit("closeMenu", false);
      }
    },
    closeModal() {
      this.$emit("closeMenu", false);
    },
    resetGame() {
      this.$store.dispatch("resetGame");
      this.$forceUpdate();
    },
    restartGame() {
      console.log("restart");
      this.resetGame();
      this.closeModal();
    },
    quitGame() {
      this.resetGame();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.content {
  border-radius: 40px;
  box-shadow: 0px 10px 0px #000000;
}

.inmenu-button {
  justify-content: center !important;
}
</style>
