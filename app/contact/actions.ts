"use server"

import { z } from "zod"

export type ContactFormState = {
  status: "idle" | "success" | "error"
  message?: string
  fieldErrors?: Record<string, string[]>
}

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .optional()
    .transform((value) => value ?? ""),
  company: z
    .string()
    .trim()
    .optional()
    .transform((value) => value ?? ""),
  projectType: z.string().optional().transform((value) => value ?? ""),
  budgetRange: z.string().optional().transform((value) => value ?? ""),
  projectPhase: z.string().optional().transform((value) => value ?? ""),
  timeline: z.string().optional().transform((value) => value ?? ""),
  description: z
    .string()
    .optional()
    .transform((value) => (value ?? "").trim()),
})

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const submission = {
    name: formData.get("name")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    phone: formData.get("phone")?.toString(),
    company: formData.get("company")?.toString(),
    projectType: formData.get("projectType")?.toString(),
    budgetRange: formData.get("budgetRange")?.toString(),
    projectPhase: formData.get("projectPhase")?.toString(),
    timeline: formData.get("timeline")?.toString(),
    description: formData.get("description")?.toString(),
  }

  const parsed = contactSchema.safeParse(submission)

  if (!parsed.success) {
    const { fieldErrors } = parsed.error.flatten()

    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
    }
  }

  const data = parsed.data

  console.info("[contact] New inquiry received", {
    ...data,
    descriptionPreview: data.description?.slice(0, 160),
  })

  await new Promise((resolve) => setTimeout(resolve, 350))

  return {
    status: "success",
    message:
      "Thank you! Your consultation request has been received. We'll reach out within one business day.",
  }
}

