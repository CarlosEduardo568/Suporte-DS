# Guia Prático do Estudante — DevEd Hub (Foco em JavaScript)

Bem-vindo(a)! Neste projeto de **2 aulas de Front-End**, o **HTML e o CSS já estão 100% prontos**. Sua missão é escrever o arquivo `script.js` para transformar a página de FAQ (com os PDFs feitos pelo **2º ano**) em um sistema de **busca dinâmica e interativa com JavaScript**.

---

## Preparação (2 minutos)

1. Abra o **VS Code**.
2. Vá em **File > Open Folder...** e abra a pasta `aluno/`.
3. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.
4. Abra o arquivo `script.js` e mantenha o DevTools (`F12` → aba **Console**) aberto para acompanhar testes e possíveis erros.

---

## Aula 1 — DOM e Busca Dinâmica em Tempo Real (50 min)

Antes de codar, inspecione rapidamente um `<article class="cartao-faq">` no `index.html` para ver os atributos:
- `data-categoria="..."` → categoria do guia (ex.: `vscode`, `atalhos`, `email`, `lab`)
- `data-palavras-chave="..."` → palavras extras para facilitar a busca

No arquivo `script.js`, complete:

1. **PASSO 1:** Confira a seleção dos elementos do DOM (`campoBusca`, `cartoesFaq`, `contadorResultados`, `estadoVazio`, `botaoLimpar`, etc.).
2. **PASSO 2:** Implemente `normalizarTexto(texto)` para deixar tudo em minúsculas e sem espaços extras (e, se quiser, sem acentos).
3. **PASSO 3:** Implemente `aplicarFiltros()`:
   - Pegue `termoDigitado = normalizarTexto(campoBusca.value)`.
   - Percorra `cartoesFaq` com `.forEach((cartao) => { ... })`.
   - Compare `categoriaAtual` e `termoDigitado` usando `.includes()`.
   - Remova ou adicione a classe `'oculto'` em cada `cartao`.
   - Atualize `contadorResultados`, `estadoVazio` e `botaoLimpar`.
4. **PASSO 4:** Conecte o evento `'input'` no `campoBusca` chamando `aplicarFiltros`.

**Checkpoint da Aula 1:** Ao digitar `vscode`, `windows` ou `aluno` na barra de busca, os cartões devem filtrar em tempo real, atualizar o contador e exibir a mensagem de nenhum resultado quando você digitar algo inexistente!

---

## Aula 2 — Filtros por Categoria, Acordeão e UX (50 min)

Continue no mesmo arquivo `script.js`:

5. **PASSO 5:** Crie `selecionarCategoria(categoria)` e conecte o evento `'click'` nos `botoesFiltro` (`// todos`, `#vscode`, `#atalhos`, `#email-aluno`, `#lab-terminal`), atualizando `rotuloFiltroAtivo` e a classe `'ativo'`.
6. **PASSO 6:** Programe os cliques em `botaoLimpar`, `botaoResetarFiltros` e nos `botoesSugestao` do estado vazio.
7. **PASSO 7:** Programe o acordeão (`botoesAcordeao`) usando `botao.closest('.cartao-faq')` para abrir e fechar o passo a passo rápido de cada cartão.

---

## Desafios Extras (Para quem terminar antes!)

- **Nível 1 (Acentos):** Na função `normalizarTexto`, adicione `.normalize('NFD').replace(/[\u0300-\u036f]/g, '')` para que `"atálho"` encontre `"atalho"`.
- **Nível 2 (Atalho de teclado):** Escute `'keydown'` no `document` para que `/` ou `Ctrl + K` foquem o `campoBusca`, e `Escape` limpe a busca.
- **Nível 3 (Favoritos):** Adicione um botão de favorito em cada cartão e salve os favoritos no `localStorage`.
