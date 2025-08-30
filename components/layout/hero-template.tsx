import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface HeroTemplateProps {
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  backgroundImage?: string
  overlay?: boolean
  textAlign?: "left" | "center" | "right"
  children?: ReactNode
}

export function HeroTemplate({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  overlay = true,
  textAlign = "center",
  children,
}: HeroTemplateProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  const backgroundStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}

  return (
    <section
      className={`
        relative py-16 sm:py-20 lg:py-24 
        ${backgroundImage ? "bg-cover bg-center bg-no-repeat" : "bg-brand-golden/5"}
      `}
      style={backgroundStyle}
    >
      {backgroundImage && overlay && <div className="absolute inset-0 bg-black/40" />}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-4xl ${textAlign === "center" ? "mx-auto" : ""} ${alignmentClasses[textAlign]}`}>
          {subtitle && (
            <p className="text-brand-golden font-medium text-sm sm:text-base mb-4 tracking-wide uppercase">
              {subtitle}
            </p>
          )}

          <h1
            className={`
            text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 
            ${backgroundImage ? "text-white" : "text-brand-navy"}
            text-balance leading-tight
          `}
          >
            {title}
          </h1>

          {description && (
            <p
              className={`
              text-lg sm:text-xl mb-8 leading-relaxed
              ${backgroundImage ? "text-slate-200" : "text-brand-navy-deep"}
              text-pretty
            `}
            >
              {description}
            </p>
          )}

          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              {ctaText && ctaLink && (
                <Link href={ctaLink}>
                  <Button
                    size="lg"
                    className="bg-brand-navy hover:bg-brand-navy-deep text-white font-medium min-h-[48px] px-8 text-base w-full sm:w-auto"
                  >
                    {ctaText}
                  </Button>
                </Link>
              )}

              {secondaryCtaText && secondaryCtaLink && (
                <Link href={secondaryCtaLink}>
                  <Button
                    variant="outline"
                    size="lg"
                    className={`
                      font-medium min-h-[48px] px-8 text-base w-full sm:w-auto
                      ${
                        backgroundImage
                          ? "border-white text-white hover:bg-white hover:text-brand-navy"
                          : "border-brand-navy/30 text-brand-navy-deep hover:bg-brand-golden/5"
                      }
                    `}
                  >
                    {secondaryCtaText}
                  </Button>
                </Link>
              )}
            </div>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  )
}

export default HeroTemplate
