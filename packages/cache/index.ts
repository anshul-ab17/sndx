import { createClient } from "redis";

export const redis = createClient({
  url: process.env.REDIS_URL
});

redis.on("error", (err: Error) => {
  console.error("Redis error:", err);
});

await redis.connect();
