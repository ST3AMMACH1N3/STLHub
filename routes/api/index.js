const router = require('express').Router();
const guestRoutes = require('./guest');
const adminRoutes = require('./admin');

router.use('/admin', adminRoutes);

router.use('/', guestRoutes);

module.exports = router;