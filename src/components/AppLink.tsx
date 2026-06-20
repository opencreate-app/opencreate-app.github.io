import type { AnchorHTMLAttributes, MouseEvent } from 'react'

type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export function AppLink({
  href,
  onClick,
  children,
  ...rest
}: AppLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)

    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      rest.target === '_blank'
    ) {
      return
    }

    if (href.startsWith('http')) {
      return
    }

    event.preventDefault()
    window.history.pushState({}, '', href)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
