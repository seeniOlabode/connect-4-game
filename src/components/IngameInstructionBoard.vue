<template>
  <div class="absolute z-50 instruction-board">
    <div
      class="win relative flex items-center justify-center bg-game-white flex-wrap text-center font-bold content-center py-4 instruction-animation"
      v-if="matchFound"
    >
      <p class="w-full text-base">{{ winnerName }}</p>
      <p class="w-full text-6xl">WINS</p>
      <button
        class="bg-game-dark-purple py-2 px-5 text-game-white rounded-3xl mt-2"
        @click="resetGame()"
      >
        PLAY AGAIN
      </button>
    </div>
    <div
      v-else
      class="turn relative flex items-center justify-center instruction-animation"
    >
      <img class="" :src="turnImage" alt="" />
      <div
        class="absolute top-0 text-center flex h-full flex-wrap items-center content-center"
        :class="{ 'text-game-white': currentPlayer == 'red' }"
      >
        <p class="w-full text-base font-bold">{{ playerName }}'s TURN</p>
        <p class="w-full text-5xl font-bold">{{ time }}s</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "InstructionBoard",
  data() {
    return {
      turn: true,
      turnInterval: "",
      time: 15,
    };
  },
  computed: {
    ...mapState({
      currentPlayer: (state) => state.currentPlayer,
      matchFound: (state) => state.matchFound,
      winner: (state) => state.winner,
    }),
    redTurn() {
      return require("@/assets/images/turn-background-red.svg");
    },
    yellowTurn() {
      return require("@/assets/images/turn-background-yellow.svg");
    },
    turnImage() {
      if (this.currentPlayer == "red") {
        return this.redTurn;
      } else {
        return this.yellowTurn;
      }
    },
    playerName() {
      if (this.currentPlayer == "red") {
        return "PLAYER 1";
      } else {
        return "PLAYER 2";
      }
    },
    winnerName() {
      if (this.winner == "red") {
        return "PLAYER 1";
      } else {
        return "PLAYER 2";
      }
    },
  },
  watch: {
    currentPlayer() {
      clearInterval(this.turnInterval);
      this.time = 15;
      this.turnInterval = setInterval(() => {
        if (this.time > 0) {
          this.time--;
        } else {
          this.$store.dispatch("switchPlayer");
          this.time = 15;
        }
      }, 1000);
    },
  },
  mounted() {
    this.turnInterval = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        this.$store.dispatch("switchPlayer");
        this.time = 15;
      }
    }, 1000);
  },
  methods: {
    resetGame() {
      this.$store.dispatch("resetGame");
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
.instruction-board {
  margin-top: 87%;
  padding-bottom: 100px;
}

.turn img {
  width: 170px;
  height: auto;
  /* background: url("@/assets/images/turn-background-yellow.svg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 150px; */
}

.win {
  width: 285px;
  /* height: 160px; */
  border: 4px solid #000000;
  box-shadow: 0px 10px 0px #000000;
  border-radius: 20px;
}

.instruction-animation {
  animation: slideUp 0.2s ease-in-out;
}

@keyframes slideUp {
  0% {
    transform: translate(0, 50%);
  }
  100% {
    transform: none;
  }
}
</style>
