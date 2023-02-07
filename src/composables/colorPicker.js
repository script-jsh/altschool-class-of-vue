import { ref } from "vue";

export const useMatchColor = (value, colors) => {
  let message = ref("Pick a color...");
  const randomNumber = Math.floor(
    Math.random() * colors.length
  ); /*between 1 and
   whatever number of colors are in the array. this makes the composable more reusable and dynamic
*/
  if (colors[randomNumber] === value) {
    message.value = `You win... [answer: ${colors[randomNumber]}]`;
  } else {
    message.value = `You loose [answer: ${colors[randomNumber]}]`;
  }

  return { message };
};