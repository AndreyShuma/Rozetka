const express = require('express');

const router = express.Router();

router.get('/1', (req, res) => {

    // res.render('index', {name: 'name'});
    res.end('This router require URL request /1');
});

module.exports = router;