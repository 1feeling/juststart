// ==================== ОБЪЯВЛЕНИЕ КОНСТАНТ ====================
const API_BASE_URL = 'http://localhost:5000/api';

// ==================== ЗАПАСНЫЕ ДАННЫЕ ====================
const FALLBACK_DATA = {
    myths: [
        {
            id: 1,
            icon: "fa-calculator",
            title: "Нужно быть гением математики",
            description: "На самом деле большинство направлений требуют только базовых математических знаний.",
            fullDescription: "Многие думают, что программирование требует глубоких знаний математики. На практике, для веб-разработки достаточно школьного курса."
        },
        {
            id: 2,
            icon: "fa-graduation-cap",
            title: "Требуется высшее образование",
            description: "Многие успешные программисты - самоучки без формального образования.",
            fullDescription: "В IT ценятся знания и умения, а не корочки. На собеседованиях спрашивают про технологии, опыт и проекты."
        },
        {
            id: 3,
            icon: "fa-birthday-cake",
            title: "Это только для молодых",
            description: "Начать программировать можно в любом возрасте.",
            fullDescription: "Возраст — не помеха. Есть много примеров успешных разработчиков, которые начинали в 30, 40 и даже 50 лет."
        }
    ],
    
    videos: [
        {
            id: 1,
            title: "Программирование для начинающих",
            channel: "Владилен Минин",
            duration: "2:15:30",
            level: "beginner",
            levelText: "Начинающий",
            url: "https://www.youtube.com/watch?v=dEBVe8Ij7JU",
            views: "1.2M"
        },
        {
            id: 2,
            title: "JavaScript за 1 час",
            channel: "FreeCodeCamp",
            duration: "1:15:22",
            level: "beginner",
            levelText: "Начинающий",
            url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
            views: "890K"
        },
        {
            id: 3,
            title: "Python - полный курс для начинающих",
            channel: "selfedu",
            duration: "4:30:00",
            level: "beginner",
            levelText: "Начинающий",
            url: "https://www.youtube.com/watch?v=DOsD5P7J5vY",
            views: "1.8M"
        }
    ],
    
    featuredCourses: [
        {
            id: 1,
            title: "CS50: Introduction to Computer Science",
            platform: "Harvard",
            description: "Лучший бесплатный курс для начинающих от Гарварда",
            level: "beginner",
            duration: "12 недель",
            price: "free",
            url: "https://www.edx.org/course/cs50s-introduction-to-computer-science",
            rating: 4.9,
            students: "2.5M"
        },
        {
            id: 2,
            title: "The Complete JavaScript Course",
            platform: "Udemy",
            description: "Самый популярный курс по JavaScript на Udemy",
            level: "beginner",
            duration: "69 часов",
            price: "paid",
            url: "https://www.udemy.com/course/the-complete-javascript-course/",
            rating: 4.8,
            students: "450K"
        },
        {
            id: 3,
            title: "Python для начинающих",
            platform: "Stepik",
            description: "Бесплатный курс по Python на русском языке",
            level: "beginner",
            duration: "20 часов",
            price: "free",
            url: "https://stepik.org/course/67/",
            rating: 4.8,
            students: "1.2M"
        },
        {
            id: 4,
            title: "React - The Complete Guide",
            platform: "Udemy",
            description: "Полный курс по React с хуками, роутингом и Next.js",
            level: "intermediate",
            duration: "48 часов",
            price: "paid",
            url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
            rating: 4.7,
            students: "350K"
        }
    ],
    
    courses: [
        {
            id: 1,
            title: "CS50: Introduction to Computer Science",
            platform: "Harvard / edX",
            description: "Гарвардский курс для начинающих. Основы CS и программирования.",
            level: "beginner",
            duration: "12 недель",
            price: "free",
            url: "https://www.edx.org/course/cs50s-introduction-to-computer-science",
            rating: 4.9,
            students: 2500000,
            tags: ["computer-science", "python"]
        },
        {
            id: 2,
            title: "The Complete JavaScript Course",
            platform: "Udemy",
            description: "Полный курс по JavaScript от новичка до профессионала.",
            level: "beginner",
            duration: "69 часов",
            price: "paid",
            url: "https://www.udemy.com/course/the-complete-javascript-course/",
            rating: 4.8,
            students: 450000,
            tags: ["javascript", "frontend"]
        }
    ],
    
    roadmaps: [
        {
            id: "frontend",
            icon: "fa-react",
            title: "Frontend Developer",
            shortDesc: "HTML, CSS, JavaScript, React, Vue, Angular",
            url: "https://roadmap.sh/frontend",
            color: "#61DAFB",
            steps: [
                { name: "Основы интернета", description: "Как работает HTTP, браузеры, DNS." },
                { name: "HTML и CSS", description: "Структура страниц, стили, адаптивность." },
                { name: "JavaScript", description: "Основы, DOM, события, асинхронность." }
            ],
            resources: [
                { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" }
            ]
        },
        {
            id: "backend",
            icon: "fa-server",
            title: "Backend Developer",
            shortDesc: "Node.js/Python, Databases, APIs, DevOps",
            url: "https://roadmap.sh/backend",
            color: "#68A063",
            steps: [
                { name: "Язык программирования", description: "Выбери: Python, JavaScript (Node.js), Java." },
                { name: "Базы данных", description: "Реляционные (PostgreSQL) и нереляционные (MongoDB)." },
                { name: "API", description: "REST, GraphQL." }
            ],
            resources: [
                { name: "Node.js Course", url: "https://nodejs.org/en/learn/" }
            ]
        }
    ]
};

// ==================== ЛОГИРОВАНИЕ ЗАПУСКА ====================
console.log('🔥 Script.js загружен!');
console.log('🌐 API URL:', API_BASE_URL);
console.log('📦 Запасные данные загружены');

// ==================== ФУНКЦИИ ДЛЯ РАБОТЫ С API ====================

/**
 * Запрос к API
 * @param {string} endpoint - эндпоинт (например '/courses')
 * @returns {Promise<Object|null>} - данные или null при ошибке
 */
async function fetchFromAPI(endpoint) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(`✅ Данные загружены с ${endpoint}:`, data);
        return data;
    } catch (error) {
        console.error(`❌ Ошибка загрузки ${endpoint}:`, error.message);
        return null;
    }
}

