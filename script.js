// ============================================================================
// DevEd Hub - FAQ & Guias Práticos de DS (Versão do Aluno)
// O HTML e o CSS já estão 100% prontos!
// Seu foco nestas 2 aulas é programar toda a lógica em JavaScript abaixo.
// ============================================================================

// ============================================================================
// AULA 1 - PASSO 1: Selecionar os elementos do HTML (DOM)
// Dica: use document.getElementById('id') e document.querySelectorAll('.classe')
// ============================================================================
const campoBusca = document.getElementById('campo-busca');
const botaoLimpar = document.getElementById('botao-limpar');
const botaoResetarFiltros = document.getElementById('botao-resetar-filtros');
const botaoAtalhoBusca = document.getElementById('botao-atalho-busca');
const contadorResultados = document.getElementById('contador-resultados');
const rotuloFiltroAtivo = document.getElementById('rotulo-filtro-ativo');
const estadoVazio = document.getElementById('estado-vazio');

// TODO (PASSO 1): Selecione as listas de elementos usando querySelectorAll:
// - cartoesFaq -> '.cartao-faq'
// - botoesFiltro -> '.filtro-categoria'
// - botoesAcordeao -> '.botao-acordeao'
// - botoesSugestao -> '.botao-sugestao'
const cartoesFaq = document.querySelectorAll('.cartao-faq');
const botoesFiltro = document.querySelectorAll('.filtro-categoria');
const botoesAcordeao = document.querySelectorAll('.botao-acordeao');
const botoesSugestao = document.querySelectorAll('.botao-sugestao');

// Variável que guarda a categoria selecionada no momento ('todos', 'vscode', 'atalhos', 'email', 'lab')
let categoriaAtual = 'todos';


// ============================================================================
// AULA 1 - PASSO 2: Criar função para padronizar (normalizar) textos
// Objetivo: transformar em minúsculas (.toLowerCase()) e remover espaços (.trim())
// Dica extra: para ignorar acentos, adicione:
//   .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
// ============================================================================
function normalizarTexto(texto) {
  // TODO (PASSO 2): retorne o texto tratado
  return texto.toLowerCase().trim();
}


// ============================================================================
// AULA 1 - PASSO 3: Criar a função principal aplicarFiltros()
// Siga esta receita passo a passo:
// 1. Pegue o termo digitado: const termoDigitado = normalizarTexto(campoBusca.value);
// 2. Crie um contador: let quantidadeVisiveis = 0;
// 3. Percorra cada cartão em cartoesFaq com .forEach((cartao) => { ... }):
//    - Leia os atributos:
//      const categorias = normalizarTexto(cartao.dataset.categoria || '');
//      const palavrasChave = normalizarTexto(cartao.dataset.palavrasChave || '');
//      const textoVisivel = normalizarTexto(cartao.textContent || '');
//    - Verifique a categoria:
//      const combinaCategoria = categoriaAtual === 'todos' || categorias.includes(categoriaAtual);
//    - Verifique o texto digitado:
//      const combinaBusca =
//        termoDigitado === '' ||
//        palavrasChave.includes(termoDigitado) ||
//        textoVisivel.includes(termoDigitado);
//    - Se combinar com os dois:
//      cartao.classList.remove('oculto');
//      quantidadeVisiveis++;
//    - Senão:
//      cartao.classList.add('oculto');
// 4. Atualize o contador na tela:
//    contadorResultados.textContent = `Exibindo ${quantidadeVisiveis} de ${cartoesFaq.length} guias`;
// 5. Se quantidadeVisiveis === 0, remova 'oculto' de estadoVazio; senão adicione 'oculto'.
// 6. Se termoDigitado.length > 0, remova 'oculto' de botaoLimpar; senão adicione 'oculto'.
// ============================================================================
function aplicarFiltros() {
  // Escreva seu código aqui!
}


// ============================================================================
// AULA 1 - PASSO 4: Ativar a busca em tempo real
// Escute o evento 'input' no campoBusca e chame a função aplicarFiltros
// ============================================================================

// TODO (PASSO 4): campoBusca.addEventListener('input', aplicarFiltros);


// ============================================================================
// AULA 2 - PASSO 5: Filtro por categoria (botões #vscode, #atalhos, etc.)
// Crie a função selecionarCategoria(categoria):
// 1. Atualize categoriaAtual = categoria;
// 2. Atualize rotuloFiltroAtivo.textContent ('TODOS' ou `#${categoria.toUpperCase()}`);
// 3. Percorra botoesFiltro com .forEach((botao) => { ... }) e use:
//    botao.classList.toggle('ativo', botao.dataset.filtro === categoria);
// 4. Chame aplicarFiltros();
// Depois, adicione um addEventListener('click', ...) em cada botão de botoesFiltro.
// ============================================================================

// TODO (PASSO 5): escreva a função selecionarCategoria e o clique nos botoesFiltro


// ============================================================================
// AULA 2 - PASSO 6: Botões "Limpar", "Limpar busca e filtros" e Sugestões
// - botaoLimpar: limpa campoBusca.value, dá foco e chama aplicarFiltros()
// - botaoResetarFiltros: limpa campoBusca.value, chama selecionarCategoria('todos') e dá foco
// - botoesSugestao: coloca botao.dataset.sugestao em campoBusca.value e chama selecionarCategoria('todos')
// ============================================================================

// TODO (PASSO 6): conecte os eventos de clique desses botões


// ============================================================================
// AULA 2 - PASSO 7: Acordeão ("Ver passo a passo rápido")
// Para cada botão em botoesAcordeao, ao clicar:
// 1. Encontre o cartão pai: const cartao = botao.closest('.cartao-faq');
// 2. Encontre o conteúdo e o ícone:
//    const conteudo = cartao.querySelector('.conteudo-acordeao');
//    const icone = botao.querySelector('.icone-acordeao');
// 3. Verifique se já está aberto: const estaAberto = botao.getAttribute('aria-expanded') === 'true';
// 4. Atualize aria-expanded, alterne 'oculto' no conteudo, 'aberto' no cartao e troque icone entre '+' e '−'.
// ============================================================================

// TODO (PASSO 7): programe o acordeão aqui


// ============================================================================
// DESAFIO EXTRA (Para quem terminar antes!):
// 1. Criar função focarBusca() e conectar ao clique do botaoAtalhoBusca
// 2. Escutar 'keydown' no document para:
//    - '/' ou 'Ctrl + K' focar o campoBusca
//    - 'Escape' limpar a busca quando o usuário estiver digitando nela
// ============================================================================

// Executa uma vez ao carregar a página
aplicarFiltros();
