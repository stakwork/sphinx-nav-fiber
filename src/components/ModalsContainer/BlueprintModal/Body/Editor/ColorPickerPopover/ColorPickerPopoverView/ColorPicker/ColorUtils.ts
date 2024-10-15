export const hexToHsl = (hex: string) => {
  let r = 0
  let g = 0
  let b = 0

  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16)
    g = parseInt(hex[2] + hex[2], 16)
    b = parseInt(hex[3] + hex[3], 16)
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16)
    g = parseInt(hex[3] + hex[4], 16)
    b = parseInt(hex[5] + hex[6], 16)
  }

  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min

    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    // eslint-disable-next-line default-case
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }

    h /= 6
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

export const hslToHex = (h: number, s: number, l: number) => {
  const saturation = s / 100

  const lightness = l / 100

  const k = (n: number) => (n + h / 30) % 12
  const a = saturation * Math.min(lightness, 1 - lightness)

  const f = (n: number) => Math.round(255 * (lightness - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1))))

  const r = f(0)
  const g = f(8)
  const b = f(4)

  // Construct the hex value without bitwise operations
  const hex = `#${[r, g, b]
    .map((val) => val.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()}`

  return hex
}
