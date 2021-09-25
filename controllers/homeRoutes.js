const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage', {
        logged_in: req.session.logged_in
    });

});

module.exports = router;