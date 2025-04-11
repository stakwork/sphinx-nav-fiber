/* eslint-disable no-bitwise */
function shadeColor(color: string, percent: number): string {
  // Remove the hash if it's there.
  let newColor = color[0] === '#' ? color.slice(1) : color

  // Expand shorthand hex notation (e.g., "D22" → "DD2222")
  if (newColor.length === 3) {
    newColor = newColor
      .split('')
      .map((ch) => ch + ch)
      .join('')
  }

  // Convert the hex color to a number.
  const num = parseInt(newColor, 16)

  // Calculate the adjustment amount.
  // Multiplying by 2.55 converts a percentage to the 0-255 scale.
  const amt = Math.round(2.55 * percent)

  // Extract and adjust red, green, and blue components.
  let R = (num >> 16) + amt
  let G = ((num >> 8) & 0x00ff) + amt
  let B = (num & 0x0000ff) + amt

  // Clamp each value between 0 and 255.
  R = Math.min(255, Math.max(0, R))
  G = Math.min(255, Math.max(0, G))
  B = Math.min(255, Math.max(0, B))

  // Convert the adjusted values back to a hex string.
  return `#${((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1).toUpperCase()}`
}

/**
 * Generates a palette from a base color consisting of lighter tints and darker shades.
 *
 * For example, with a base color of "#D22" (which expands to "#DD2222"):
 *   - If steps = 3 and stepPercent = 10, the output will be:
 *     [
 *       shadeColor(baseColor, 30),  // Lightest tint
 *       shadeColor(baseColor, 20),
 *       shadeColor(baseColor, 10),
 *       baseColor,                  // Base color (converted to uppercase)
 *       shadeColor(baseColor, -10),
 *       shadeColor(baseColor, -20),
 *       shadeColor(baseColor, -30)  // Darkest shade
 *     ]
 *
 * @param {string} baseColor - The base hex color.
 * @param {number} steps - Number of tints and shades to generate.
 * @param {number} stepPercent - The percentage change per step.
 * @returns {string[]} An array of hex color strings forming the palette.
 */
export function generatePalette(baseColor: string, steps: number, stepPercent = 10): string[] {
  const palette: string[] = []

  // Generate tints (lighter colors).
  // Using higher percentages first to get the lightest tint first.
  for (let i = steps; i >= 1; i -= 1) {
    palette.push(shadeColor(baseColor, i * stepPercent))
  }

  // Add the base color (in uppercase for consistency).
  palette.push(baseColor.toUpperCase())

  // Generate shades (darker colors).
  for (let i = 1; i <= steps; i += 1) {
    palette.push(shadeColor(baseColor, -i * stepPercent))
  }

  return palette
}
