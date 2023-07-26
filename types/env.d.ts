declare namespace NodeJS {
  export interface ProcessEnv {
      NODE_ENV: 'development' | 'production',
      DATABASE_URL: string,
      NUXT_PUBLIC_APP_URL: string,
      NUXT_PUBLIC_API_BASE: string,
      NUXT_API_SECRET: string,
      AUTH_ORIGIN: string,
      AUTH_BASE: string,
      AUTH_SECRET: string,
  }
}