const router = require('express').Router();
const carController = require('../controllers/carController')

router.get('/cars', carController.getCars);
router.post('/postcar', carController.postCars);

module.exports = router;