export const metadata = {
  title: 'Finhisab',
  description: 'Finhisab – Personal Finance Tracker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
