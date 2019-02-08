const router = require('express').Router();
const guestRoutes = require('./guest');
const adminRoutes = require('./admin');
const contentRoutes = require('./content');

router.use('/guest', guestRoutes);

router.use('/admin', adminRoutes);

router.use('/content', contentRoutes);

module.exports = router;
