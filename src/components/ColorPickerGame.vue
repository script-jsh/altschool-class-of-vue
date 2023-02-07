<template>
  <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="matchColor(color)">
    {{ color }}
  </button>
</template>

<script>

import {colorPicker } from '../composables/colorPicker'
export default {
  setup() {
    const { colors, message, matchColor} = colorMatch();
  return { colors, message, matchColor }},
};
</script>

<style></style>