import express from "express";
import file from "./routes/file";
import note from "./routes/note";

export function createApp() {

    const app=express();
    app.use(express.json());

    app.get('/health', (_req,res) => res.send("OK"));
    app.use("/note",note);
    app.use("/file",file);

    return app;
}