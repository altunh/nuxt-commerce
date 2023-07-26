export const __prod__ = process.env.NODE_ENV === 'production'
export const __dev__ = !__prod__
export const __debug__ = false

export const __api_base__ = useRuntimeConfig().public.apiBase