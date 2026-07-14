import type { Metadata } from "next"
import React from "react"
import "./globals.css"
import RumInit from "@/components/RumInit"

export const metadata: Metadata = {
  title: "Chris Bramley • Principal Test Engineer & Engineering Leader",
  description:
    "Strategic quality leadership, GenAI in testing, regulatory delivery, developer experience, and DORA-driven engineering maturity."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-slate-100 antialiased">
        <RumInit />
        {children}
      </body>
    </html>
  )
}
