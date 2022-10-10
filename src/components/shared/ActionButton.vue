<template>
  <button :class="buttonType">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    buttonType: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* GENERAL BUTTON STYLES */

button {
  box-shadow: 0px 10px 0px 0px #000000;
  @apply hover:border-game-dark-purple hover:shadow-game-dark-purple text-xl h-20 w-80;
}

button:hover {
  box-shadow: 0px 10px 0px 0px #5c2dd5;
}

/* RECTANGLE STYLES */

[class*="rect"] {
  @apply p-4 pl-5  font-bold border-solid border-4 border-game-black rounded-3xl flex items-center justify-between;
}

/* RECTANGLE COLOR STYLES */

[class*="red"] {
  @apply bg-game-red text-game-white;
}

[class*="yellow"] {
  @apply text-game-black bg-game-yellow;
}

[class*="white"] {
  @apply text-game-black bg-game-white;
}

[class*="round"] {
  @apply rounded-full w-auto h-auto border-game-black border-solid border-4 bg-game-red;
  box-shadow: 0px 5px 0px #000000;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}

[class*="round"]:hover {
  box-shadow: 0px 5px 0px 0px #5c2dd5;
}

[class*="secondary"] {
  @apply text-game-white shadow-none bg-game-dark-purple px-5 rounded-3xl font-bold w-28 h-10 flex items-center justify-center;
  font-size: 16px;
}

[class*="secondary"]:hover {
  @apply bg-game-red;
  box-shadow: none;
}
</style>
