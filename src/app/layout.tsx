import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shahul SHAIK — Senior IT Audit & AI Governance Expert',
  description:
    'Portfolio of Shahul SHAIK — CISA and AAIA-certified Senior IT Audit & AI Governance expert with 15-year career, 8+ years in IT Audit/GRC, and RNCP Level 7 AI/ML qualification.',
  keywords: [
    'IT Audit',
    'AI Governance',
    'AI Audit',
    'CISA',
    'AAIA',
    'ISACA',
    'SAP GRC',
    'EU AI Act',
    'Data Scientist',
    'Machine Learning',
    'LLM',
    'RAG',
  ],
  authors: [{ name: 'Shahul SHAIK' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Shahul SHAIK — Senior IT Audit & AI Governance Expert',
    description: 'CISA and AAIA-certified IT Audit & AI Governance expert — 15-year career, RNCP Level 7 AI/ML, 12 production projects.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Content-Security-Policy" content="frame-ancestors 'none'" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
