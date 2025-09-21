import express from "express";
import isAuthenticated from '../Middleware/isAuthenticated.js'
import { createNote,getNotes,updateNote,deleteNote } from "../controllers/note.controller.js"
const router=express.Router();
router.post("/create",isAuthenticated, createNote)
router.get("/getall",isAuthenticated,  getNotes)
router.put("/update/:id",isAuthenticated, updateNote)
router.delete("/delete/:id",isAuthenticated, deleteNote)
export default router;