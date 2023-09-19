import app from "./src/app";
import EmailController from "./src/controller/EmailController"

app.post("/send", EmailController.EmailSend)