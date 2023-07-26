import { appendResponseHeader, H3Event } from "h3"

export const getToken = async () => {
  const headers = useRequestHeaders(['cookie'])
  const { data: token } = await $fetch('/api/auth/token', {
    method: "GET",
    headers,
  })
  return token
}

export const fetchWithCookie = async (event: H3Event, url: string) => {
  const res = await $fetch.raw(url)
  const cookies = (res.headers.get('set-cookie') || '').split(',')
  for (const cookie of cookies) {
    appendResponseHeader(event, 'set-cookie', cookie)
  }
  return res._data
}