/**
 * Загрузка данных с fallback на запасные
 * @param {string} endpoint - эндпоинт API
 * @param {string} fallbackKey - ключ в FALLBACK_DATA
 * @returns {Promise<Object|null>} - данные
 */
async function loadData(endpoint, fallbackKey) {
    // Сначала пробуем загрузить с API
    const apiData = await fetchFromAPI(endpoint);
    if (apiData) return apiData;
    
    // Если API не работает, используем запасные данные
    console.warn(`⚠️ Используем запасные данные для ${endpoint}`);
    return FALLBACK_DATA[fallbackKey];
}

// ==================== ИНИЦИАЛИЗАЦИЯ ====================

function initializeLoader() {
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    }, 1500);
}

function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', function() {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            this.textContent = '🌙';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            this.textContent = '☀️';
        }
    });
}

function initializeNavigation() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

function initializeModal() {
    if (!document.querySelector('.modal')) {
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-body"></div>
            </div>
        `;
        document.body.appendChild(modal);

        const closeBtn = modal.querySelector('.modal-close');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
}

function showModal(title, content) {
    const modal = document.querySelector('.modal');
    const modalBody = modal.querySelector('.modal-body');
    modalBody.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
    `;
    modal.classList.add('active');
}

// ==================== ГЛАВНАЯ СТРАНИЦА ====================

async function loadHomeContent() {
    console.log('🏠 Загрузка главной страницы...');
    await Promise.all([
        loadMyths(),
        loadVideos(),
        loadPopularCourses()
    ]);
    
    initializeCounters();
    initializeAnimations();
}

async function loadMyths() {
    const mythsGrid = document.querySelector('.myths-grid');
    if (!mythsGrid) return;

    const myths = await loadData('/myths', 'myths');
    if (!myths) {
        mythsGrid.innerHTML = '<div class="error">Ошибка загрузки мифов</div>';
        return;
    }

    mythsGrid.innerHTML = myths.map(myth => {
        const safeTitle = myth.title.replace(/"/g, '&quot;');
        const safeDescription = (myth.fullDescription || myth.description).replace(/"/g, '&quot;');
        
        return `
        <div class="myth-card" data-myth-id="${myth.id}">
            <div class="myth-icon"><i class="fas ${myth.icon}"></i></div>
            <h3>${myth.title}</h3>
            <p>${myth.description}</p>
            <button class="read-more-btn" onclick='showModal("${safeTitle}", "${safeDescription}")'>
                Подробнее
            </button>
        </div>
    `}).join('');
}

async function loadVideos() {
    const videosGrid = document.querySelector('.videos-grid');
    if (!videosGrid) return;

    const videos = await loadData('/videos', 'videos');
    if (!videos) {
        videosGrid.innerHTML = '<div class="error">Ошибка загрузки видео</div>';
        return;
    }

    videosGrid.innerHTML = videos.map(video => `
        <div class="video-card">
            <div class="video-thumbnail" style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); height: 150px; display: flex; align-items: center; justify-content: center;">
                <i class="fas fa-play-circle" style="font-size: 4rem; color: white; opacity: 0.8;"></i>
                <div class="video-duration">${video.duration || '0:00'}</div>
            </div>
            <h4>${video.title || 'Видео'}</h4>
            <p class="video-channel">${video.channel || 'Канал'}</p>
            <span class="video-level">${video.levelText || 'Начинающий'}</span>
            <p class="video-views">👁 ${video.views || '0'} просмотров</p>
            <button class="btn watch-btn" onclick="window.open('${video.url || '#'}', '_blank')">Смотреть</button>
        </div>
    `).join('');
}

async function loadPopularCourses() {
    const popularGrid = document.getElementById('popularCoursesGrid');
    if (!popularGrid) return;

    const courses = await loadData('/courses/featured/all', 'featuredCourses');
    
    if (!courses) {
        popularGrid.innerHTML = '<div class="error">Ошибка загрузки курсов</div>';
        return;
    }

    popularGrid.innerHTML = courses.map(course => `
        <div class="course-card" data-category="${course.price || 'free'} ${course.level || 'beginner'}">
            <h3>${course.title}</h3>
            <p class="course-platform">${course.platform || 'Платформа'}</p>
            <p class="course-description">${course.description || ''}</p>
            <div class="course-rating">
                ${generateStars(course.rating || 4.5)} <span>(${course.rating || 4.5})</span>
            </div>
            <div class="course-meta">
                <span class="course-level">${getLevelText(course.level || 'beginner')}</span>
                <span class="course-duration">${course.duration || 'Не указано'}</span>
                <span class="course-price ${course.price || 'free'}">${course.price === 'paid' ? 'Платный' : 'Бесплатно'}</span>
            </div>
            <p class="course-students">👥 ${course.students ? course.students + ' студентов' : 'Популярный курс'}</p>
            <button class="btn btn-primary" onclick="window.open('${course.url || '#'}', '_blank')">Начать курс</button>
        </div>
    `).join('');
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHtml = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '★';
    }
    if (hasHalfStar) {
        starsHtml += '½';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '☆';
    }
    
    return `<span class="stars">${starsHtml}</span>`;
}

// ==================== СТРАНИЦА КУРСОВ ====================

let allCourses = [];

async function loadCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    if (!coursesGrid) return;

    addSearchToCourses();

    const courses = await loadData('/courses', 'courses');
    if (!courses) {
        coursesGrid.innerHTML = '<div class="error">Ошибка загрузки курсов</div>';
        return;
    }

    allCourses = courses;
    displayCourses(allCourses);
    initializeCourseFilters();
    initializeCourseSearch();
}

function addSearchToCourses() {
    const container = document.querySelector('.courses-section .container');
    if (!container || document.querySelector('.search-input')) return;

    const filterButtons = container.querySelector('.filter-buttons');
    if (!filterButtons) return;

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'search-input';
    searchInput.placeholder = '🔍 Поиск курсов...';
    searchInput.id = 'courseSearch';
    
    filterButtons.insertAdjacentElement('afterend', searchInput);
}

function displayCourses(courses) {
    const coursesGrid = document.getElementById('coursesGrid');
    if (!coursesGrid) return;
    
    if (courses.length === 0) {
        coursesGrid.innerHTML = '<div class="error">Курсы не найдены</div>';
        return;
    }
    
    coursesGrid.innerHTML = courses.map(course => `
        <div class="course-card" 
             data-category="${course.price} ${course.level}" 
             data-title="${course.title.toLowerCase()}"
             data-platform="${course.platform.toLowerCase()}">
            <h3>${course.title}</h3>
            <p class="course-platform">${course.platform}</p>
            <p class="course-description">${course.description}</p>
            <div class="course-rating">
                ${generateStars(course.rating)} <span>(${course.rating})</span>
            </div>
            <div class="course-meta">
                <span class="course-level">${getLevelText(course.level)}</span>
                <span class="course-duration">${course.duration}</span>
                <span class="course-price ${course.price}">${course.price === 'free' ? 'Бесплатно' : 'Платный'}</span>
            </div>
            <p class="course-students">👥 ${formatNumber(course.students)} студентов</p>
            <button class="btn btn-primary" onclick="window.open('${course.url}', '_blank')">Начать курс</button>
        </div>
    `).join('');
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num;
}

function initializeCourseFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterCourses(filter, document.getElementById('courseSearch')?.value || '');
        });
    });
}

