import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

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
