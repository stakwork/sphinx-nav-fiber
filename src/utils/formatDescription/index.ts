export function formatDescription(description: string | undefined) {
  if (!description) {
    return "Text unavailable";
  }

  return description.replace(/[[]{2}/g, "").replace(/[\]]{2}/g, "");
}
