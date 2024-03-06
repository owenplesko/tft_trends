import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { getAugmentStats } from "~/database/augmentStats";
import { type AugmentStats } from "~/types/augmentStats";

const querySchema = z.object({
  gameVersion: z.string(),
  minTier: z.string(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AugmentStats[]>,
) {
  const { gameVersion, minTier } = querySchema.parse(req.query);
  const augmentStats = await getAugmentStats({ gameVersion, minTier });
  res.status(200).json(augmentStats);
}
