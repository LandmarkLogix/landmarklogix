"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[v0] Global error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-red-50 rounded-full p-6 mx-auto mb-8 w-fit">
          <AlertTriangle className="h-12 w-12 text-red-500" />
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-4">Oops! Something went wrong</h1>

        <p className="text-slate-600 mb-8 leading-relaxed">
          We encountered an unexpected error while loading this page. This could be a temporary issue with our servers
          or a network problem.
        </p>

        <div className="space-y-4">
          <Button onClick={reset} className="bg-[#00205B] hover:bg-[#000034] text-white w-full" size="lg">
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
          </Button>

          <Link href="/" className="block">
            <Button variant="outline" className="w-full bg-transparent" size="lg">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Button>
          </Link>
        </div>

        <p className="text-sm text-slate-500 mt-8">If this problem persists, please contact our support team.</p>
      </div>
    </div>
  )
}
