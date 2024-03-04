import type { NextApiRequest, NextApiResponse } from "next";
import {
  getAugmentStatsByGameVersion,
  getAugmentStatsLatestGameVersion,
} from "~/database/augmentStats";
import { type AugmentStats } from "~/types/augmentStats";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AugmentStats[]>,
) {
  const gameVersion = req.query.gameVersion;

  let augmentStats: AugmentStats[];
  if (typeof gameVersion === "string") {
    augmentStats = await getAugmentStatsByGameVersion({ gameVersion });
  } else {
    augmentStats = await getAugmentStatsLatestGameVersion();
  }

  res.status(200).json(augmentStats);
}
