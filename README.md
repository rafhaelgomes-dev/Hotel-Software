# Projeto Hotel Software
 Sistema para gestão de Hoteis desenvolvido com VueJs no frontend e NodeJs com express, PostgreSQL e Docker no Backend.
<hr></hr>

## 🛠 Habilidades
VueJS, NodeJs, ExpressJs, PostgreSQL, Prisma, Docker, Axios, JavaScript. 

<hr></hr>

## Utilização

- Para instalar as dependências basta rodar o comando `npm install` e acessar as funcionalidades da aplicação.

- No Backend já existe um arquivo `docker-compose.yml`, use o comando `docker-compose up -d` para rodar o PostgreSQL pelo Docker.

- Após rodar o docker-compose no Backend basta rodar `npx prisma migrate dev HotelSoftware` para criar o banco de dados e usar os migrates pelo Prisma.

- Feito todo esse procedimento anterior no Backend rode `npm run dev` para iniciar a aplicação.

- No frontend basta rodar `npm run serve` para iniciar a aplicação.

- Utilizar alguma Plataforma de API para acessar os endpoints e entender seus comportamentos. Exemplos: Postman e Insomnia (Utilizado no desenvolvimento desse projeto).

<hr></hr>
