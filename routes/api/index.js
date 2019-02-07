const router = require('express').Router();
const guestRoutes = require('./guest');
const adminRoutes = require('./admin');

router.use('/guest', guestRoutes);

router.use('/admin', adminRoutes);

module.exports = router;
