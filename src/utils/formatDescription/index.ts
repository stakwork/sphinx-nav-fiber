export function formatDescription(description: string) {
  if (description == null) {
    return "Text unavailable";
  }

  return description.replace(/[[]{2}/g, "").replace(/[\]]{2}/g, "");
}
