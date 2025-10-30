"use client"

import { startTransition, useEffect, useMemo, useRef, useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { AlertCircle, ArrowRight, CheckCircle, Loader2 } from "lucide-react"

import { submitContactForm, type ContactFormState } from "@/app/contact/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const initialState: ContactFormState = {
  status: "idle",
}

const projectTypes = [
  { value: "sports", label: "Sports & Athletics Facility" },
  { value: "entertainment", label: "Entertainment & Leisure Venue" },
  { value: "hospitality", label: "Hospitality & Tourism Development" },
  { value: "cultural", label: "Cultural & Arts Institution" },
  { value: "education", label: "Education & Research Facility" },
  { value: "corporate", label: "Corporate & Commercial Building" },
  { value: "mixed-use", label: "Mixed-Use Development" },
  { value: "other", label: "Other Complex Project" },
]

const budgetRanges = [
  { value: "10-25m", label: "$10M - $25M" },
  { value: "25-50m", label: "$25M - $50M" },
  { value: "50-100m", label: "$50M - $100M" },
  { value: "100m-plus", label: "$100M+" },
  { value: "tbd", label: "To Be Determined" },
]

const projectPhases = [
  { value: "planning", label: "Planning / Feasibility Stage" },
  { value: "design", label: "Design Phase" },
  { value: "pre-construction", label: "Pre-Construction" },
  { value: "construction", label: "Construction Started" },
  { value: "other", label: "Other / Not Sure" },
]

const projectTimelines = [
  { value: "immediate", label: "Immediate (within 30 days)" },
  { value: "1-6-months", label: "1-6 months" },
  { value: "6-12-months", label: "6-12 months" },
  { value: "12-plus-months", label: "12+ months" },
  { value: "multi-year", label: "Multi-year development" },
  { value: "exploring", label: "Just exploring options" },
]

function FormMessage({ state }: { state: ContactFormState }) {
  if (state.status === "idle") {
    return null
  }

  const isSuccess = state.status === "success"

  return (
    <div
      role="status"
      className={`flex items-start gap-3 rounded-md border px-3 py-2 text-sm ${
        isSuccess
          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
          : "border-amber-200 bg-amber-50 text-amber-800"
      }`}
    >
      {isSuccess ? (
        <CheckCircle className="mt-0.5 h-4 w-4" aria-hidden="true" />
      ) : (
        <AlertCircle className="mt-0.5 h-4 w-4" aria-hidden="true" />
      )}
      <span>{state.message}</span>
    </div>
  )
}

function FieldError({ error }: { error?: string[] }) {
  if (!error || error.length === 0) {
    return null
  }

  return (
    <p className="mt-1 text-sm text-red-600" role="alert">
      {error[0]}
    </p>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      className="w-full bg-[#C5B783] hover:bg-[#B5A67B] text-[#00205B] font-semibold text-lg py-3"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
          Sending...
        </>
      ) : (
        <>
          Schedule Project Consultation
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </>
      )}
    </Button>
  )
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [projectType, setProjectType] = useState("")
  const [budgetRange, setBudgetRange] = useState("")
  const [projectPhase, setProjectPhase] = useState("")
  const [timeline, setTimeline] = useState("")

  const [state, formAction] = useFormState(submitContactForm, initialState)

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset()
      startTransition(() => {
        setProjectType("")
        setBudgetRange("")
        setProjectPhase("")
        setTimeline("")
      })
    }
  }, [state.status])

  const fieldErrors = useMemo(() => state.fieldErrors ?? {}, [state.fieldErrors])

  return (
    <form id="contact-form" ref={formRef} action={formAction} className="space-y-6" noValidate>
      <FormMessage state={state} />

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#00205B]" htmlFor="contact-name">
            Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="contact-name"
            name="name"
            placeholder="Your full name"
            required
            aria-invalid={fieldErrors.name ? "true" : "false"}
          />
          <FieldError error={fieldErrors.name} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-[#00205B]" htmlFor="contact-email">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            placeholder="your.email@organization.com"
            required
            aria-invalid={fieldErrors.email ? "true" : "false"}
          />
          <FieldError error={fieldErrors.email} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#00205B]" htmlFor="contact-phone">
            Phone Number
          </label>
          <Input id="contact-phone" name="phone" type="tel" placeholder="(555) 123-4567" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-[#00205B]" htmlFor="contact-company">
            Company / Organization
          </label>
          <Input id="contact-company" name="company" placeholder="Your organization name" />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#00205B]">Project Type</label>
          <Select value={projectType} onValueChange={setProjectType}>
            <SelectTrigger className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              {projectTypes.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="projectType" value={projectType} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-[#00205B]">Project Budget Range</label>
          <Select value={budgetRange} onValueChange={setBudgetRange}>
            <SelectTrigger className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgetRanges.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="budgetRange" value={budgetRange} />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#00205B]">Project Phase</label>
          <Select value={projectPhase} onValueChange={setProjectPhase}>
            <SelectTrigger className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]">
              <SelectValue placeholder="Select current phase" />
            </SelectTrigger>
            <SelectContent>
              {projectPhases.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="projectPhase" value={projectPhase} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-[#00205B]">Project Timeline</label>
          <Select value={timeline} onValueChange={setTimeline}>
            <SelectTrigger className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]">
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              {projectTimelines.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="timeline" value={timeline} />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-[#00205B]" htmlFor="contact-description">
          Project Description
        </label>
        <Textarea
          id="contact-description"
          name="description"
          rows={5}
          placeholder="Tell us about your project, key objectives, stakeholders, and challenges."
          className="border-slate-300 focus:border-[#C5B783] focus:ring-[#C5B783]"
        />
      </div>

      <SubmitButton />

      <p className="text-center text-sm text-slate-600">
        By submitting this form, you agree to be contacted by Landmark Logix regarding your project inquiry.
      </p>
    </form>
  )
}

