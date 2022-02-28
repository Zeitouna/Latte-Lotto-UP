// send email function
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "info.lattelotto@gmail.com",
    pass: "serendipity2022!",
  },
});

const mailOptions = {
  from: "info.lattelotto@gmail.com",
  // to: "niko.desilva@esmt.org",
  subject: "Sending Email using Node.js",
  // text: "That was easy!",
};

const getMailBody = (recipient_1, recipient_2) => {
  return `Dear ${recipient_1.first_name}, meet ${recipient_2.first_name}!
  Dear ${recipient_2.first_name}, meet ${recipient_1.first_name}!
  Now go meet for Coffee!`;
};

const sendCoffee = async (recipient_1, recipient_2) => {
  try {
    const info = await transporter.sendMail({
      ...mailOptions,
      to: [recipient_1.email, recipient_2.email],
      text: getMailBody(recipient_1, recipient_2),
    });
    console.log("Email sent: " + info.response);
  } catch {
    console.log("try/catch failed");
  }
};

module.exports = sendCoffee;

// sendEmail(
//   "sgaikwad@bootcampspot.com",
//   "http://localhost:3001/user/2?token=abcd1235"
// );
