
import express from "express"
const router = express.Router()
import { Register,Login,Logout } from "../controllers/usercontroller.js"

router.route("/register").post(Register)
router.route("/login").post(Login)
router.route("/logout").get(Logout)

export default router