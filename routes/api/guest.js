const router = require('express').Router();
const guestController = require('../../controllers/guestController');
const pageController = require('../../controllers/pageController');
const passport = require('../../config/passport');
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const db = require('../../models');

router
    .route('/content')
    .get(pageController.findContent);

router
    .route('/createAccount')
    .post((req, res) => {
        db.User
            .findOne({ email: req.body.email })
            .then(data => {
                if (data) {
                    console.log('User not created');
                    res.send('User with email already exists.');
                    return;
                }
                return db.User.create(req.body);
            })
            .then(dbUser => res.json(dbUser));
    })

router
    .route('/login')
    .post(passport.authenticate('local'), (req, res) => {
        db.User
            .findOne({ email: req.body.email })
            .then(data => res.end())
            .catch(err => res.json(err));
    })

router
    .route('/logout')
    .post(isAuthenticated, (req, res) => {
        req.logout();
        res.end();
    })

router
    .route('/getCredentials')
    .get(isAuthenticated, (req, res) => {
        const { _id, admin, name } = req.user;
        res.json({ _id, admin, name });
    })

module.exports = router;
