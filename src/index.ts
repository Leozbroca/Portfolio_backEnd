import app from "./app";
import EmailController from "./controller/EmailController"

app.get("/send", EmailController.EmailSend)