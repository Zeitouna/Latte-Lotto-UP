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

const getMailBody = (link) => {
  return `Please click this ${link}`;
};

const sendEmail = async (recipient, link) => {
  try {
    await transporter.sendMail(
      { ...mailOptions, to: recipient, text: getMailBody(link) },
      function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      }
    );
  } catch {
    console.log("try/catch failed");
  }
};

module.exports = sendEmail;

// sendEmail(
//   "sgaikwad@bootcampspot.com",
//   "http://localhost:3001/user/2?token=abcd1235"
// );
