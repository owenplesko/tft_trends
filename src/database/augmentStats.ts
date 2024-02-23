import { Pool } from "pg";
import { env } from "~/env";
import { AugmentStatsSchema } from "~/types/augmentStats";

export const getAugmentStats = async () => {
  const pool = new Pool({
    connectionString: env.DB_CONNECTION,
  });

  const sqlQuery = `
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
    GROUP BY augment_id
  `;

  const client = await pool.connect();
  const queryResult = await client.query(sqlQuery);

  const augmentStats = AugmentStatsSchema.array().parse(queryResult.rows);

  client.release();

  return augmentStats;
};
