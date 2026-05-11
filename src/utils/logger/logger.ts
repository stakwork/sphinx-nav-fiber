/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles.css'

const getElementsMemoized = () => {
  const cache = {} as { inner: HTMLElement; body: HTMLElement }

  return () => {
    if (cache.inner && cache.body) {
      return cache
    }

    const body = document.querySelector('body')
    const wrapper = document.createElement('div')
    const inner = document.createElement('div')
    const close = document.createElement('div')
    const open = document.createElement('div')

    const toggleVisibility = () => {
      wrapper.classList.toggle('hide')
    }

    close.addEventListener('click', toggleVisibility)
    open.addEventListener('click', toggleVisibility)

    wrapper.classList.add('loggerWrapper')
    wrapper.classList.add('hide')
    inner.classList.add('loggerInner')
    close.classList.add('close')
    open.classList.add('open')

    close.textContent = 'X'
    close.setAttribute('aria-label', 'Close log panel')
    open.textContent = 'OPEN LOG'
    open.setAttribute('aria-label', 'Open log panel')

    body?.appendChild(wrapper)
    body?.appendChild(open)
    wrapper.appendChild(close)
    wrapper.appendChild(inner)

    cache.body = body as HTMLBodyElement
    cache.inner = inner

    return {
      body,
      inner,
    }
  }
}

const getElements = getElementsMemoized()

const variants = ['log', 'info', 'warn', 'error'] as const

type Variants = (typeof variants)[number]

let consoleOverridden = false

const isLocalHost = () => {
  const { hostname } = window.location

  return hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '0.0.0.0' || hostname.endsWith('.local')
}

const logMessage = (message: string, variant: Variants) => {
  const { inner } = getElements()
  const messagaWrap = document.createElement('span')

  messagaWrap.textContent = message
  messagaWrap.classList.add('message')
  messagaWrap.classList.add(variant)
  inner.appendChild(messagaWrap)
}

export const overrideConsole = () => {
  if (!isLocalHost() || consoleOverridden) {
    return
  }

  const console = (function (oldCons: Console) {
    const overridedMethods = variants.reduce(
      (overrided, method) => ({
        ...overrided,
        [method](...args: any[]) {
          oldCons[method](...args)
          logMessage(JSON.stringify(args, null, '  '), method)
        },
      }),
      {} as Console,
    )

    return {
      ...oldCons,
      ...overridedMethods,
    }
  })(window.console)

  window.console = console
  consoleOverridden = true
}
