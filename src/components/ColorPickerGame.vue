<template>
  <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="matchColor(color)">
    {{ color }}
  </button>
</template>

<script>

import { colorPicker } from "../composables/colorPicker";
import { ref } from "vue";
export default {
  setup() {
    const colors = ["green", "red", "blue", "purple"];
    let ans = ref("Pick a color...");
    const pickColor = (color) => {
      let { message } = colorPicker(color, colors);
      ans.value = message;
    };
    return { ans, pickColor, colors };
  },
};
</script>

<style></style>