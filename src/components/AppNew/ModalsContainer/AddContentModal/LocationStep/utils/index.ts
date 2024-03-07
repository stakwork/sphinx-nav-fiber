export const validateLatitude = (valueString: string) => {
  const value = Number(valueString)

  if (value < -90 || value > 90) {
    return 'Latitude must be between -90 and 90.'
  }

  if (!value && value !== 0) {
    return 'Latitude is required.'
  }

  return true
}

export const validateLongitude = (value: number) => {
  if (value < -180 || value > 180) {
    return 'Longitude must be between -180 and 180.'
  }

  if (!value && value !== 0) {
    return 'Longitude is required.'
  }

  return true
}
