import { createApp } from "./app";
// import { startCacheCleanupCron } from "@repo/cron";

const PORT = Number(process.env.PORT) || 3001;
const app = createApp();

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    // startCacheCleanupCron();
});
