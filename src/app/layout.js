import './globals.css'


export const metadata = {
  title: 'EduCoders',
  description: 'Revolutionary way of Learning',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
