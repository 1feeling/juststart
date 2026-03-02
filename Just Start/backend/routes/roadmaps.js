const express = require('express');
const router = express.Router();
const roadmapController = require('../controllers/roadmapController');

router.get('/', roadmapController.getAllRoadmaps);
router.get('/:id', roadmapController.getRoadmapById);

module.exports = router;