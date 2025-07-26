// Função que calcula o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

// Função que determina o nível com base nas vitórias
function determinarNivel(vitorias) {
  if (vitorias < 10) {
    return "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    return "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    return "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    return "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    return "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

// Função principal que exibe a mensagem final
function exibirResultado(vitorias, derrotas) {
  const saldoVitorias = calcularSaldo(vitorias, derrotas);
  const nivel = determinarNivel(vitorias);
  console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplo de execução usando um laço para testar diferentes valores
for (let i = 0; i < 3; i++) {
  let vitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
  let derrotas = parseInt(prompt("Digite a quantidade de derrotas:"));

  if (!isNaN(vitorias) && !isNaN(derrotas)) {
    exibirResultado(vitorias, derrotas);
  } else {
    console.log("Por favor, digite números válidos.");
  }
}