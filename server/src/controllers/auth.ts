import { Request, Response } from "express";
import fs from "fs";
import { encryptPassword, verifyPassword } from "../helpers/security";

interface SegUser {
  nomuser: string;
  corelec: string;
  type: string;
  password: string;
}
const jsonUser = fs.readFileSync("src/models/db.json", "utf-8");
const SEG_USER: SegUser[] = [];
const users = JSON.parse(jsonUser);
SEG_USER.push(...users);
class authcontrollers {
  public async login(req: Request, res: Response): Promise<any> {
    const { corelec, password } = req.body;
    try {
      const isExist = SEG_USER.filter((user) => user.corelec === corelec);
      if (isExist.length === 0) {
        return res.status(400).json({
          status: false,
          title:"Parametros incorrectos",
          response: "Usuario o contraseña incorrecta",
        });
      }
      const verifyPasswordUSer = await verifyPassword(
        password,
        isExist[0].password
      );
      if (!verifyPasswordUSer) {
        return res.status(400).json({
          status: false,
          title:"Parametros incorrectos",
          response: "Usuario o contraseña incorrecta",
        });
      }
      return res.status(201).json({
        status: true,
        response: {
          ...isExist[0],
          password: undefined,
        },
      });
    } catch (error) {}
  }
  public async register(req: Request, res: Response): Promise<any> {
    const { corelec, nomuser, password, type } = req.body;
    try {
      const isExist = SEG_USER.filter((user) => user.corelec === corelec);
      if (isExist.length > 0) {
        return res.status(400).json({
          status: false,
          title:"Correo electrónico ya existe",
          response: "No se permite correos duplicados",
        });
      }
      const newUser = {
        corelec,
        nomuser,
        password:await encryptPassword(password),
        type,
      };
      SEG_USER.push(newUser);
      const newList = JSON.stringify(SEG_USER);
      fs.writeFileSync("src/models/db.json", newList, "utf-8");
      return res.status(201).json({
        status: true,
        response: "Ya puedes iniciar sesión y disfrutar de todos los beneficios",
        title:"Cuenta creada correctamente"
      });
    } catch (error) {
      console.log(error);
    }
  }
}

const authCONTROLLERS = new authcontrollers();
export default authCONTROLLERS;
