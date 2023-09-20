import transporter from "../service/transporter";
// import logoG from "/logoGold.png"
import dotenv from "dotenv";

dotenv.config();
let Mailgen = require('mailgen');

const mailGenerator = new Mailgen({
  theme: 'default',
  product: {
      // Appears in header & footer of e-mails
      name: 'Leozbroca - Portfólio',
      link: 'https://mailgen.js/',
      // Optional product logo
      logo: 'https://avatars.githubusercontent.com/u/91346150?s=400&u=1b24328c528aa194ea11bf3228c2e3f9a5be8cd6&v=4'
  }
});


class EmailBussiness {
  async SendEmail(
    name: string,
    email: string,
    subject: string,
    message: string
  ) {

    const emailGen = {
      body: {
          name: `Nome: ${name} --- Email: ${email}`,
          intro: `Título: ${subject}`,
          action: {
              instructions: `Mensagem: ${message}`,
          },
      }
    };
    
    const emailBody = mailGenerator.generate(emailGen);


    const mailOptions = {
      from: `<${process.env.NODEMAILER_USER}>`,
      to: `${process.env.NODEMAILER_MYEMAIL}`,
      subject: `Portfólio - Novo Email!`,
      text: `Nome: ${name}, Subject: ${subject}, Email: ${email}, Message: ${message}`,
      html: `${emailBody}`
    };

     await transporter.sendMail(mailOptions)

     .then((res) => {
      console.log("res:",res)
     })
     .catch((error) => {
      console.log("error:", error)
     })

  }
}

export default new EmailBussiness();
