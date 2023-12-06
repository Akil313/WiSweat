import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import Header from './components/Header'
import Footer from './components/Footer'
import { UserProvider } from 'contexts/UserContext'
import AuthProvider from 'contexts/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` min-h-screen bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-50 ${inter.className}`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <AuthProvider>
            <Header />
            <div className='max-w-6xl mx-auto py-10 px-4'>
              <main>
                {children}
              </main>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
        UserProvider</body>
    </html>
  )
}
