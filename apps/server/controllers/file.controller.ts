import type { Request, Response } from "express";
import {
    saveFile,
    fetchFile,
    removeFile
} from "../services/file.service";

export async function uploadFile(req: Request, res: Response) {
    const file = req.body; 

    const result = await saveFile(file);

    res.status(201).json({
        message: "File uploaded",
        file: result
    });
}

export async function getFile(req: Request, res: Response) {
    const id = req.params.id;

    if (typeof id !== "string") {
        return res.status(400).json({
            message: "File id must be a string"
        });
    }

    const file = await fetchFile(id);
    res.json(file);
}

export async function deleteFile(req: Request, res: Response) {
    const id = req.params.id;

    if (typeof id !== "string") {
        return res.status(400).json({
            message: "File id is required"
        });
    }

    await removeFile(id);

    res.json({ message: "File deleted" });
}
