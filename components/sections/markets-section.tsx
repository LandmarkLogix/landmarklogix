import { MarketCard } from "@/components/cards/market-card"

const markets = [
  {
    imageSrc: "/placeholder.svg?height=200&width=300&text=Stadium+construction+with+modern+architecture",
    imageAlt: "Modern stadium under construction showcasing complex steel framework and sports facility expertise",
    title: "Sports & Athletics",
    description:
      "Stadiums, arenas, training facilities, and sports complexes requiring expert coordination of fan experience, safety systems, and operational efficiency.",
  },
  {
    imageSrc: "/placeholder.svg?height=200&width=300&text=Entertainment+venue+theater+construction",
    imageAlt:
      "Entertainment venue and theater construction with advanced technical systems and patron experience design",
    title: "Entertainment & Leisure",
    description:
      "Theaters, concert venues, entertainment complexes, and recreational facilities emphasizing patron experience and complex technical systems integration.",
  },
  {
    imageSrc: "/placeholder.svg?height=200&width=300&text=Hotel+resort+construction+hospitality",
    imageAlt:
      "Hotel and resort construction showcasing hospitality design focused on guest experience and operational efficiency",
    title: "Hospitality & Tourism",
    description:
      "Hotels, resorts, conference centers, and destination facilities optimizing guest experience, operational efficiency, and revenue potential.",
  },
  {
    imageSrc: "/placeholder.svg?height=200&width=300&text=Museum+cultural+center+modern+design",
    imageAlt:
      "Museum and cultural center with modern design balancing heritage preservation with contemporary functionality",
    title: "Cultural & Arts",
    description:
      "Museums, galleries, performing arts centers, and cultural institutions balancing heritage preservation with modern functionality.",
  },
  {
    imageSrc: "/placeholder.svg?height=200&width=300&text=University+campus+educational+facility",
    imageAlt: "University campus and educational facility construction creating inspiring learning environments",
    title: "Education & Research",
    description:
      "Universities, schools, laboratories, and learning facilities creating inspiring environments that support academic and research excellence.",
  },
  {
    imageSrc: "/placeholder.svg?height=200&width=300&text=Corporate+office+commercial+building",
    imageAlt: "Corporate office and commercial building construction focused on efficiency and tenant satisfaction",
    title: "Corporate & Commercial",
    description:
      "Office buildings, retail spaces, mixed-use developments focused on maximizing ROI, efficiency, and tenant satisfaction.",
  },
]

export function MarketsSection() {
  return (
    <section id="markets" className="py-16 sm:py-20 bg-slate-50" aria-labelledby="markets-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="markets-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy mb-4 text-balance"
          >
            Our Specialized Markets
          </h2>
          <p className="text-lg sm:text-xl text-brand-navy-deep max-w-3xl mx-auto text-pretty">
            We excel in complex construction projects that require expert coordination, stakeholder alignment, and
            operational excellence across diverse commercial sectors.
          </p>
        </div>

        <ul className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {markets.map((market, index) => (
            <li key={index}>
              <MarketCard
                imageSrc={market.imageSrc}
                imageAlt={market.imageAlt}
                title={market.title}
                description={market.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
