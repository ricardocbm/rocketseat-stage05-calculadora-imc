// Função que verifica se um valor não é um número válido
export function notAnumber(value) {
  // Retorna verdadeiro se o valor não for um número ou se for uma string vazia
  return isNaN(value) || value === "";
}

// Função para calcular o Índice de Massa Corporal (IMC)
export function IMC(weight, height) {
  // Fórmula do IMC: peso / (altura / 100) elevado ao quadrado, com resultado arredondado para 2 casas decimais
  return (weight / (height / 100) ** 2).toFixed(2);
}
