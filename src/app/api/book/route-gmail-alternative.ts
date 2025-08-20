// Alternative Gmail configuration (if Outlook doesn't work)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-gmail@gmail.com',
    pass: 'your-gmail-app-password'
  }
})
