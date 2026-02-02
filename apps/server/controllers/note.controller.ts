
import type { Request, Response } from "express";
import { saveNote, fetchNotes } from "../services/note.service";

export async function getNotes(_req: Request, res: Response) {
    const notes = await fetchNotes();
    res.json({ notes });
}

export async function createNote(req: Request, res: Response) {
    const note = await saveNote(req.body);
    res.status(201).json(note);
}
