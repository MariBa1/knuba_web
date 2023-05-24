const themeStyle = document.getElementById('theme-style');
const themeToggle = document.getElementById('themeToggle');

// Перевіряємо, чи є збережена тема в локальному сховищі
const savedTheme = localStorage.getItem('theme');

// Встановлюємо збережену тему або тему за замовчуванням
if (savedTheme) {
  themeStyle.href = savedTheme;
  if (savedTheme === 'style1.css') {
    document.body.classList.add('theme-light');
  } else {
    document.body.classList.add('theme-dark');
  }
}

// Додаємо обробник події для кнопки "Сменить тему"
themeToggle.addEventListener('click', function() {
  if (document.body.classList.contains('theme-light')) {
    // Вибрана перша тема (світла), підключаємо файли стилів для темної теми
    themeStyle.href = 'style2.css';
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
    // Зберігаємо стан теми в локальному сховищі
    localStorage.setItem('theme', 'style2.css');
  } else {
    // Вибрана друга тема (темна), підключаємо файли стилів для світлої теми
    themeStyle.href = 'style1.css';
    document.body.classList.remove('theme-dark');
    document.body.classList.add('theme-light');
    // Зберігаємо стан теми в локальному сховищі
    localStorage.setItem('theme', 'style1.css');
  }
});