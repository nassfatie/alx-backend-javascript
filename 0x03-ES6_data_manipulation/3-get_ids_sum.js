export default function getStudentIdsSum(arr) {
  const initial = 0;
  return arr.reduce((total, num) => total + num.id, initial);
}
