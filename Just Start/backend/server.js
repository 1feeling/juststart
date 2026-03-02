const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

// Импортируем маршруты
const coursesRoutes = require('./routes/courses');
const videosRoutes = require('./routes/videos');
const mythsRoutes = require('./routes/myths');
const roadmapsRoutes = require('./routes/roadmaps');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Настройка CORS - разрешаем запросы с любых источников
app.use(cors({
    origin: '*', // В разработке можно разрешить всё
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
})); // Разрешаем кросс-доменные запросы
app.use(morgan('dev')); // Логирование запросов
app.use(express.json()); // Парсинг JSON тела запроса
app.use(express.urlencoded({ extended: true })); // Парсинг form-data

// Статические файлы (если нужно будет отдавать картинки)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Маршруты API
app.use('/api/courses', coursesRoutes);
app.use('/api/videos', videosRoutes);
app.use('/api/myths', mythsRoutes);
app.use('/api/roadmaps', roadmapsRoutes);

// Корневой маршрут
app.get('/', (req, res) => {
    res.json({
        message: 'StartProgramming API',
        version: '1.0.0',
        endpoints: {
            courses: '/api/courses',
            videos: '/api/videos',
            myths: '/api/myths',
            roadmaps: '/api/roadmaps'
        }
    });
});

// Обработка 404
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// Обработка ошибок
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📚 API Documentation available at http://localhost:${PORT}`);
});