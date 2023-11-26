// Importando módulos necessários
import { Modal } from "./modal.js";
import { alertError } from "./alert-error.js";
import { notAnumber, IMC } from "./utils.js";

// Obtendo referências para elementos HTML
const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

// Tratando o envio do formulário
form.onsubmit = (event) => {
  event.preventDefault(); // Impede o comportamento padrão do formulário

  // Obtendo os valores de peso e altura do formulário
  const weight = inputWeight.value;
  const height = inputHeight.value;

  // Verificando se o peso ou altura não são números
  const showAlertError = notAnumber(weight) || notAnumber(height);

  // Exibindo um alerta de erro se necessário
  if (showAlertError) {
    alertError.open();
    return;
  }

  // Fechando o alerta de erro se não houver problemas
  alertError.close();

  // Calculando o IMC e gerando a mensagem
  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  // Atualizando a mensagem no modal
  Modal.message.innerText = message;

  // Abrindo o modal
  Modal.open();
};

// Fechando o alerta de erro ao digitar no campo de peso
inputWeight.oninput = () => alertError.close();

// Fechando o alerta de erro ao digitar no campo de altura
inputHeight.oninput = () => alertError.close();
