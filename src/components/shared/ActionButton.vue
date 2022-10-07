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
</style>
