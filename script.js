function startSite() {
  const splashScreen = document.getElementById('splash-screen');
  const mainContent = document.querySelector('main');

  // Adiciona animação de fade-out
  splashScreen.classList.add('fade-out');

  // Mostra o conteúdo principal após a animação
  setTimeout(() => {
    splashScreen.style.display = 'none';
    mainContent.classList.add('visible');
  }, 1000);
}

function openModal() {
  document.querySelector('.modal').style.display = 'block';
  document.querySelector('.modal-overlay').style.display = 'block';
}

function closeModal() {
  document.querySelector('.modal').style.display = 'none';
  document.querySelector('.modal-overlay').style.display = 'none';
}

// Login funcionalidade
const loginSubmit = document.getElementById('loginSubmit');
loginSubmit.addEventListener('click', function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    alert(`Bem-vindo, ${email}!`);
    closeModal();
  } else {
    alert('Por favor, preencha os campos de email e senha.');
  }
});

function form (){
 const nome = document.getElementById("nome")
alert(`obrigado por nos contatar
${nome}` )
}