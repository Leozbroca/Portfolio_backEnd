import { Request, Response } from "express";
import EmailBussiness from "../bussiness/EmailBussiness";

class EmailController {
    async EmailSend(req: Request, res: Response): Promise<void> {
        try {
          const { name , email, subject, message } = req.body;
         
          await EmailBussiness.SendEmail(name, email, subject, message);
          
          res.status(201).send({message: "Ok"});
        } catch (error: any) {
          res.status(400).send({
            message: error.message,
          });
        }
      }
}

export default new EmailController()