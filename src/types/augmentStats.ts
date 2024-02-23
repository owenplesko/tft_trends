import { z } from "zod";
import { AugmentIdSchema } from "./augmentData";

export const AugmentStatsSchema = z.object({
  augment_id: AugmentIdSchema,
  avg_placement: z.coerce.number().nullable(),
  frequency: z.coerce.number(),
  pick_1_avg_placement: z.coerce.number().nullable(),
  pick_1_frequency: z.coerce.number(),
  pick_2_avg_placement: z.coerce.number().nullable(),
  pick_2_frequency: z.coerce.number(),
  pick_3_avg_placement: z.coerce.number().nullable(),
  pick_3_frequency: z.coerce.number(),
});

export type AugmentStats = z.infer<typeof AugmentStatsSchema>;
