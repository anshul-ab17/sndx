import { App } from "./app";

const PORT =Number(process.env.port) || 3001;
const app =App();

app.listen(PORT);
