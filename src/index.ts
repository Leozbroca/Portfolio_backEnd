import app from "./app";
import EmailController from "./controller/EmailController"

app.post("/send", EmailController.EmailSend)
app.get("/test", function(req, res) {
    res.status(200).send({message: "ZE DA MANGA"});
})