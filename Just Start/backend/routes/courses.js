const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// GET /api/courses - получить все курсы
router.get('/', courseController.getAllCourses);

// GET /api/courses/:id - получить курс по ID
router.get('/:id', courseController.getCourseById);

// GET /api/courses/featured - получить популярные курсы
router.get('/featured/all', courseController.getFeaturedCourses);

// GET /api/courses/search/:query - поиск курсов
router.get('/search/:query', courseController.searchCourses);

// GET /api/courses/filter/:level/:price - фильтрация
router.get('/filter/:level/:price', courseController.filterCourses);

module.exports = router;