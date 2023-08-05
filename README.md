## Projeto Desafio Full Stack 

O Projeto Desafio Full Stack é uma emocionante iniciativa que aborda uma jornada completa de desenvolvimento web. Neste projeto, o objetivo é criar um site com funcionalidades essenciais, tais como uma página de login, uma página de cadastro e um dashboard para visualizar os clientes cadastrados no site. Além disso, os usuários poderão criar, visualizar, atualizar e excluir contatos salvos em seus perfis, seguindo o padrão CRUD (Create, Read, Update e Delete). Essa versão inicial representa o MVP (Minimum Viable Product), contendo as principais funcionalidades para uma experiência mínima, mas funcional.

Para concretizar o Desafio Full Stack, foram selecionadas tecnologias modernas e eficientes, as quais foram essenciais para o desenvolvimento completo do site. As principais tecnologias utilizadas no projeto são:

-Express: Um framework web para Node.js que simplifica a criação de servidores e gerenciamento de rotas.

-TypeScript: Uma linguagem que adiciona tipagem estática ao JavaScript, garantindo maior segurança e facilitando a manutenção do código.

-React: Uma biblioteca JavaScript para criar interfaces de usuário interativas e reativas, proporcionando uma experiência mais dinâmica e fluida.

-Axios: Uma biblioteca que facilita o envio de requisições HTTP do frontend para o backend, aprimorando a comunicação entre as partes.

-Zod: Uma biblioteca TypeScript para validar e garantir a integridade dos dados recebidos pelo servidor, evitando erros e vulnerabilidades.

-Styled-components: Uma biblioteca que permite estilizar os componentes React através de CSS-in-JS, proporcionando um desenvolvimento mais organizado e modular.

-Toastify: Uma biblioteca que permite exibir notificações e mensagens ao usuário de forma elegante, melhorando a experiência geral da aplicação.

-SQLite3: Um banco de dados leve e embutido, ideal para projetos menores e testes locais.

-TypeORM: Uma ferramenta de mapeamento objeto-relacional (ORM) que facilita a interação com o banco de dados, tornando as operações de banco de dados mais simples e intuitivas.

-Bcryptjs: Uma biblioteca para criptografar senhas, aumentando a segurança das informações dos usuários.

## A estrutura do Projeto Desafio Full Stack foi organizada em dois diretórios principais:


/backend: Este diretório contém todos os arquivos relacionados ao servidor e à lógica do backend.

/src: Aqui está o código-fonte do backend, onde encontramos os seguintes subdiretórios:

/controllers: Responsável por conter os controladores que lidam com as requisições HTTP e a lógica de negócio da aplicação.

/routes: Contém as rotas da API que definem os endpoints e as ações correspondentes.

server.js: O arquivo principal que inicia o servidor e configura as dependências necessárias para o funcionamento da aplicação.

/frontend: Este diretório contém todos os arquivos relacionados à interface do usuário e à lógica do frontend.

## Para executar a aplicação, siga os seguintes passos:

Clone o repositório usando o comando:

"git clone git@github.com:Djefferson99/Desafio-Fullstack-Djefferson99.git"

1.Crie um banco de dados no PostgreSQL (psql).

2.Crie um arquivo ".env" na raiz do diretório "backend" e configure-o conforme o exemplo fornecido no arquivo ".env.exemplo" dentro do mesmo diretório.

3.No diretório "backend", instale as dependências com o comando:

"npm i"

1.Após a instalação das dependências, inicie o servidor com o comando:

"npm run dev"

1.Ao rodar o servidor, você verá um link que aparecerá. Segure a tecla "Ctrl" e clique no link para acessar a aplicação no navegador. Alternativamente, você pode testar as rotas diretamente no Insomnia importando o arquivo "Insomnia_2023-08-02.json" localizado no diretório "backend". Neste arquivo, você encontrará as rotas para criar, ler, atualizar e excluir contatos e usuários, além da rota de login.

O Projeto Desafio Full Stack é uma oportunidade empolgante para vivenciar uma experiência completa de desenvolvimento web, utilizando tecnologias de ponta e desenvolvendo um site funcional e atraente. Com essas habilidades adquiridas, você estará preparado para enfrentar desafios futuros no mundo do desenvolvimento de software Full Stack.