function initializeCourseSearch() {
    const searchInput = document.getElementById('courseSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
        filterCourses(activeFilter, this.value);
    });
}

function filterCourses(filter, searchTerm = '') {
    let filtered = allCourses;
    
    if (filter !== 'all') {
        filtered = filtered.filter(course => 
            course.price === filter || course.level === filter
        );
    }
    
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(course => 
            course.title.toLowerCase().includes(term) ||
            course.platform.toLowerCase().includes(term) ||
            course.description.toLowerCase().includes(term) ||
            (course.tags && course.tags.some(tag => tag.toLowerCase().includes(term)))
        );
    }
    
    displayCourses(filtered);
}

// ==================== СТРАНИЦА ROADMAPS ====================

async function loadRoadmaps() {
    const roadmapsGrid = document.getElementById('roadmapsGrid');
    if (!roadmapsGrid) return;

    const roadmaps = await loadData('/roadmaps', 'roadmaps');
    if (!roadmaps) {
        roadmapsGrid.innerHTML = '<div class="error">Ошибка загрузки roadmaps</div>';
        return;
    }

    roadmapsGrid.innerHTML = roadmaps.map(roadmap => `
        <div class="roadmap-card" style="border-top: 4px solid ${roadmap.color}">
            <div class="roadmap-icon"><i class="fab ${roadmap.icon}" style="color: ${roadmap.color}"></i></div>
            <h3>${roadmap.title}</h3>
            <p class="roadmap-short-desc">${roadmap.shortDesc}</p>
            
            <button class="btn btn-secondary roadmap-toggle-btn" onclick="toggleRoadmap(this.parentElement)">
                <i class="fas fa-chevron-down"></i> Показать план обучения
            </button>
            
            <div class="roadmap-details">
                <h4>📚 План обучения:</h4>
                <ul class="roadmap-steps">
                    ${roadmap.steps.map((step, index) => `
                        <li>
                            <span class="step-number">${index + 1}</span>
                            <div class="step-content">
                                <span class="step-name">${step.name}</span>
                                <span class="step-desc">${step.description}</span>
                            </div>
                        </li>
                    `).join('')}
                </ul>
                
                <div class="roadmap-resources">
                    <h4>🔗 Полезные ресурсы:</h4>
                    <ul>
                        ${roadmap.resources.map(res => `
                            <li>
                                <a href="${res.url}" target="_blank">
                                    <i class="fas fa-external-link-alt"></i> ${res.name}
                                </a>
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <a href="${roadmap.url}" target="_blank" class="btn btn-primary" onclick="event.stopPropagation()">
                    <i class="fas fa-map"></i> Открыть roadmap.sh
                </a>
            </div>
        </div>
    `).join('');
}

function toggleRoadmap(element) {
    element.classList.toggle('expanded');
    
    const btn = element.querySelector('.roadmap-toggle-btn i');
    if (btn) {
        btn.style.transform = element.classList.contains('expanded') ? 'rotate(180deg)' : '';
    }
}

// ==================== ОБЩИЕ ФУНКЦИИ ====================

function getLevelText(level) {
    const levels = {
        'beginner': 'Начинающий',
        'intermediate': 'Средний',
        'advanced': 'Продвинутый'
    };
    return levels[level] || level;
}

function initializeCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length === 0) return;
    
    let animated = false;
    
    const animateCounters = () => {
        if (animated) return;
        
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;
        
        const elementTop = statsSection.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            animated = true;
            
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-count');
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                updateCounter();
            });
        }
    };
    
    window.addEventListener('scroll', animateCounters);
    animateCounters();
}

function initializeAnimations() {
    const elements = document.querySelectorAll('.myth-card, .video-card, .step, .stat-card, .course-card, .roadmap-card');
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    const animateOnScroll = () => {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
}

// ==================== ОСНОВНАЯ ЗАГРУЗКА ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM загружен, начинаем инициализацию...');
    
    initializeLoader();
    initializeTheme();
    initializeNavigation();
    initializeModal();
    
    // Загрузка контента в зависимости от страницы
    const currentPage = window.location.pathname.split('/').pop();
    console.log('📄 Текущая страница:', currentPage);
    
    switch(currentPage) {
        case 'index.html':
        case '':
            loadHomeContent();
            break;
        case 'courses.html':
            loadCourses();
            break;
        case 'roadmaps.html':
            loadRoadmaps();
            break;
        case 'community.html':
            console.log('👥 Страница сообщества');
            break;
        default:
            console.log('❓ Неизвестная страница:', currentPage);
    }
});