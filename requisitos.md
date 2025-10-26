# Levantamento de Requisitos: App de Notas e Tarefas

Aplicativo web simples para gerenciamento de notas e listas de tarefas.

Foco em dispositivos móveis (mobile-first), armazenamento local (sem backend/nuvem) e sem necessidade de autenticação.

## Requisitos Funcionais

- **RF01: Gerenciamento de Notas**
  - RF01.1: O usuário deve ser capaz de criar uma nova nota, fornecendo um título e um conteúdo (corpo de texto).
  - RF01.2: O usuário deve ser capaz de visualizar uma lista de todas as notas criadas, exibindo seus títulos e, opcionalmente, um trecho do conteúdo.
  - RF01.3: O usuário deve ser capaz de selecionar uma nota da lista para visualizar e ler seu conteúdo completo.
  - RF01.4: O usuário deve ser capaz de editar o título e o conteúdo de uma nota existente.
  - RF01.5: O usuário deve ser capaz de excluir uma nota. O sistema deve solicitar confirmação antes da exclusão.
- **RF02: Gerenciamento de Listas de Tarefas (Múltiplas Listas)**
  - RF02.1: O usuário deve ser capaz de criar uma nova lista de tarefas (ex: "Compras", "Trabalho", "Estudos").
  - RF02.2: O usuário deve ser capaz de visualizar todas as listas de tarefas criadas.
  - RF02.3: O usuário deve ser capaz de editar o nome de uma lista de tarefas existente.
  - RF02.4: O usuário deve ser capaz de excluir uma lista de tarefas inteira, incluindo todas as tarefas contidas nela. O sistema deve solicitar confirmação.
- **RF03: Gerenciamento de Tarefas (Itens dentro de uma Lista)**
  - RF03.1: Dentro de uma lista de tarefas selecionada, o usuário deve ser capaz de adicionar novas tarefas (itens).
  - RF03.2: O usuário deve ser capaz de marcar uma tarefa como "concluída".
  - RF03.3: Tarefas concluídas devem ser visualmente diferenciadas (ex: riscadas, com cor de fundo diferente).
  - RF03.4: O usuário deve ser capaz de desmarcar uma tarefa "concluída", retornando-a ao estado "pendente".
  - RF03.5: O usuário deve ser capaz de editar o texto de uma tarefa existente.
  - RF03.6: O usuário deve ser capaz de excluir uma tarefa individual de uma lista.
  - RF03.7: O usuário deve ser capaz de reordenar as tarefas dentro de uma lista (ex: arrastando e soltando).

## Requisitos Não Funcionais

- **RNF01: Plataforma e Tecnologia**
  - RNF01.1 (Tecnologia): O aplicativo deve ser desenvolvido usando tecnologias web padrão: HTML5, CSS3 e JavaScript (sem frameworks complexos, ou usando um framework leve como Vanilla JS ou Svelte/Vue, se preferido, desde que mantenha a simplicidade).
  - RNF01.2 (Compatibilidade): O aplicativo deve ser compatível com as versões mais recentes dos principais navegadores móveis (Chrome para Android, Safari para iOS) e desktop (Chrome, Firefox, Safari, Edge).
- **RNF02: Design e Usabilidade (UX/UI)**
  - RNF02.1 (Mobile-First): O design deve ser concebido primeiramente para dispositivos móveis (smartphones) e, em seguida, adaptado para telas maiores (tablets e desktops).
  - RNF02.2 (Responsividade): A interface deve ser totalmente responsiva e se ajustar fluidamente a diferentes tamanhos de tela e orientações (retrato/paisagem).
  - RNF02.3 (Intuitividade): A interface deve ser limpa, minimalista e intuitiva. As ações principais (criar, excluir, completar) devem ser óbvias e de fácil acesso.
  - RNF02.4 (Acessibilidade): O aplicativo deve seguir práticas básicas de acessibilidade (WCAG), como contraste de cor adequado, tamanho de fonte legível e navegação por teclado (para a versão desktop).
- **RNF03: Armazenamento de Dados**
  - RNF03.1 (Local): Todos os dados do usuário (notas e tarefas) devem ser armazenados exclusivamente no dispositivo local do usuário.
  - RNF03.2 (Tecnologia de Armazenamento): O armazenamento deve ser implementado usando APIs do navegador, como localStorage ou IndexedDB. (Nota: localStorage é mais simples, mas IndexedDB é mais robusto para volumes maiores de dados).
  - RNF03.3 (Persistência): Os dados devem persistir mesmo após o usuário fechar e reabrir o navegador ou a aba do aplicativo.
  - RNF03.4 (Isolamento de Dados): Os dados não devem ser enviados para nenhum servidor externo.
- **RNF04: Autenticação e Segurança**
  - RNF04.1 (Sem Autenticação): O sistema não deve ter nenhum recurso de login, cadastro ou autenticação de usuário. O acesso é direto.
  - RNF04.2 (Segurança Local): O aplicativo deve garantir que os dados inseridos pelo usuário sejam tratados de forma segura no front-end para prevenir ataques de Cross-Site Scripting (XSS) (ex: não usar innerHTML com dados do usuário).
- **RNF 05: Desempenho**
  - RNF05.1 (Carregamento Rápido): O aplicativo deve ter um tempo de carregamento inicial muito rápido (idealmente, "First Contentful Paint" abaixo de 2 segundos em uma conexão 3G móvel).
  - RNF05.2 (Resposta Imediata): As interações do usuário (criar uma nota, marcar uma tarefa) devem ter resposta visual imediata (< 100ms), sem atrasos perceptíveis.
- **RNF06: Progressive Web App (PWA)**
  - RNF06.1 (Instalável): O aplicativo deve fornecer um arquivo manifest.json (Web App Manifest) válido, permitindo que seja "instalado" (adicionado à tela inicial) em dispositivos compatíveis, com ícone, nome e modo de exibição "standalone".
  - RNF06.2 (Capacidade Offline): O aplicativo deve registrar um Service Worker para armazenar em cache os principais arquivos da aplicação (HTML, CSS, JS, ícones). Isso garante que o aplicativo possa ser iniciado e utilizado mesmo sem conexão com a internet.
  - RNF06.3 (Segurança): O aplicativo deve ser servido obrigatoriamente via HTTPS, pois é um pré-requisito para o funcionamento de Service Workers.

