const { sendPropertyEmail } = require("../services/email.service");
const propertyTemplate = require("../templates/property.template");
const contactTemplate = require("../templates/contact.template");

exports.sendPropertyEmailController = async (req, res) => {
  try {
    const data = req.body;

    if (!data.name || !data.email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required",
      });
    }

    const html = propertyTemplate(data);
    const recipients = "jeffc@realtytrustco.com, dacv696@gmail.com";
    await sendPropertyEmail(recipients, "🏠 New Property Submission", html);

    return res.json({
      success: true,
      message: "Property email sent successfully",
    });
  } catch (error) {
    console.error("❌ Property Email Error:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.sendContactFormController = async (req, res) => {
  try {
    const data = req.body;

    // Validation
    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required",
      });
    }

    const html = contactTemplate(data);
    const recipients = "jeffc@realtytrustco.com, dacv696@gmail.com";

    await sendPropertyEmail(
      recipients,
      `📩 Contact inquiry from ${data.name}`,
      html,
    );

    return res.json({
      success: true,
      message: "Contact inquiry sent successfully",
    });
  } catch (error) {
    console.error("❌ Contact Email Error:", error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
