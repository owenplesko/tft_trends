import { Pool } from "pg";
import { env } from "~/env";

const pool = new Pool({
  connectionString: env.DB_CONNECTION,
});

export default pool;
