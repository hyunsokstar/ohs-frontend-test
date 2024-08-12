import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BasicMenu from './components/menus/BasicMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Your app description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <header className="bg-teal-400 p-5">
          <h1 className="text-2xl md:text-4xl">Header</h1>
        </header> */}
        <BasicMenu />
        <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
            {children}
          </main>
          <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40">
            <h1 className="text-2xl md:text-4xl">Sidebar</h1>
          </aside>
        </div>
      </body>
    </html>
  )
}