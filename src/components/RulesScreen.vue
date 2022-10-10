<template>
  <div class="h-full w-full flex items-center justify-center px-5">
    <div
      class="bg-game-white w-full border-game-black border-4 px-5 py-16 pt-10 rules-container relative max-w-lg"
    >
      <h1 class="text-center text-6xl font-bold">RULES</h1>
      <div>
        <h3 class="text-game-purple font-bold text-xl mt-8">OBJECTIVE</h3>
        <p class="text-game-black opacity-60 mt-4 text-base">
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>
      </div>
      <div>
        <h3 class="text-game-purple font-bold text-xl mt-8">HOW TO PLAY</h3>
        <ol class="mt-4 text-base font-medium">
          <li>
            <span class="count">1</span
            ><span>Red goes first in the first game.</span>
          </li>
          <li>
            <span class="count">2</span>
            <span
              >Players must alternate turns, and only one disc can be dropped in
              each turn.</span
            >
          </li>
          <li>
            <span class="count">3</span>
            <span
              >The game ends when there is a 4-in-a-row or a stalemate.</span
            >
          </li>
          <li>
            <span class="count">4</span>
            <span
              >The starter of the previous game goes second on the next
              game.</span
            >
          </li>
        </ol>
      </div>
      <div class="absolute -bottom-7 w-full flex justify-center left-0 right-0">
        <action-button-vue buttonType="round" @click="$router.back()">
          <img src="@/assets/images/icon-check-bare.svg" alt="" />
        </action-button-vue>
      </div>
    </div>
  </div>
</template>

<script>
import ActionButtonVue from "./shared/ActionButton.vue";

export default {
  name: "RulesScreen",
  components: { ActionButtonVue },
};
</script>

<style scoped>
.rules-container {
  border-radius: 40px;
}

ol li {
  display: flex;
  gap: 15px;
}

ol li:not(:last-child) {
  margin-bottom: 10px;
}

ol li .count {
  width: 10px;
  text-align: center;
}

ol li::before {
  /* list-style: decimal; */
  /* list-style-position: inside; */
  /* counter-increment: rule;
  content: counter(rule);
  margin-right: 15px;
  height: 100%; */
}

ol li span:not(.count) {
  opacity: 0.66;
}
</style>
