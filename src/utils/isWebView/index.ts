export const isWebView = () => {
  // Check for user agent identifiers
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userAgent: string = navigator.userAgent || navigator.vendor || (window as any).opera

  const isAndroidWebView: boolean =
    /wv/.test(userAgent) || /Android.*Version\/[\d.]+.*Chrome\/[\d.]+ Mobile/.test(userAgent)

  const isIOSWebView: boolean = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/.test(userAgent)

  // General WebView checks
  const isWebViewInstance: boolean = navigator?.userAgent.includes('Crosswalk')

  return isAndroidWebView || isIOSWebView || isWebViewInstance
}
