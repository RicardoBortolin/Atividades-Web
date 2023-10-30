const express = require('express');
const router = express.Router();
const calculatorController = require('../controller/calculatorController');

router.get('/', calculatorController.getCalculatorForm);
router.post('/calcular', calculatorController.calculate);

module.exports = router;
