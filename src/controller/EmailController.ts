import { Request, Response } from "express";

class EmailController {
    async signup(req: Request, res: Response): Promise<void> {
        try {
          const { name , email, password, role } = req.body;
    
          const token:any = await userBussiness.signup(name, email, password, role);
    
          res.status(201).send({ message: "User created successfully!", token });
        } catch (error: any) {
          res.status(400).send({
            message: error.message,
          });
        } finally {
          await BaseDatabase.destroyConnection();
        }
      }

}

export default new EmailController()