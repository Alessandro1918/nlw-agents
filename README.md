# nlw-agents

## 🚀 Projeto
Gerencie perguntas durante suas lives. Domine o poder da IA transcrevendo seu audio e respondendo dúvidas de usuários em tempo real. Aplicação desenvolvida durante a Next Level Week, realizada pela [@Rocketseat](https://app.rocketseat.com.br/) em jul/25.

## 🧊 Cool features:
- Transcrição texto-áudio e criação de embeddings para pesquisas semânticas usando a [Gemini - API de IA da Google](https://aistudio.google.com/welcome)

## 🛠️ Tecnologias
- 📊 Backend: [Node.js](https://nodejs.org/en/) | [Drizzle ORM](https://orm.drizzle.team) | [Docker](https://www.docker.com) | [Fastify](https://fastify.dev) | [Google Gemini](https://aistudio.google.com/welcome)
- 🖼️ Frontend: [React](https://pt-br.reactjs.org) | [Tailwind CSS](https://tailwindcss.com) | [TanStack React Query](https://tanstack.com/query/)

## 🗂️ Utilização

### 🐑🐑 Clonando o repositório:

```bash
  $ git clone url-do-projeto.git
```

### 🔑 Configurando a Google Gemini API:
- [Crie uma chave de API](https://aistudio.google.com/app/apikey)
- Adicione a chave de API ao seu arquivo <code>.env</code>, de acordo com o arquivo <code>.env.example</code>

### ▶️ Rodando o App:

🐳 Terminal 1: Docker (Database)
```bash
  $ cd back                   # change to this directory
  $ docker compose up         # build the image and runs the container
  $ ctrl + C                  # stop the container
  $ docker compose down       # delete the container
```

📊 Terminal 2: Backend (Servidor)
```bash
  $ cd back                   # change to this directory
  $ npm install               # download dependencies to node_modules
  $ npx drizzle-kit generate  # optional: create the .sql files based on the db schema
  $ npx drizzle-kit migrate   # execute SQL commands from the db/migrations files
  $ npm run db:seed           # populate the db with fake data - check "db/seed.ts" file (comment out "audioChunks" from db/schema/index.ts first; running "drizzle-kit introspect" or "drizzle-kit push" on a schema with a table with vector(768) columns will fail)
  $ npx drizzle-kit studio    # db management thru a control panel in a web browser tab (in Beta yet - does not work well on Safari browsers)
  $ npm run dev               # start the project (since V22.6.0, Node.js has experimental support for TypeScript syntax. You can write code that's valid TypeScript directly in Node.js without the need to transpile it first. More on: https://nodejs.org/en/learn/typescript/run-natively)
```

🖼️ Terminal 3: Frontend (Site web)
```bash
  $ cd front        # change to this directory
  $ npm install     # download dependencies to node_modules
  $ npm run dev     # start the project
```
Confira online em: <code>http://localhost:5173</code>

## ⭐ Like, Subscribe, Follow!
Curtiu o projeto? Marque esse repositório com uma Estrela ⭐!