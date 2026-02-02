import { Router, type Request, type Response } from "express";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
    res.json({
        notes: [],
        message: "All notes"
    });
});


router.post("/", (req: Request, res: Response) => {
    const { title, content } = req.body;

    res.status(201).json({
        message: "Note created",
        note: { title, content }
    });
});


router.get("/:id", (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        message: "Single note",
        id
    });
});

router.delete("/:id", (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        message: "Note deleted",
        id
    });
});

export default router;
