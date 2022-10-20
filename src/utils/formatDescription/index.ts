export const formatDescription = (description: string) => {
  const desc = description.replace(/[[]{2}/g, "").replace(/[\]]{2}/g, "");
  
  return desc;
};
