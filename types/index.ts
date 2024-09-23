import { z } from "zod";

export const SubscriptionType = z.object({
  id: z.string(),
  title: z.string(),
  cost: z.number(),
  duration: z.number(),
  imageUrl: z.string().url().optional(),
});

export type Subscription = z.infer<typeof SubscriptionType>;
