import express from "express";
const router = express.Router();

router.get("/", async (_req, res) => {
  res.render("planTransports");
});

export default router;
