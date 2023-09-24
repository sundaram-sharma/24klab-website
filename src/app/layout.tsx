import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: '24klab',
  description: 'a lab made for open source tech projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='main-container'>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
