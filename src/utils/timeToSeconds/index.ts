export function timeToSeconds(time: string) {
  const [hours, minutes, seconds] = time.split(":").map(Number);

  return Number(
    (hours * 60 * 60  + minutes * 60  + seconds).toFixed(6)
  );
}
