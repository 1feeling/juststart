// Простые анимации для сайта
class SimpleAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.initScrollAnimations();
        this.initHoverEffects();
    }

    initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1
        });

        // Наблюдаем за элементами с атрибутом data-animate
        document.querySelectorAll('[data-animate]').forEach(el => {z
            observer.observe(el);
        });
    }

    initHoverEffects() {
        // Эффекты при наведении на карточки
        const cards = document.querySelectorAll('.myth-card, .video-card, .course-card, .roadmap-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', () => {
    new SimpleAnimations();
});