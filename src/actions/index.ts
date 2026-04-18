import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { env } from "cloudflare:workers";

export const server = {
  subscribe: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
    }),
    handler: async (input, context) => {
      const db = env.DB;
      try {
        await db
          .prepare(
            "INSERT INTO newsletter_subscriptions (email) VALUES (?) ON CONFLICT(email) DO NOTHING"
          )
          .bind(input.email)
          .run();
        return { success: true, message: "Subscribed successfully!" };
      } catch (error) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to subscribe to newsletter.",
        });
      }
    },
  }),

  requestQuote: defineAction({
    accept: "form",
    input: z.object({
      "org-name": z.string().min(1),
      "org-type": z.string(),
      "contact-name": z.string().min(1),
      email: z.string().email(),
      phone: z.string().min(1),
      "group-size": z.string(),
      "preferred-dates": z.string().optional(),
      duration: z.string(),
      accommodation: z.string(),
      "special-needs": z.string().optional(),
      dietary: z.string().optional(),
      language: z.string(),
      interests: z.union([z.string(), z.array(z.string())]).optional(),
      "budget-range": z.string().optional(),
      comments: z.string().optional(),
      newsletter: z.string().optional(),
    }),
    handler: async (input, context) => {
      const db = env.DB;
      try {
        const interests = Array.isArray(input.interests)
          ? input.interests
          : [input.interests].filter(Boolean);

        await db
          .prepare(
            `
          INSERT INTO bookings (
            form_type, org_name, org_type, contact_name, email, phone, 
            group_size, preferred_dates, duration, accommodation, 
            language, interests, special_requirements, dietary_restrictions, 
            budget_range, additional_notes, newsletter_opt_in
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `
          )
          .bind(
            "standard",
            input["org-name"],
            input["org-type"],
            input["contact-name"],
            input.email,
            input.phone,
            input["group-size"],
            input["preferred-dates"],
            input.duration,
            input.accommodation,
            input.language,
            JSON.stringify(interests),
            input["special-needs"],
            input.dietary,
            input["budget-range"],
            input.comments,
            input.newsletter ? 1 : 0
          )
          .run();

        return { success: true };
      } catch (error) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to process booking request.",
        });
      }
    },
  }),

  requestCustomQuote: defineAction({
    accept: "form",
    input: z.object({
      "experience-focus": z.union([z.string(), z.array(z.string())]).optional(),
      "duration-options": z.string().optional(),
      "activity-level": z.string().optional(),
      accommodation: z.string().optional().default(""),
      "org-name": z.string().min(1),
      "org-type": z.string().min(1),
      "contact-name": z.string().min(1),
      email: z.string().email(),
      phone: z.string().min(1),
      "group-size": z.string().min(1),
      "preferred-dates": z.string().optional(),
      "trip-duration": z.string().min(1),
      "trip-preferences": z.union([z.string(), z.array(z.string())]).optional(),
      "special-requirements": z.string().optional(),
      language: z.string().min(1),
      "other-notes": z.string().optional(),
    }),
    handler: async (input, context) => {
      console.log(input);
      const db = env.DB;
      try {
        const focus = Array.isArray(input["experience-focus"])
          ? input["experience-focus"]
          : [input["experience-focus"]].filter(Boolean);
        const prefs = Array.isArray(input["trip-preferences"])
          ? input["trip-preferences"]
          : [input["trip-preferences"]].filter(Boolean);
        const combinedInterests = JSON.stringify(
          [...focus, ...prefs, input["activity-level"], input["duration-options"]].filter(Boolean)
        );

        await db
          .prepare(
            `
          INSERT INTO bookings (
            form_type, org_name, org_type, contact_name, email, phone, 
            group_size, preferred_dates, duration, accommodation, 
            language, interests, special_requirements, additional_notes
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `
          )
          .bind(
            "custom",
            input["org-name"],
            input["org-type"],
            input["contact-name"],
            input.email,
            input.phone,
            input["group-size"],
            input["preferred-dates"],
            input["trip-duration"],
            input.accommodation,
            input.language,
            combinedInterests,
            input["special-requirements"],
            input["other-notes"]
          )
          .run();
        return { success: true };
      } catch (error) {
        console.log(error);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to process custom quote request.",
        });
      }
    },
  }),
};
