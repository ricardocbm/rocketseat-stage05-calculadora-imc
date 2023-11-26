// Definindo um objeto alertError que contém referência para o elemento HTML relevante
export const alertError = {
  element: document.querySelector(".alert-error"),

  // Método para abrir o alerta de erro
  open() {
    alertError.element.classList.add("open");
  },

  // Método para fechar o alerta de erro
  close() {
    alertError.element.classList.remove("open");
  },
};
