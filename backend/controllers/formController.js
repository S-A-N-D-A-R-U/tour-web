const nodemailer = require("nodemailer");

const submitForm = async (req, res) => {
  try {
    const { formType, formData } = req.body;

    // Validate formType
    const allowedForms = ["booking", "tourPlan", "contact", "transfer"];
    if (!allowedForms.includes(formType)) {
      return res.status(400).json({ error: "Invalid form type" });
    }

    // Email subject based on form type
    let subject;
    switch (formType) {
      case "booking":
        subject = "New Tour Booking Request";
        break;
      case "tourPlan":
        subject = "New Custom Tour Plan Request";
        break;
      case "contact":
        subject = "New Contact Inquiry";
        break;
      case "transfer":
        subject = "New Transfer Booking Request";
        break;
    }

    // Format email content
    const formatEmailContent = (data) => {
      return Object.keys(data)
        .map((key) => `${key}: ${JSON.stringify(data[key], null, 2)}`)
        .join("\n");
    };

    const emailContent = `Form Type: ${formType}\n\n${formatEmailContent(formData)}`;

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "admin@example.com", // Change to your recipient email
      subject: subject,
      text: emailContent,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { submitForm };
