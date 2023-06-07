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

    const toggleVisibillity = () => {
      wrapper.classList.toggle('hide')
    }

    close.addEventListener('click', toggleVisibillity)
    open.addEventListener('click', toggleVisibillity)

    wrapper.classList.add('loggerWrapper')
    wrapper.classList.add('hide')
    inner.classList.add('loggerInner')
    close.classList.add('close')
    open.classList.add('open')

    close.textContent = 'X'
    open.textContent = 'OPEN LOG'

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

const logMessage = (message: string, variant: Variants) => {
  const { inner } = getElements()
  const messagaWrap = document.createElement('span')

  messagaWrap.textContent = message
  messagaWrap.classList.add('message')
  messagaWrap.classList.add(variant)
  inner.appendChild(messagaWrap)
}

export const overrideConsole = () => {
  if (!window.location.hostname.includes('local')) {
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
}
