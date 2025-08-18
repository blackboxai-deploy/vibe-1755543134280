import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo List App',
  description: 'A modern, responsive todo list application built with Next.js',
  keywords: ['todo', 'task', 'productivity', 'organizer'],
  authors: [{ name: 'Todo App' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50 min-h-screen`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white shadow-sm border-b">
            <div className="max-w-4xl mx-auto px-4 py-6">
              <h1 className="text-3xl font-bold text-gray-900">Todo List</h1>
              <p className="text-gray-600 mt-1">Stay organized and productive</p>
            </div>
          </header>
          <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8">
            {children}
          </main>
          <footer className="bg-white border-t mt-auto">
            <div className="max-w-4xl mx-auto px-4 py-4 text-center text-gray-500 text-sm">
              Built with Next.js, TypeScript, and Tailwind CSS
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}