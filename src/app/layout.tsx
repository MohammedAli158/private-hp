import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700']
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '700', '900']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="font-sans bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  )
}