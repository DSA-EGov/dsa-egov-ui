/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WS_URL: string
  readonly VITE_API_URL: string
  readonly VITE_G_CLIENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
