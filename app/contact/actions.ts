"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

const smtpHost = process.env.SMTP_HOST ?? "smtp.gmail.com"
const smtpPort = Number.parseInt(process.env.SMTP_PORT ?? "465", 10)
const smtpSecure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : smtpPort === 465
const smtpUser =
  process.env.SMTP_USER ?? process.env.GMAIL_USER ?? process.env.CONTACT_FROM_EMAIL ?? ""
const smtpPass = process.env.SMTP_PASS ?? process.env.GMAIL_APP_PASSWORD ?? ""

const defaultRecipient = (process.env.CONTACT_FORWARD_TO ?? "info@landmarklogix.com")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean)
const defaultFromAddress = process.env.CONTACT_FROM_EMAIL ?? (smtpUser || "info@landmarklogix.com")

let transporter: nodemailer.Transporter | null = null

function getTransporter() {
  if (!smtpUser || !smtpPass) {
    return null
  }

  if (!transporter) {
    try {
      transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })
    } catch (error) {
      console.error("[contact] Failed to initialize SMTP transporter", error)
      transporter = null
    }
  }

  return transporter
}


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

  const messageLines = [
    `New consultation request submitted on ${new Date().toLocaleString()}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.company ? `Company: ${data.company}` : null,
    data.projectType ? `Project type: ${data.projectType}` : null,
    data.budgetRange ? `Budget range: ${data.budgetRange}` : null,
    data.projectPhase ? `Project phase: ${data.projectPhase}` : null,
    data.timeline ? `Timeline: ${data.timeline}` : null,
    "",
    "Project description:",
    data.description || "(No additional details provided)",
  ].filter(Boolean)

  const recipientList = defaultRecipient.length > 0 ? defaultRecipient : ["info@landmarklogix.com"]

  const smtpTransporter = getTransporter()

  if (smtpTransporter) {
    try {
      await smtpTransporter.sendMail({
        from: `Landmark Logix Website <${defaultFromAddress}>`,
        to: recipientList,
        replyTo: data.email,
        subject: `New consultation request from ${data.name}`,
        text: messageLines.join("\n"),
      })
    } catch (error) {
      console.error("[contact] Failed to dispatch email notification", error)
      return {
        status: "error",
        message:
          "We received your request but couldn't notify the team automatically. Please reach out directly at info@landmarklogix.com while we resolve this.",
      }
    }
  } else {
    console.warn(
      "[contact] SMTP credentials not configured – submission stored in logs only. Set SMTP_USER/SMTP_PASS (or GMAIL_USER/GMAIL_APP_PASSWORD) to enable email notifications."
    )
  }

  await new Promise((resolve) => setTimeout(resolve, 150))

  return {
    status: "success",
    message:
      "Thank you! Your consultation request has been received. We'll reach out within one business day.",
  }
}

