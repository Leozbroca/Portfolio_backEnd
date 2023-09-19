import app from "./app";
import EmailController from "./controller/EmailController"

app.post("/send", EmailController.EmailSend)