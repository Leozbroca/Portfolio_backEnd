import transporter from "../service/transporter";
// import logoG from "/logoGold.png"
import dotenv from "dotenv";

dotenv.config();



class EmailBussiness {
  async SendEmail(
    name: string,
    email: string,
    subject: string,
    message: string
  ) {
    let Mailgen = require('mailgen');

    const mailGenerator = new Mailgen({
      theme: 'default',
      product: {
          name: `${name} - ${email}`,
          link: 'https://mailgen.js/',
          // Optional product logo
          logo: "https://avatars.githubusercontent.com/u/91346150?v=4"
      }
    });
    const emailGen = {
      body: {
          name: `Leonardo Broca`,
          intro: `<b>Título: ${subject}</b>`,
          outro: `<b>Mensagem:</b> <p>${message}</p></br>`
      }
    };
    
    const emailBody = mailGenerator.generate(emailGen);


    const mailOptions = {
      from: `<${process.env.NODEMAILER_USER}>`,
      to: `${process.env.NODEMAILER_MYEMAIL}`,
      subject: `Portfólio - Novo Email!!!`,
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
