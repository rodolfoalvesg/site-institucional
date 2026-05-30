/**
 * Formulário de contato — validação e feedback
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (!form || !feedback) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome || !email || !mensagem) {
      showFeedback('⚠ Por favor, preencha todos os campos obrigatórios.', 'error');
      return;
    }
    if (!emailRegex.test(email)) {
      showFeedback('⚠ Informe um e-mail válido.', 'error');
      return;
    }

    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
      showFeedback('✓ Mensagem enviada! Retornaremos em até 24h úteis.', 'success');
      form.reset();
      btn.textContent = 'Enviar mensagem →';
      btn.disabled = false;
    }, 1200);
  });

  function showFeedback(msg, type) {
    feedback.textContent = msg;
    feedback.style.display = 'block';
    feedback.style.color = type === 'error' ? '#ff5555' : 'var(--accent)';
    feedback.style.borderColor = type === 'error' ? '#ff5555' : 'var(--accent)';
    feedback.style.background = type === 'error' ? 'rgba(255,85,85,0.05)' : 'rgba(0,255,157,0.05)';
    setTimeout(() => { feedback.style.display = 'none'; }, 5000);
  }
}
