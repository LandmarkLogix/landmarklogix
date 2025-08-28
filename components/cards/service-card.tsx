import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="border-slate-200 hover:shadow-lg transition-shadow hover:border-[#C5B783]/30 h-full">
      <CardHeader className="p-6">
        <div className="h-12 w-12 bg-[#C5B783]/10 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
          <Icon className="h-6 w-6 text-[#C5B783]" />
        </div>
        <CardTitle className="text-[#00205B] text-lg sm:text-xl">{title}</CardTitle>
        <CardDescription className="text-sm sm:text-base">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
