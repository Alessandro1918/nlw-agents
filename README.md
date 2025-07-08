# nlw-agents

## 🚀 Projeto
Gerencia aulas com salas e perguntas. Domine o poder da IA transcrevendo audios e tirando dúvidas em tempo real. Aplicação desenvolvida durante a Next Level Week, realizada pela [@Rocketseat](https://app.rocketseat.com.br/) em jul/25.

Status: 🚧 Em construção 🚧

## 🛠️ Tecnologias
- 📊 Backend: [Node.js](https://nodejs.org/en/) | [Drizzle](https://orm.drizzle.team) | [Docker](https://www.docker.com) | [Fastify](https://fastify.dev) | [Zod](https://zod.dev)
- 🖼️ Frontend: [React](https://pt-br.reactjs.org) | [Tailwind CSS](https://tailwindcss.com) | [TanStack React Query](https://tanstack.com/query/)

## 🗂️ Utilização

### 🐑🐑 Clonando o repositório:

```bash
  $ git clone url-do-projeto.git
```

### ▶️ Rodando o App:

📊 Backend
```bash
  $ cd back                   # change to this directory
  $ cp .env.example .env      # create the ".env" file like the ".env.example" file
  $ docker compose up -d      # setup the Docker database
  $ npm install               # download dependencies to node_modules
  $ npx prisma migrate dev    # creates the local dev.db file
  $ npx drizzle-kit generate  # optional: create the .sql files based on the db schema
  $ npx drizzle-kit migrate   # execute the migrations
  $ npm run db:seed           # populate the db with fake data (check seed.ts file)
  $ npx drizzle-kit studio    # db management thru a control panel in a web browser tab
  $ npm run dev               # start the project
```

🖼️ Frontend
```bash
  $ cd front                #change to this directory
  $ npm install             #download dependencies to node_modules
  $ npm run dev             #start the project
```