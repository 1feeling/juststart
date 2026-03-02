const express = require('express');
const router = express.Router();
const mythController = require('../controllers/mythController');

router.get('/', mythController.getAllMyths);
router.get('/:id', mythController.getMythById);

module.exports = router;