const express = require("express");
const router = express.Router();

// Temporary in-memory availability
let trainerAvailability = { isAvailable: false };

// Get trainer availability
router.get("/", (req, res) => {
  res.json(trainerAvailability);
});

// Update trainer availability
router.post("/", (req, res) => {
  const { isAvailable } = req.body;
  trainerAvailability.isAvailable = isAvailable;
  res.json({ message: "Trainer availability updated", trainerAvailability });
});

module.exports = router;
