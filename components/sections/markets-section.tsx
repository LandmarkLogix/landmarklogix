import { MarketCard } from "@/components/cards/market-card"

const markets = [
  {
    imageSrc: "/placeholder.svg?height=200&width=300&text=Museum+building+with+classical+columns",
    imageAlt:
      "Museum building featuring classical columns and grand entrance, showcasing cultural architecture expertise",
    title: "Museums & Cultural Centers",
    description: "Preserving and presenting culture through thoughtfully designed spaces that inspire and educate.",
  },
  {
    imageSrc: "/placeholder.svg?height=200&width=300&text=Civic+building+with+government+architecture",
    imageAlt:
      "Civic government building with formal architecture representing democratic institutions and public service",
    title: "Civic Buildings",
    description:
      "Government facilities that embody democratic values and serve communities with dignity and accessibility.",
  },
  {
    imageSrc: "/placeholder.svg?height=200&width=300&text=Historic+building+renovation+with+scaffolding",
    imageAlt:
      "Historic building under renovation with scaffolding, demonstrating preservation and restoration expertise",
    title: "Historic Renovations",
    description:
      "Breathing new life into historic structures while preserving their architectural integrity and heritage.",
  },
  {
    imageSrc: "/placeholder.svg?height=200&width=300&text=Educational+institution+campus+building",
    imageAlt:
      "Educational institution campus building with modern academic architecture fostering learning environments",
    title: "Educational Institutions",
    description: "Learning environments that inspire academic excellence and foster community engagement.",
  },
  {
    imageSrc: "/placeholder.svg?height=200&width=300&text=Religious+building+with+traditional+architecture",
    imageAlt: "Religious building with traditional sacred architecture serving faith communities",
    title: "Religious Buildings",
    description: "Sacred spaces that honor tradition while meeting the evolving needs of faith communities.",
  },
  {
    imageSrc: "/placeholder.svg?height=200&width=300&text=Public+facility+community+center",
    imageAlt: "Public facility community center designed for diverse populations and social engagement",
    title: "Public Facilities",
    description: "Community-centered buildings that serve diverse populations and strengthen social bonds.",
  },
]

export function MarketsSection() {
  return (
    <section id="markets" className="py-16 sm:py-20 bg-slate-50" aria-labelledby="markets-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="markets-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00205B] mb-4 text-balance"
          >
            Our Landmark Markets
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
            We focus exclusively on public-facing buildings that serve as community anchors and architectural treasures
            for generations to come.
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
