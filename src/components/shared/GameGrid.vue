<template>
  <!-- <div class="relative flex justify-center"> -->
  <!-- <img src="@/assets/images/board-layer-black-small.svg" alt="" />
    <div class="grid-div">
      <span v-for="(item, index) in grid" :key="index"> {{ item }} </span>
    </div>
    <img
      class="absolute top-0"
      src="@/assets/images/board-layer-white-small.svg"
      alt=""
    />
  </div> -->
  <div>
    <div class="relative flex justify-center">
      <img
        class="w-full absolute top-0 z-10"
        src="@/assets/images/board-layer-black-small.svg"
        alt=""
      />
      <div class="hole-grid w-full h-full flex flex-wrap absolute top-0 z-30">
        <span
          v-for="hole in holes"
          :key="hole.index + hole.value"
          class="hole-span relative"
          :class="{ 'cursor-pointer': hole.value === null && !matchFound }"
          :disabled="matchFound"
          @click="fillHole(hole.index)"
          ><span v-if="hole.value != null" class="content" draggable="false">
            <img
              :src="hole.value === 'red' ? redCounter : yellowCounter"
              alt=""
              draggable="false"
            />
            <span v-if="hole.matched" class="matched-marker-holder">
              <span class="matched-marker-content"></span>
            </span> </span
        ></span>
      </div>
      <img
        class="absolute top-0 w-full z-50 white-board"
        src="@/assets/images/board-layer-white-small.svg"
        alt=""
      />
      <ingame-instruction-board class="absolute" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import IngameInstructionBoard from "../IngameInstructionBoard.vue";

export default {
  name: "GameGrid",
  components: { IngameInstructionBoard },
  data() {
    return {
      winner: "",
      matchArray: [],
    };
  },
  computed: {
    ...mapState({
      holes: (state) => state.holes,
      currentPlayer: (state) => state.currentPlayer,
      matchFound: (state) => state.matchFound,
    }),

    yellowCounter() {
      let output;
      output = require("@/assets/images/counter-yellow-small.svg");
      return output;
    },

    redCounter() {
      let output;
      output = require("@/assets/images/counter-red-small.svg");
      return output;
    },
  },
  methods: {
    fillHole(index) {
      this.holes[index].fill(this.currentPlayer);
      this.$store.dispatch("switchPlayer");
      this.currentPlayer = this.currentPlayer == "yellow" ? "red" : "yellow";
      this.$store.dispatch("checkForMatches");
    },
  },
};
</script>

<style scoped>
/* .grid-div {
  display: grid;
  grid-template-columns: repeat(7, 33px);
  grid-template-rows: repeat(6, 33px);
  position: absolute;
  top: 0;
  gap: 15px;
  margin: 10px;
  margin-right: 19px;
}

.grid-div span {
  grid-column: span 1;
  @apply bg-game-red;
} */

.hole-grid {
  display: flex;
  align-content: stretch;
  padding: 8px;
  gap: 5.5px;
}

.hole-span {
  width: 13%;
  flex-grow: 1;
  aspect-ratio: 1;
  border-radius: 50%;
}

.hole-span > .content {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: block;
  animation: slideIn 0.4s ease-in-out;
}

.hole-span > .content > img {
  width: 100%;
}

@keyframes slideIn {
  0% {
    transform: translate(0, -500%);
  }
  100% {
    transform: none;
  }
}

.white-board {
  pointer-events: none;
}

.matched-marker-holder {
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  top: 0;
  padding: 13px;
}

.matched-marker-content {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  border: solid 5px white;
  display: block;
  border-radius: 50%;
}
</style>
