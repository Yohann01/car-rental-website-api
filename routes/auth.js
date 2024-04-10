const router = require('express').Router();
const authController = require('../controllers/authController');


//** */ /api/user/register
router.post('/register', authController.registerUser)

module.exports = router;