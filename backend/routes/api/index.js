const router = require('express').Router();

//Testing code
router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });
module.exports = router;