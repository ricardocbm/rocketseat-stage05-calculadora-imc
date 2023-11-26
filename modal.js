// Definindo um objeto Modal que contém referências para elementos HTML relevantes
export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal button.close"),

  // Método para abrir o modal
  open() {
    Modal.wrapper.classList.add("open");
  },

  // Método para fechar o modal
  close() {
    Modal.wrapper.classList.remove("open");
  },
};

// Adicionando um evento de clique ao botão de fechar o modal
Modal.buttonClose.onclick = () => {
  Modal.close(); // Chamando o método de fechar o modal ao clicar no botão
};

// Adicionando um ouvinte de evento para a tecla Escape
window.addEventListener("keydown", handleKeydown);

// Função para lidar com o evento de pressionar uma tecla
function handleKeydown(event) {
  // Verificando se a tecla pressionada é a tecla Escape
  if (event.key === "Escape") {
    Modal.close(); // Fechando o modal se a tecla Escape for pressionada
  }
}
