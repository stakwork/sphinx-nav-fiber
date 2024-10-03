export const UNIVERSE_SCALE = 5000

export const DATA_COLOR_PALETTE: Record<string, string> = {
  show: '#FF723C',
  clip: '#FFFF00',
  episode: '#FF7F50',
  guest: '#E066FF',
  topic: '#F8F8FF',
  Topic: '#F8F8FF',
  Organization: '#FF7F50',
}

export const getNodeColorByType = (nodeType: string, returnString?: boolean) => {
  const color = DATA_COLOR_PALETTE[nodeType] || '#F8F8FF'

  if (!returnString) {
    return parseInt(color.replace('#', '0x'), 16)
  }

  return color
}
