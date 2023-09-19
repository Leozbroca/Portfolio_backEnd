import transporter from "../service/transporter";
import dotenv from "dotenv";

dotenv.config();

class EmailBussiness {
  async SendEmail(
    name: string,
    email: string,
    subject: string,
    message: string
  ) {
    const mailOptions = {
      from: `<${process.env.NODEMAILER_USER}>`,
      to: `${process.env.NODEMAILER_MYEMAIL}`,
      subject: `Portfólio - Novo Email!`,
      text: `Nome: ${name}, Subject: ${subject}, Email: ${email}, Message: ${message}`,
      html: `<h1>Nome da pessoa: ${name}<h1> <br/> 
                <h2>Título: ${subject}<h2> <br/> 
                <h2>Email da pessoa: ${email}<h2> <br/> 
                <p>Mensagem: ${message}<p>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return error
      } else {
        return info.response
      }
    });
  }
}

export default new EmailBussiness();
