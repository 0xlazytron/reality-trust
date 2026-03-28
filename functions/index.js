const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const propertyRoutes = require("./src/routes/property.routes");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// Routes
app.use("/property", propertyRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("🔥 Realty Trust API Running");
});

exports.api = functions.https.onRequest(app);
