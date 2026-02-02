import express from "express";
import cors from "cors";
import file from "./routes/file";
import note from "./routes/note";

export function createApp() {

    const app=express();
    app.use(express.json());
    app.use(cors());

    app.get('/health', (_req,res) => res.send("OK"));
    app.use("/note",note);
    app.use("/file",file);

    return app;
}
