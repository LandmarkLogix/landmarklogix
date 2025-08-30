import { MarketCard } from "@/components/cards/market-card"

const markets = [
  {
    imageSrc: "/professional-stadium-interior-with-modern-seating-.png",
    imageAlt:
      "Professional stadium interior showcasing modern seating, advanced lighting systems, and sports facility expertise",
    title: "Sports & Athletics",
    description:
      "Stadiums, arenas, training facilities, and sports complexes requiring expert coordination of fan experience, safety systems, and operational efficiency.",
  },
  {
    imageSrc: "/concert-hall-architecture-with-advanced-acoustics-.png",
    imageAlt:
      "Concert hall and theater architecture featuring advanced acoustics, stage lighting, and patron experience design",
    title: "Entertainment & Leisure",
    description:
      "Theaters, concert venues, entertainment complexes, and recreational facilities emphasizing patron experience and complex technical systems integration.",
  },
  {
    imageSrc: "/luxury-hotel-construction-with-modern-lobby-and-ho.png",
    imageAlt:
      "Luxury hotel construction showcasing modern lobby design, hospitality architecture, and guest experience optimization",
    title: "Hospitality & Tourism",
    description:
      "Hotels, resorts, conference centers, and destination facilities optimizing guest experience, operational efficiency, and revenue potential.",
  },
  {
    imageSrc: "/modern-museum-architecture-with-contemporary-galle.png",
    imageAlt:
      "Modern museum architecture featuring contemporary gallery spaces balancing heritage preservation with innovative design",
    title: "Cultural & Arts",
    description:
      "Museums, galleries, performing arts centers, and cultural institutions balancing heritage preservation with modern functionality.",
  },
  {
    imageSrc: "/university-construction-with-modern-campus-buildin.png",
    imageAlt: "University campus construction featuring modern academic buildings and innovative learning environments",
    title: "Education & Research",
    description:
      "Universities, schools, laboratories, and learning facilities creating inspiring environments that support academic and research excellence.",
  },
  {
    imageSrc: "/commercial-construction-with-modern-office-buildin.png",
    imageAlt: "Commercial office building construction featuring modern glass facade and efficient workspace design",
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
