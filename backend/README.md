## Executando a aplicação

Após clonar o repositório, acesse a pasta do projeto:

    cd fast-feet/backend

Em seguida, instale as dependências:

    npm i
    npm install -g sequelize-cli

Criação das Migrations e Seeds:

    sequelize db:migrate
    sequelize db:seed:all

Inicie o projeto:

    npm start
