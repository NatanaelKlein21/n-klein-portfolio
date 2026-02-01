// Animação de texto digitando
const animatedTextElement = document.getElementById('animated-text');
const words = ['Olá', 'Hi', 'Hola'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150; // Velocidade de digitação
const deletingSpeed = 100; // Velocidade de apagar
const delayBetweenWords = 2000; // Delay entre palavras

function typeWriter() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        // Apagando
        animatedTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeWriter, 500); // Pequena pausa antes de próxima palavra
        } else {
            setTimeout(typeWriter, deletingSpeed);
        }
    } else {
        // Digitando
        animatedTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeWriter, delayBetweenWords);
        } else {
            setTimeout(typeWriter, typingSpeed);
        }
    }
}

// Iniciar animação
typeWriter();

// Menu hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Animação das linhas do hamburger (opcional)
    hamburger.classList.toggle('active');
});

// Adicionar animação ao hamburger no CSS se quiser, mas por enquanto toggle class

// Animação de entrada dos cards
const cards = document.querySelectorAll('.card');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100); // Delay escalonado
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Animação de entrada dos cards de projetos
const projetoCards = document.querySelectorAll('.projeto-card');

const projetoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

projetoCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    projetoObserver.observe(card);
});