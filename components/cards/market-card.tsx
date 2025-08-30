import { ImageWithFallback } from "@/components/image-with-fallback"

interface MarketCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
}

export function MarketCard({ imageSrc, imageAlt, title, description }: MarketCardProps) {
  return (
    <article className="bg-white rounded-lg p-6 sm:p-8 shadow-sm border border-slate-200 hover:border-brand-golden/30 transition-colors h-full">
      <ImageWithFallback
        src={imageSrc || "/placeholder.svg"}
        alt={imageAlt}
        width={300}
        height={200}
        className="rounded-lg mb-4 sm:mb-6 w-full object-cover aspect-[3/2]"
      />
      <h3 className="text-lg sm:text-xl font-semibold text-brand-navy mb-2 sm:mb-3">{title}</h3>
      <p className="text-brand-navy-deep text-sm sm:text-base">{description}</p>
    </article>
  )
}
