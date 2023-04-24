const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('req.params', req.params);
    res.render('index');
});

module.exports = router;