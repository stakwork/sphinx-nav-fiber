export function timeToMinutes(time: string) {
  const [hours, minutes, seconds] = time.split(":").map(Number);

  return (hours * 60 + minutes + seconds / 60).toFixed(6);
}
