const Contact=require('../models/contact');

//  Create new contact message
exports.createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({
      success: true,
      message: "Contact message sent successfully",
      data: contact,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error sending contact message",
      error: error.message,
    });
  }
};
