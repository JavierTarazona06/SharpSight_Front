import { ThemeConfig } from "./theme.config"
import { NotificationProvider } from "./context/notification.context"
// const inter = Inter({ subsets: ['latin'] })
// import './globals.css'
// import { Inter } from 'next/font/google'

export const metadata = {
  title: 'DataStructures',
  description: 'Generated by Carlos Ivan Munoz',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <NotificationProvider>
        <ThemeConfig>
          <body >
            {children}
          </body>
        </ThemeConfig>
      </NotificationProvider>
    </html>
  )
}
