// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple form validation
const form = document.getElementById('form-inscricao');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  if (!nome) {
    alert('Por favor, preencha o campo Nome.');
    form.nome.focus();
    return;
  }
  if (!email) {
    alert('Por favor, preencha o campo E-mail.');
    form.email.focus();
    return;
  }
  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, insira um e-mail válido.');
    form.email.focus();
    return;
  }
  alert('Obrigado por se inscrever! (Simulação)');
  form.reset();
});
