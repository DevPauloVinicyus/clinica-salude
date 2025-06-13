// Seleciona todos os botões que abrem e fecham o modal
const openButtons = document.querySelectorAll('.open-modal');
const closeButtons = document.querySelectorAll('.close-modal');

// Percorre cada botão de abrir e adiciona o evento de click
openButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Pega o id do modal que o botão abre
    const modalId = button.getAttribute('data-modal');

    // Pega o modal pelo id
    const modal = document.getElementById(modalId);

    // Abre o modal
    modal.showModal();
  });
});

// Percorre cada botão de fechar e adiciona o evento de click
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Pega o id do modal que o botão fecha
    const modalId = button.getAttribute('data-modal');

    // Pega o modal pelo id
    const modal = document.getElementById(modalId);

    // Fecha o modal
    modal.close();
  });
});

const estrelas = document.querySelectorAll('.estrela');
let classificacao = 0;

estrelas.forEach((estrela, index) => {
  estrela.addEventListener('mouseover', () => {
    resetarEstrelas();
    for (let i = 0; i <= index; i++) {
      estrelas[i].classList.add('hover');
    }
  });

  estrela.addEventListener('mouseout', () => {
    resetarEstrelas();
    for (let i = 0; i < classificacao; i++) {
      estrelas[i].classList.add('selecionada');
    }
  });

  estrela.addEventListener('click', () => {
    classificacao = index + 1;
    resetarEstrelas();
    for (let i = 0; i < classificacao; i++) {
      estrelas[i].classList.add('selecionada');
    }
    // Atualiza o input hidden com o valor da classificação
    document.getElementById('starsValue').value = classificacao;
    console.log("Usuário selecionou " + classificacao + " estrelas.");
    // Aqui você pode enviar isso via form ou AJAX
  });
});

function resetarEstrelas() {
  estrelas.forEach(e => e.classList.remove('selecionada', 'hover'));
}

document.getElementById("avaliarBtn").addEventListener("click", function (event) {
  event.preventDefault(); // impede redirecionamento
  document.getElementById("avaliacaoModal").style.display = "flex";
});

document.querySelector(".fechar").addEventListener("click", function () {
  document.getElementById("avaliacaoModal").style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("avaliacaoModal")) {
    document.getElementById("avaliacaoModal").style.display = "none";
  }
});

document.querySelector(".voltar").addEventListener("click", function () {
  document.getElementById("avaliacaoModal").style.display = "none";
});

