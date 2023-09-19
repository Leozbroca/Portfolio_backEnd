import app from "./app";
import EmailController from "./controller/EmailController"

// Requisições de usuários
app.post("/send", EmailController.EmailSend)