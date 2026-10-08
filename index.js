const menuButton = document.getElementById('menuBtn');
const dropdown = document.getElementById('dropdown');
const themeBtn = document.getElementById('themeBtn');

menuButton.addEventListener('click', () => {
    dropdown.classList.toggle('open');
})

document.addEventListener('click', (e) => {
  if (!e.target.closest('.menu')) {
    dropdown.classList.remove('open');
  }
});

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});