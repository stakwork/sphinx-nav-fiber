export const videoTimetoSeconds = (value: string) => {
  const [hh, mm, ss] = value.split(":");
  const h = parseInt(hh, 10);
  const m = parseInt(mm, 10);
  const s = parseInt(ss, 10);

  return h * 3600 + m * 60 + s;
};
