import type { Metadata } from 'next'
import { SiteProvider } from '@/context/SiteContext'
import Sidebar from '@/components/Sidebar'
import Modal from '@/components/Modal'
import DarkBgc from '@/components/DarkBgc'
import WowInit from '@/components/WowInit'
import '../sass/style.sass'

export const metadata: Metadata = {
  metadataBase: new URL('https://capitalbuh.kz'),
  title: 'Бухгалтерские услуги для ИП и ТОО | CapitalBuh.kz',
  description: 'Профессиональные бухгалтерские услуги для ИП и ТОО: ведение учета, сдача отчетности, СНТ, НДС, регистрация бизнеса. Опыт более 25 лет.',
  keywords: 'бухгалтерские услуги, бухгалтер ИП, бухгалтер ТОО, сдача отчетности, форма 910, СНТ, НДС, регистрация ИП',
  authors: [{ name: 'CapitalBuh.kz' }],
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://capitalbuh.kz/',
  },
  openGraph: {
    title: 'Бухгалтерские услуги для ИП и ТОО | CapitalBuh.kz',
    description: 'Профессиональные бухгалтерские услуги для ИП и ТОО: ведение учета, сдача отчетности, СНТ, НДС, регистрация бизнеса. Опыт более 25 лет.',
    images: [
      {
        url: '/img/CapitalBuh.png',
        alt: 'CapitalBuh — Бухгалтерские услуги для ИП и ТОО в Казахстане',
      },
    ],
    type: 'website',
    url: 'https://capitalbuh.kz/',
    siteName: 'CapitalBuh.kz',
    locale: 'ru_KZ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Бухгалтерские услуги для ИП и ТОО | CapitalBuh.kz',
    description: 'Профессиональные бухгалтерские услуги для ИП и ТОО: ведение учета, сдача отчетности, СНТ, НДС, регистрация бизнеса. Опыт более 25 лет.',
    images: ['/img/CapitalBuh.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: 'CapitalBuh.kz',
  description: 'Профессиональные бухгалтерские и налоговые услуги для ИП и ТОО в Казахстане. Ведение учета, сдача отчетности, СНТ, НДС, регистрация бизнеса. Опыт более 25 лет.',
  url: 'https://capitalbuh.kz/',
  telephone: '+77071202377',
  image: 'https://capitalbuh.kz/img/CapitalBuh.png',
  areaServed: {
    '@type': 'Country',
    name: 'KZ',
  },
  provider: {
    '@type': 'Organization',
    name: 'CapitalBuh',
    url: 'https://capitalbuh.kz/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="stylesheet" href="/css/animate.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SiteProvider>
          {children}
          <Sidebar />
          <Modal />
          <DarkBgc />
          <WowInit />
        </SiteProvider>
      </body>
    </html>
  )
}
