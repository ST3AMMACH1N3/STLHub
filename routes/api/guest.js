const router = require('express').Router();
const guestController = require('../../controllers/guestController');

// Matches with '/api/guest'
router.route('/')
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with '/api/guest/:id'
router
  .route('/:id')
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
