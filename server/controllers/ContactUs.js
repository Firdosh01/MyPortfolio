const {contactUsEmail} = require("../mail/contactForm")
const mailSender = require("../mail/mailSender")


exports.contactUs = async (req, res) => {
    const { name, email, message } = req.body
    console.log(req.body)
    try {
      const emailRes = await mailSender(
        email,
        "Your Data send successfully",
        contactUsEmail(name, email, message)
      )
      console.log("Email Res ", emailRes)
      return res.json({
        success: true,
        message: "Email send successfully",
      })
    } catch (error) {
      console.log("Error", error)
      console.log("Error message :", error.message)
      return res.json({
        success: false,
        message: "Something went wrong...",
      })
    }
  }