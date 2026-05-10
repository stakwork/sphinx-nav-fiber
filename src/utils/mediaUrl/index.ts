const S3_UPLOADS_BUCKET = 'stakwork-uploads'
const S3_PATH_STYLE_HOST = 's3.amazonaws.com'
const S3_VIRTUAL_HOST = `${S3_UPLOADS_BUCKET}.s3.amazonaws.com`

export const normalizeMediaUrl = (value?: string | null): string => {
  if (typeof value !== 'string') {
    return ''
  }

  const trimmedValue = value.trim()

  if (!trimmedValue) {
    return ''
  }

  try {
    const url = new URL(trimmedValue)

    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return encodeURI(trimmedValue)
    }

    if (url.hostname === S3_PATH_STYLE_HOST && url.pathname.startsWith(`/${S3_UPLOADS_BUCKET}/`)) {
      url.hostname = S3_VIRTUAL_HOST
      url.pathname = url.pathname.replace(`/${S3_UPLOADS_BUCKET}`, '')
    }

    return url.toString()
  } catch {
    return encodeURI(trimmedValue)
  }
}

export const getCssMediaUrl = (value?: string | null): string => {
  const normalizedUrl = normalizeMediaUrl(value)

  if (!normalizedUrl) {
    return 'none'
  }

  return `url("${normalizedUrl.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}")`
}
