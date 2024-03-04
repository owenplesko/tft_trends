import { AugmentStatsSchema } from "~/types/augmentStats";
import pool from "./db";
import { z } from "zod";

const gameVersionsSchema = z.object({ game_version: z.string() }).array();

export const getAugmentStatGameVersions = async () => {
  const query = `
    SELECT DISTINCT game_version 
    FROM tft_augment_stats 
    ORDER BY game_version DESC
  `;

  const res = await pool.query(query);

  const gameVersions = gameVersionsSchema
    .parse(res.rows)
    .map(({ game_version }) => game_version);

  return gameVersions;
};

export const getAugmentStatsLatestGameVersion = async () => {
  const query = `
    SELECT
      augment_id,
      CASE 
        WHEN SUM(frequency) = 0 THEN NULL 
        ELSE CAST(SUM(total_placement) AS DECIMAL) / SUM(frequency) 
      END AS avg_placement,
      SUM(frequency) AS frequency,
      CASE 
        WHEN SUM(pick_1_frequency) = 0 THEN NULL 
        ELSE CAST(SUM(pick_1_total_placement) AS DECIMAL) / SUM(pick_1_frequency) 
      END AS pick_1_avg_placement,
      SUM(pick_1_frequency) AS pick_1_frequency,
      CASE 
        WHEN SUM(pick_2_frequency) = 0 THEN NULL 
        ELSE CAST(SUM(pick_2_total_placement) AS DECIMAL) / SUM(pick_2_frequency) 
      END AS pick_2_avg_placement,
      SUM(pick_2_frequency) AS pick_2_frequency,
      CASE 
        WHEN SUM(pick_3_frequency) = 0 THEN NULL 
        ELSE CAST(SUM(pick_3_total_placement) AS DECIMAL) / SUM(pick_3_frequency) 
      END AS pick_3_avg_placement,
      SUM(pick_3_frequency) AS pick_3_frequency
    FROM tft_augment_stats
    WHERE game_version = (
      SELECT MAX(game_version)
      FROM tft_augment_stats
    )
    GROUP BY augment_id
  `;

  const res = await pool.query(query);

  const augmentStats = AugmentStatsSchema.array().parse(res.rows);

  return augmentStats;
};

export const getAugmentStatsByGameVersion = async ({
  gameVersion,
}: {
  gameVersion: string;
}) => {
  const query = `
    SELECT
      augment_id,
      CASE 
        WHEN SUM(frequency) = 0 THEN NULL 
        ELSE CAST(SUM(total_placement) AS DECIMAL) / SUM(frequency) 
      END AS avg_placement,
      SUM(frequency) AS frequency,
      CASE 
        WHEN SUM(pick_1_frequency) = 0 THEN NULL 
        ELSE CAST(SUM(pick_1_total_placement) AS DECIMAL) / SUM(pick_1_frequency) 
      END AS pick_1_avg_placement,
      SUM(pick_1_frequency) AS pick_1_frequency,
      CASE 
        WHEN SUM(pick_2_frequency) = 0 THEN NULL 
        ELSE CAST(SUM(pick_2_total_placement) AS DECIMAL) / SUM(pick_2_frequency) 
      END AS pick_2_avg_placement,
      SUM(pick_2_frequency) AS pick_2_frequency,
      CASE 
        WHEN SUM(pick_3_frequency) = 0 THEN NULL 
        ELSE CAST(SUM(pick_3_total_placement) AS DECIMAL) / SUM(pick_3_frequency) 
      END AS pick_3_avg_placement,
      SUM(pick_3_frequency) AS pick_3_frequency
    FROM tft_augment_stats
    WHERE game_version = $1
    GROUP BY augment_id
  `;

  const res = await pool.query(query, [gameVersion]);

  const augmentStats = AugmentStatsSchema.array().parse(res.rows);

  return augmentStats;
};
