const express = require("express");
const router = express.Router();

const {
  sendPropertyEmailController,
  sendContactFormController
} = require("../controller/property.controller");

router.post("/send-email", sendPropertyEmailController);

router.post("/contact-us", sendContactFormController);
module.exports = router;
