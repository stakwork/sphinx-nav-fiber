export function removeLeadingMentions(text: string) {
  return text.replace(/^(?:@\w+\s+)+/, '').trim()
}
