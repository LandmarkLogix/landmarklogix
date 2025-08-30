import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import type { ReactNode } from "react"

interface PageTemplateProps {
  children: ReactNode
  className?: string
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "7xl" | "full"
  paddingY?: "none" | "sm" | "md" | "lg" | "xl"
  backgroundColor?: "white" | "gray" | "slate"
}

export function PageTemplate({
  children,
  className = "",
  maxWidth = "7xl",
  paddingY = "lg",
  backgroundColor = "white",
}: PageTemplateProps) {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "7xl": "max-w-7xl",
    full: "max-w-full",
  }

  const paddingClasses = {
    none: "",
    sm: "py-4 sm:py-6",
    md: "py-6 sm:py-8",
    lg: "py-8 sm:py-12",
    xl: "py-12 sm:py-16",
  }

  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-brand-golden/5",
    slate: "bg-brand-golden/5",
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className={`flex-1 ${backgroundClasses[backgroundColor]} ${className}`} role="main" id="main-content">
        <div className={`${maxWidthClasses[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 ${paddingClasses[paddingY]}`}>
          {children}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PageTemplate
