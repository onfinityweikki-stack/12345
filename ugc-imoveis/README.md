# Vídeo UGC de imóveis (9:16, 1080×1920, 24 s)

Template de vídeo no estilo UGC (conteúdo com cara de depoimento pessoal), gerado
a partir de HTML + Playwright (quadro a quadro) + ffmpeg. Não tem áudio: a narração
e a trilha entram depois, no app de edição.

## Estrutura do vídeo

| Tempo      | Cena                         | O que aparece                                   |
|------------|------------------------------|-------------------------------------------------|
| 0,0–3,6 s  | Gancho                       | Foto do apresentador + frase de abertura         |
| 3,6–6,5 s  | Problema                     | Foto do apresentador + frase de contexto         |
| 6,5–15 s   | Imóvel                       | Card com foto, título, bairro, preço e diferenciais |
| 15–19,5 s  | Chamada para ação            | Foto do apresentador + botão de WhatsApp         |
| 19,5–24 s  | Encerramento                 | Nome, CRECI, @ e "Link na bio"                   |

As legendas ficam na parte de baixo e estão em `video.config.js` (campo `captions`).

## Arquivos

- `video.config.js`: todos os textos, dados do imóvel e contato. É o único arquivo que você precisa editar.
- `index.html`: composição visual e animações (funções de tempo, sem dependências externas).
- `render.cjs`: gera os quadros e monta `out/ugc-imoveis.mp4`.
- `assets/presenter.jpg`: foto enviada (use apenas com autorização da pessoa retratada).

## Como gerar

```bash
cd ugc-imoveis
node render.cjs            # gera out/ugc-imoveis.mp4
```

Pré-requisitos: Node 18+ com `playwright` instalado e ffmpeg no PATH.

## Antes de publicar (checklist)

- [ ] Preencher todos os campos entre [colchetes] em `video.config.js`.
- [ ] Trocar o placeholder pela foto real do imóvel (`property.image`), com data e ângulo reais.
- [ ] Conferir cada diferencial citado: só afirmar o que está no imóvel e na documentação.
- [ ] Confirmar com a pessoa da foto que ela aceita aparecer no vídeo e dizer o roteiro. Se ela for falar, grave a voz dela (não gere voz sintética no lugar dela).
- [ ] Adicionar narração e trilha no editor (CapCut, Premiere etc.) e conferir as legendas com o áudio.
- [ ] Verificar a divulgação exigida para anúncios de imóveis e o número de CRECI.
