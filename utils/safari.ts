import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers'

export function isSafariMobile(headers: ReadonlyHeaders) {
  const userAgent = headers.get('user-agent')
  return !!(userAgent && /Safari/i.test(userAgent) && /Mobile/i.test(userAgent))
}
