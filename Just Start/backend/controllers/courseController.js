const fs = require('fs');
const path = require('path');

// Путь к JSON файлу
const coursesPath = path.join(__dirname, '../data/courses.json');

// Вспомогательная функция для чтения данных
const readCoursesData = () => {
    try {
        const data = fs.readFileSync(coursesPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading courses data:', error);
        return { courses: [] };
    }
};

// Получить все курсы
exports.getAllCourses = (req, res) => {
    const data = readCoursesData();
    res.json(data.courses);
};

// Получить курс по ID
exports.getCourseById = (req, res) => {
    const data = readCoursesData();
    const course = data.courses.find(c => c.id === parseInt(req.params.id));
    
    if (!course) {
        return res.status(404).json({ error: 'Course not found' });
    }
    
    res.json(course);
};

// Получить популярные курсы (первые 4)
exports.getFeaturedCourses = (req, res) => {
    const data = readCoursesData();
    const featured = data.courses.slice(0, 4);
    res.json(featured);
};

// Поиск курсов
exports.searchCourses = (req, res) => {
    const data = readCoursesData();
    const query = req.params.query.toLowerCase();
    
    const results = data.courses.filter(course => 
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.platform.toLowerCase().includes(query) ||
        course.tags?.some(tag => tag.toLowerCase().includes(query))
    );
    
    res.json(results);
};

// Фильтрация курсов
exports.filterCourses = (req, res) => {
    const data = readCoursesData();
    let filtered = data.courses;
    
    const { level, price } = req.params;
    
    if (level && level !== 'all') {
        filtered = filtered.filter(c => c.level === level);
    }
    
    if (price && price !== 'all') {
        filtered = filtered.filter(c => c.price === price);
    }
    
    res.json(filtered);
};