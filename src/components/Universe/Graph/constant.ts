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

export const COLORS_MAP = [
  '#fff',
  '#9747FF',
  '#00887A',
  '#0098A6',
  '#0288D1',
  '#33691E',
  '#465A65',
  '#512DA7',
  '#5C6BC0',
  '#5D4038',
  '#662C00',
  '#689F39',
  '#6B1B00',
  '#750000',
  '#78909C',
  '#7E57C2',
  '#8C6E63',
  '#AA47BC',
  '#BF360C',
  '#C2175B',
  '#EC407A',
  '#EF6C00',
  '#F5511E',
  '#FF9696',
  '#FFC064',
  '#FFCD29',
  '#FFEA60',
]
