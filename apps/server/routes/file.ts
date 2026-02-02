import { Router } from "express";
import {
    uploadFile,
    getFile,
    deleteFile
} from "../controllers/file.controller";

const router = Router();

router.post("/upload", uploadFile);
router.get("/:id", getFile);
router.delete("/:id", deleteFile);

export default router;
