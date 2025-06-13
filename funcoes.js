// importando o prompt-sync
import prompt from 'prompt-sync'
let ler = prompt()

  // Objeto dos destinos
  export let destinos = {
    brasil: { moeda: "Real", cambio: 1, clima: "Tropical", tempoVoo: 2 },
    eua: { moeda: "Dólar", cambio: 5.2, clima: "Temperado", tempoVoo: 10 },
    japao: { moeda: "Iene", cambio: 0.035, clima: "Variado", tempoVoo: 24 },
    franca: { moeda: "Euro", cambio: 5.5, clima: "Europeu", tempoVoo: 12 },
    canada: { moeda: "Dólar Canadense", cambio: 3.9, clima: "Frio", tempoVoo: 11 },
    mexico: { moeda: "Peso Mexicano", cambio: 0.29, clima: "Quente e seco", tempoVoo: 9 },
    portugal: { moeda: "Euro", cambio: 5.5, clima: "Mediterrânico", tempoVoo: 9 },
    australia: { moeda: "Dólar Australiano", cambio: 3.4, clima: "Quente e úmido", tempoVoo: 20 },
    egito: { moeda: "Libra Egípcia", cambio: 0.17, clima: "Desértico", tempoVoo: 14 },
    italia: { moeda: "Euro", cambio: 5.5, clima: "Mediterrânico", tempoVoo: 11 },
    espanha: { moeda: "Euro", cambio: 5.5, clima: "Mediterrânico", tempoVoo: 10 },
    alemanha: { moeda: "Euro", cambio: 5.5, clima: "Frio/Temperado", tempoVoo: 11 },
    china: { moeda: "Yuan", cambio: 0.72, clima: "Variado", tempoVoo: 22 },
    india: { moeda: "Rupia Indiana", cambio: 0.063, clima: "Tropical", tempoVoo: 22 },
    argentina: { moeda: "Peso Argentino", cambio: 0.006, clima: "Temperado", tempoVoo: 3 },
    chile: { moeda: "Peso Chileno", cambio: 0.0056, clima: "Desértico", tempoVoo: 4 },
    inglaterra: { moeda: "Libra Esterlina", cambio: 6.4, clima: "Frio e úmido", tempoVoo: 11 },
    tailandia: { moeda: "Baht", cambio: 0.15, clima: "Tropical", tempoVoo: 20 },
    africadosul: { moeda: "Rand", cambio: 0.28, clima: "Subtropical", tempoVoo: 9 },
    coreiasul: { moeda: "Won", cambio: 0.004, clima: "Temperado", tempoVoo: 24 }
  }

  // Função principal
  export async function iniciarAssistente() {
    console.log("🌍 Bem-vindo ao Voegol - Assistente de Viagem!")
    await sleep(2000);
    let nome = ler("Qual seu nome? ")
    await sleep(2000);
    console.log("Olá, " + nome + "! Vamos planejar sua viagem!")
    await sleep(2000);
    escolherDestino()
  }

  // Escolha do destino
  export async function escolherDestino() {
    console.log("\nDestinos disponíveis:")

    // Mostra todos os destinos 
    for (let nome in destinos) {
      console.log("- " + nome)
              await sleep(2000);
    }
  //escolha do local
    let destino = ler("Digite o destino: ")

    if (destinos[destino]) {
      mostrarInfoDestino(destino)
      planejar(destino)
    } else {
      console.log("Destino não encontrado, tente novamente.")
      escolherDestino()
    }
  }

  //funcao para mostrar as informações de cada destino
  export async function mostrarInfoDestino(destino) {
    let info = destinos[destino]
    await sleep(2000);
    console.log(`Informações sobre ${destino}:`)
    await sleep(1000);
    console.log(`Moeda: ${info.moeda}`)
    await sleep(1000);
    console.log(`Clima: ${info.clima}`)
    await sleep(1000);
    console.log(`Tempo médio de voo: ${info.tempoVoo} horas`)
  }
  
  // Planejar viagem
  export async function planejar(destino) {
    console.log("Agora vamos planejar sua viagem:")
    await sleep(2000);
    let dias = Number(ler("Quantos dias pretende ficar? "))
    await sleep(2000);
    let gastosDiarios = Number(ler("Quanto pretende gastar por dia em REAIS? "))
    await sleep(2000);
    let totalReal = dias * gastosDiarios
    let moedaLocal = destinos[destino].moeda
    let valorConvertido = converterMoeda(destino, totalReal)
    await sleep(2000);
    console.log(`Total estimado: R$${totalReal.toFixed(2)}`)
    await sleep(2000);
    console.log(`Convertido em ${moedaLocal}: ${valorConvertido.toFixed(2)} ${moedaLocal}`)
    
    //escolha de roteiro de viagem
    let querRoteiro = ler("Deseja criar um roteiro de viagem? (sim/nao) ").toLowerCase()
    if (querRoteiro === 'sim') {
      criarRoteiro(dias)
    } else {
      console.log("Boa viagem! ")
    }
  }
  
  // Conversão de moeda
  export function converterMoeda(destino, valorEmReal) {
    return valorEmReal / destinos[destino].cambio
  }
  
  // Roteiro diário
  export async function criarRoteiro(dias) {
    console.log("Vamos montar seu roteiro diário!")
      await sleep(2000);

    for (let i = 1; i <= dias; i++) {
      let atividade = ler(`Dia ${i} - O que deseja fazer?`)
        await sleep(2000);
      console.log(`Dia ${i}: ${atividade}`)
    }
      await sleep(2000);
    console.log("Boa viagem e aproveite cada momento!")
  }


  function sleep(milisegundos) {
  return new Promise((ok, nok) => {
    setTimeout(ok, milisegundos);
  })
}