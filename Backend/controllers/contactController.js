const Contact = require("../models/Contact");

exports.submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error submitting form", error: error.message });
  }
};