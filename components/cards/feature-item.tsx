import type { LucideIcon } from "lucide-react"

interface FeatureItemProps {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureItem({ icon: Icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-brand-golden/10 rounded-full p-3 flex-shrink-0" aria-hidden="true">
        <Icon className="h-6 w-6 text-brand-golden" />
      </div>
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-brand-navy mb-2">{title}</h3>
        <p className="text-brand-navy-deep text-sm sm:text-base">{description}</p>
      </div>
    </div>
  )
}
