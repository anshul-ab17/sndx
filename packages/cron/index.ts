import cron from "node-cron";
import { redis } from "@repo/cache";

export function startCacheCleanupCron() {
    cron.schedule("0 0 * * *", async () => {
        console.log("Clearing Redis cache...");
        await redis.flushAll();
        console.log("Cache cleared");
    });
}
