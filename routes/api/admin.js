const router = require('express').Router();
const adminController = require('../../controllers/adminController');

// Matches with '/api/admin'
router.route('/')
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with '/api/admin/:id'
router
  .route('/:id')
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
