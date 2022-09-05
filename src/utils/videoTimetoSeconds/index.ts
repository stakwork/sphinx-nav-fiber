export const videoTimetoSeconds = (value: string) => {
  let splitValue = value.split(":");
  const h = parseInt(splitValue[0]);
  const m = parseInt(splitValue[1]);
  const s = parseInt(splitValue[2]);

  return h * 3600 + m * 60 + s;
};
