import type { ReactNode } from "react"

interface ContentSectionProps {
  children: ReactNode
  className?: string
  spacing?: "none" | "sm" | "md" | "lg" | "xl"
  background?: "transparent" | "white" | "gray" | "slate"
  border?: boolean
  shadow?: boolean
}

export function ContentSection({
  children,
  className = "",
  spacing = "md",
  background = "transparent",
  border = false,
  shadow = false,
}: ContentSectionProps) {
  const spacingClasses = {
    none: "",
    sm: "py-4 sm:py-6",
    md: "py-6 sm:py-8",
    lg: "py-8 sm:py-12",
    xl: "py-12 sm:py-16",
  }

  const backgroundClasses = {
    transparent: "",
    white: "bg-white",
    gray: "bg-brand-golden/5",
    slate: "bg-brand-golden/5",
  }

  const borderClass = border ? "border border-brand-golden/20 rounded-lg" : ""
  const shadowClass = shadow ? "shadow-sm" : ""

  return (
    <section
      className={`
        ${spacingClasses[spacing]} 
        ${backgroundClasses[background]} 
        ${borderClass} 
        ${shadowClass} 
        ${className}
      `.trim()}
    >
      {children}
    </section>
  )
}

export default ContentSection
