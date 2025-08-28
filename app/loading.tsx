import { LoadingSpinner } from "@/components/loading-spinner"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <h2 className="text-xl font-semibold text-slate-900 mb-2">Loading Landmark Logix</h2>
        <p className="text-slate-600">Please wait while we prepare your experience...</p>
      </div>
    </div>
  )
}
