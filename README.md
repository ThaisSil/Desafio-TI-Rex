## Projeto TI Rex - Desafio 1

Esse projeto tem como objetivo desenvolver um site utilizando HTML, CSS e JavaScript, com funcionalidade de cadastro, login e um quadro Kanban. O design e a interface do usuário foram desenvolvidos com base no layout fornecido no Figma.

### Estrutura do Projeto:

├── index.html           // Página inicial (Home)

├── login.html           // Página de Login

├── kanban.html          // Página do Quadro Kanban

├── css/                 // Estilos CSS

├── js/                  // Scripts JavaScript

└── imagem/              // Imagens do projeto

🔹 Funcionalidades

🏠 Página Inicial (index.html)

Botão Login no cabeçalho.

Botão Get Started, que também redireciona para a página de login.

Formulário para preenchimento de nome e e-mail.

Validações:

Verificação do formato de e-mail com RegEx.

Campos obrigatórios (nome e e-mail).

Armazenamento dos dados válidos no LocalStorage.

🔐 Página de Login (login.html)

Formulário de autenticação com campos de e-mail e senha.

Validações:

E-mail validado com RegEx.

Campo de senha obrigatório.

Em caso de erro, alertas são exibidos.

Em caso de sucesso, o usuário é redirecionado para a página kanban.html.

📋 Quadro Kanban (kanban.html)
Estrutura de Kanban com três colunas:

To Do

In Progress

Complete

Menu no cabeçalho com opções, incluindo o redirecionamento para a Home.

💡Tecnologias Utilizadas:

HTML5

CSS3

JavaScript (ES6)

LocalStorage

✅ Validações e Armazenamento

Expressões Regulares (RegEx) para validação de e-mail.

Verificação de campos obrigatórios.

Armazenamento dos dados de cadastro no LocalStorage do navegador.

Navegação entre páginas conforme o fluxo do usuário (Home → Login → Kanban).
  
