import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: process.env.NEXT_PUBLIC_EMAIL_HOST,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USER,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
});

const sendEmail = async (to, subject, html) => {
  const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USER,
    to: "adebitandamola02@gmail.com",
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
