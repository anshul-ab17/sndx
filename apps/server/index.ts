import { createApp } from "./app";
const PORT =Number(process.env.port) || 3001;

const app =createApp();
app.listen(PORT);
