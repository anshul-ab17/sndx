import { Router,type Request,type Response,  } from "express";

const router = Router();

router.post("/upload", (_req:Request, res: Response) => {
    res.status(201).json({
        message: "File uploaded successfully"
    });
});

router.get("/:id", (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        message: "File fetched",
        fileId: id
    });
});

router.delete("/:id", (req: Request, res: Response) => {
    const { id } = req.params;

    res.json({
        message: "File deleted",
        fileId: id
    });
});

export default router;
