/// <reference types="vite/client" />

declare const APP_VERSION: string

interface ImportMetaEnv {
  readonly VITE_APP_IS_E2E: string
  readonly VITE_APP_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
