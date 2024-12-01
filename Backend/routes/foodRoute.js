import express from "express";
import multer from "multer";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";

const router = express.Router();

// Configure Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Destination folder
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); // Filename format
    }
});
const upload = multer({ storage: storage });

// Routes
router.post("/add", upload.single("image"), addFood); // File upload
router.get("/list", listFood);
router.delete("/remove", removeFood);

export default router;
