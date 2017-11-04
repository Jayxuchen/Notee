/**
 * Created by flekaty123 on 07/10/17.
 */
var express = require('express');
var router = express.Router();

router.get('/:date', function(req, res) {
    var date=req.params['date'];
    console.log(date);
    res.render('calendar' );



});


module.exports = router;
