/**
 * take seconds and covert to string representation of minutes with seconds
 *
 * @param {number} time
 *
 * @return {string} The string representation.
 */
export default function getTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = (time % 60).toString();
  if (seconds.length === 1) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
}
