export default function returnHowManyArguments(...theArg) {
  let total = 0;
  for (const arg of theArg) {
    total += arg;
  }
  return total;
}
