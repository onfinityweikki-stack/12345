// Edite apenas este arquivo para trocar textos, imóvel e contato.
// Todos os valores entre [colchetes] são placeholders e precisam ser preenchidos com dados reais.
window.UGC_CONFIG = {
  duration: 24, // segundos

  creator: {
    name: "[Seu nome]",
    creci: "CRECI [número]",
    handle: "@[seu_instagram]",
  },

  hook: "Procurando imóvel? Veja isso antes de visitar qualquer casa.",
  problem: "Chega de visitas perdidas. Eu filtro para você.",

  property: {
    image: null, // ex.: "assets/imovel.jpg" (foto real do imóvel). Se null, usa o card de placeholder.
    tag: "Oportunidade",
    title: "Apartamento 3 quartos",
    location: "[Bairro] · [Cidade]",
    price: "R$ [valor]",
    highlights: [
      "[X] m² privativos",
      "[Y] vaga(s) de garagem",
      "[diferencial 1]",
      "[diferencial 2]",
    ],
  },

  cta: {
    title: "Agende sua visita",
    line: "Chama no WhatsApp",
    value: "[seu número com DDD]",
  },

  end: {
    line1: "Link na bio",
    line2: "Mais imóveis toda semana",
  },

  // Legenda (estilo UGC). Tempos em segundos.
  captions: [
    { from: 0.0, to: 3.6, text: "Quer comprar ou alugar? Olha isso antes." },
    { from: 3.6, to: 6.5, text: "Eu mostro só o que realmente importa." },
    { from: 6.5, to: 10.5, text: "Esse é o destaque da semana." },
    { from: 10.5, to: 15.0, text: "Confira os diferenciais antes de visitar." },
    { from: 15.0, to: 19.5, text: "Quer ver pessoalmente? Chama no WhatsApp." },
  ],
};
