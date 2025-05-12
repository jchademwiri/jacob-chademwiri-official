import type { ReactNode } from "react"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { ScrollToTop } from "./scroll-to-top"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
