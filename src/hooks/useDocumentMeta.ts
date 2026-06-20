import { useEffect } from 'react'

type MetaInput = {
  title: string
  description: string
  canonical: string
  themeColor: string
}

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(
    selector,
  )

  if (!element) {
    const tag = selector.startsWith('link') ? 'link' : 'meta'
    element = document.createElement(tag) as HTMLMetaElement | HTMLLinkElement
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value)
  })
}

export function useDocumentMeta({
  title,
  description,
  canonical,
  themeColor,
}: MetaInput) {
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', {
      name: 'description',
      content: description,
    })
    setMeta('meta[name="theme-color"]', {
      name: 'theme-color',
      content: themeColor,
    })
    setMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: title,
    })
    setMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    })
    setMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonical,
    })
    setMeta('meta[property="twitter:title"]', {
      property: 'twitter:title',
      content: title,
    })
    setMeta('meta[property="twitter:description"]', {
      property: 'twitter:description',
      content: description,
    })
    setMeta('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonical,
    })
  }, [canonical, description, themeColor, title])
}
