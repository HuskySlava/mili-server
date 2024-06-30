import { Router } from "express";
const router = Router();

router.get("/user", async (req, res) => {

    // userController async usage

    res.status(200).send("Get user works!");
})

export default router;