import nodemailer from 'nodemailer'
import testMail from './testMail.js'

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
})

transporter.verify().then(() => {
    console.log('Mailer is ready!')
})

async function sendEmail (templateName) {
  switch(templateName) {
    case 'TEST':
      return testMail.run()
    default:
      break
  }
}

const Mailer = {
  sendEmail,
}

export default Mailer