const express = require('express');
const router = express.Router();
const path = require('path');

// GET React's index.html entrance file, auth in app itself
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});


module.exports = router;