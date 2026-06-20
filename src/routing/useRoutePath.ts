export type RoutePath = '/' | '/forge' | 'not-found'

export function normalizeRoutePath(pathname: string): RoutePath {
  const normalized = pathname.replace(/\/+/g, '/')
  const stripped = normalized.replace(/\/+$/, '')

  if (normalized.endsWith('/forge')) {
    return '/forge'
  }

  if (stripped === '' || stripped === '/' || stripped === '/index.html' || stripped === '/404.html') {
    return '/'
  }

  const segments = stripped.split('/').filter(Boolean)

  if (segments.length === 1) {
    return '/'
  }

  return 'not-found'
}
