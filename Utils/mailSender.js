const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const mailSender = (firstName, email, token) => {
  // These id's and secrets should come from .env file.

  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const CLEINT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  const REDIRECT_URI = "https://developers.google.com/oauthplayground";
  const REFRESH_TOKEN =
    "1//04WplbvkE5rB_CgYIARAAGAQSNwF-L9IrOJV3k4eFxR9wu7AlZ570bWzA3nHRRr-7XyxsZgwwEWdcwrrvacS31YIq3wh7dBqmL08";
  console.log(CLIENT_ID);
  console.log(CLEINT_SECRET);
  console.log(REFRESH_TOKEN);

  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLEINT_SECRET,
    REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  async function sendMail() {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
      // const accessToken =
      //   "ya29.A0ARrdaM9LAz_EmfrrQHEKC8pMmI5J8kOkN3obzmB2Oh1M3lv4aDum_I3bitvXDovy9u1ZcL8dir3lPcscFu6DxYByt6lJuUkneFoeC_GSEeBsibUnXI-Z8-jirhOegqt5i5Sk6FqcpF9UVMyVDTrbYx3hJdstYUNnWUtBVEFTQVRBU0ZRRl91NjFWX0tzX2Yta21hY0l6T1pSelhYNjVEdw0163";

      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "yashsahu0336@gmail.com",
          clientId: CLIENT_ID,
          clientSecret: CLEINT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
      const fs = require("fs");
      const output = fs.readFileSync("Utils/email.html").toString();
      let foutput = output.replaceAll(
        "LINKTOBEEXCHANGED",
        process.env.CLIENT_BASE_URL + "/activate/" + token
      );
      let svgUrl = process.env.SERVER_BASE_URL + "/api/images/logo.png";
      foutput = foutput.replaceAll("SERVERLOGOLINKHERE", svgUrl);
      // console.log("abhi wala ", svgUrl);
      const mailOptions = {
        from: "DY Store <yashsahu0336@gmail.com>",
        to: email,
        subject: `Hii ${firstName} Activate your account`,
        text: "Activate your account using this link ",
        html: foutput,
      };

      const result = await transport.sendMail(mailOptions);
      return result;
    } catch (error) {
      return error;
    }
  }
  console.log("sending mail");

  // this returns a promise
  return sendMail();
  // sendMail()
  //   .then((result) => console.log("Email sent...", result))
  //   .catch((error) => console.log(error.message));
};

module.exports = { mailSender };
