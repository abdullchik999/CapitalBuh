'use client'

import Script from 'next/script'

export default function WowInit() {
  return (
    <Script
      src="/js/wow.min.js"
      onLoad={() => {
        new (window as any).WOW({ animateClass: 'animate__animated' }).init()
      }}
    />
  )
}
