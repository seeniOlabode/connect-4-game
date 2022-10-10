import { createStore } from "vuex";

import { HolesArray } from "@/app/connect-four";
import { Hole } from "@/app/connect-four";

export default createStore({
  state: {
    holes: HolesArray,
    holePrototype: Hole,
    currentPlayer: "red",
    turnCount: 0,
    matchFound: false,
    winner: "",
    redCount: Hole.redScore,
    yellowCount: Hole.yellowScore,
  },
  mutations: {
    changePlayer(state, payload) {
      state.currentPlayer = payload;
    },
  },
  actions: {
    resetGame({ state }) {
      state.holePrototype.reset();
      state.holes[0].fill("test");
      state.holes[0].fill(null);
      state.winner = "";
      state.matchFound = false;
      if (state.turnCount % 2 == 0) {
        state.currentPlayer = "yellow";
        state.turnCount++;
      } else {
        state.currentPlayer = "red";
        state.turnCount++;
      }
    },
    checkForMatches({ state }) {
      state.holes.forEach((hole) => {
        state.holePrototype.checkForMatch(hole.index, "top");
        state.holePrototype.checkForMatch(hole.index, "right");
        state.holePrototype.checkForMatch(hole.index, "bottom");
        state.holePrototype.checkForMatch(hole.index, "left");
        // state.holePrototype.checkForMatch(hole.index, "topLeft");
        // state.holePrototype.checkForMatch(hole.index, "topRight");
        // state.holePrototype.checkForMatch(hole.index, "bottomLeft");
        // state.holePrototype.checkForMatch(hole.index, "bottomRight");
      });
      let matchObject = state.holePrototype.checkForMatch(0, "top");

      if (matchObject.match) {
        state.matchFound = matchObject.match;
        state.winner = matchObject.winner;
      }
    },
    switchPlayer({ state, commit }) {
      state.currentPlayer == "red"
        ? commit("changePlayer", "yellow")
        : commit("changePlayer", "red");
    },
  },
  getters: {
    getPlayer(state) {
      return state.currentPlayer;
    },
  },
  modules: {},
});
