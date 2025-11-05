import { z } from "zod";

export const testimonialSchema = z.object({
  quote: z.string().min(1, "Quote is required"),
  company: z.string().min(1, "Company is required"),
  industry: z.string().min(1, "Industry is required"),
});

export const benefitSchema = z.object({
  title: z.string(),
  description: z.string(),
  percentage: z.number(),
});

export const statsDataSchema = z.object({
  kpi: z.object({
    conversionGrowth: z.number(),
    revenueGrowth: z.number(),
    trustIncrease: z.number(),
  }),
  chartData: z.array(z.object({
    name: z.string(),
    value: z.number(),
  })),
  clients: z.number(),
  benefits: z.array(benefitSchema),
  testimonials: z.array(testimonialSchema),
  contact: z.object({
    email: z.string(),
    phone: z.string(),
    address: z.string(),
  }).optional(),
  footer: z.object({
    about: z.string(),
    services: z.array(z.string()),
    resources: z.array(z.string()),
  }).optional(),
});

export type Testimonial = z.infer<typeof testimonialSchema>;
export type StatsData = z.infer<typeof statsDataSchema>;
