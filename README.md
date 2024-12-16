## Projeto TI Rex - Desafio 1

Esse projeto tem como objetivo desenvolver um site utilizando HTML, CSS e JavaScript, com funcionalidade de cadastro, login e um quadro Kanban. O design e a interface do usuário foram desenvolvidos com base no layout fornecido no Figma.

### Estrutura do Projeto:

**index.html:** 
Página principal do site
Na Home está localizado o botão de Login, na header, e o botão Get Started, que direciona para a página de login. Logo abaixo, ainda na Home, encontra-se um formulário, onde deve ser preenchido e-mail e nome, as informações são armazenadas no LocalStorage.
**login.html**
Página de login
Na página login existe um formulário para autenticação de usuários com validação de e-mail e senha. Assim que os campos são preenchidos corretamente a página é direcionada para a página kanban.
**kanban.html**
Página kanban
Econtra-se uma quadro kanban com as colunas "To Do", "In Progress" e "Complete". Na header existe algumas opções de menu, entre eles um que direciona para a home.

**css:** arquivo com os estilos para as páginas

**image:** Pasta para armazenar imagens do projeto

**js:** arquivo com os scripts para as páginas
  - Cadastro:
    Validação do formulário: para a validação do e-mail utiliza-se uma expressão regular(RegEx);
    Caso o e-mail inserido não seja válido ou o campo nome não esteja preenchido um alert é emitido;
    Todas as validações sendo 'true' as informações inseridas são armazenadas no LocalStorage.
  - Login:
    Validação do formulário: para a validação do e-mail utiliza-se uma expressão regular(RegEx);
    O campo senha deve estar preenchido;
    Caso o e-mail inserido não seja válido ou o campo senha não esteja devidamente preenchido um alert é emitido.
    Todas as validações sendo 'true' é direcionado para a página kanban.

  
