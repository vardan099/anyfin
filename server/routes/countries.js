const express = require('express');
const router = express.Router();


// Country Model
const Country = require('../models/Country');

// @route   POST api/countries
// @desc    Add new country
// @access  Public
router.post('/', (req, res) => {
  const { country, userId } = req.body;
    const newCountry = new Country({...country, userId});
    newCountry.save();
});

module.exports = router;
