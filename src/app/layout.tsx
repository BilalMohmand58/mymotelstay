import '@/assets/scss/style.scss'
import { DEFAULT_PAGE_TITLE } from '@/context/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | My Stay Motel - Hospitality That Cares',
    default: DEFAULT_PAGE_TITLE,
  },
  description: 'Premium Bootstrap 5 Landing Page Template',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style suppressHydrationWarning>{}</style>
      </head>
      <body className={``}>{children}</body>
    </html>
  )
}
