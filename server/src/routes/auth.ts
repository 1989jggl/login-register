import { Router } from "express";
import { check } from "express-validator";
import authCONTROLLERS from "../controllers/auth";
import { validateField } from "../helpers/validations";

class authroutes {
  public router: Router = Router();
  constructor() {
    this.routes();
  }
  public routes() {
    this.router.post(
      "/register",
      [
        check("corelec", "Required field").trim().isEmail(),
        check("nomuser", "Required field").not().isEmpty().trim(),
        check("password", "Required field")
          .not()
          .isEmpty()
          .isLength({ min: 8 }),
        check("type", "Required field").not().isEmpty().trim(),
        validateField,
      ],
      authCONTROLLERS.register
    );
    this.router.post("/login", [
      check("corelec", "Required field").trim().isEmail(),
      check("password", "Required field")
      .not()
      .isEmpty()
      .isLength({ min: 8 }),
      validateField,
    ],authCONTROLLERS.login);
  }
}

const authROUTES = new authroutes();
export default authROUTES.router;
