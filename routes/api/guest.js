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
          .then(data => {
              res.json(data);
          })
    })

module.exports = router;
