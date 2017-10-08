/**
 * Created by flekaty123 on 07/10/17.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', { title: 'Calendar' });
});

module.exports = router;