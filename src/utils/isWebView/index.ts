export const isWebView = () => {
  // Check for user agent identifiers
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userAgent: string = navigator.userAgent || navigator.vendor || (window as any).opera

  return userAgent === 'Sphinx'
}

export const isAndroid = () => navigator.userAgent.includes('Android')
