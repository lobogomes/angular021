# Creative Space — TODO

> Workspace pessoal e criativo. Frontend Angular 21, backend Node/Fastify + PostgreSQL.

---

## Legenda

- `[ ]` pendente · `[x]` feito · `[~]` em andamento · `[-]` descartado

---

## Frontend

### Shell / Infraestrutura

- [x] App standalone bootstrap (Angular 21, no NgModules)
- [x] Roteamento lazy por feature
- [x] PrimeNG 21 + Aura preset + Tailwind v4
- [x] Dark mode toggle (ThemeService)
- [x] Auth guard
- [x] Login (Signal Forms)
- [x] Dashboard shell — sidebar colapsável + header
- [x] Sidebar responsiva (overlay no mobile, push no desktop)
- [ ] Página 404 / fallback de rota
- [ ] Loading skeleton global durante lazy load de feature (`@defer` na rota)
- [ ] Toast / notification service global (PrimeNG Toast)
- [ ] HTTP interceptor — attach token + refresh silencioso
- [ ] HTTP interceptor — erro global (401 → logout, 5xx → toast)
- [ ] Favicon + meta tags (título dinâmico por rota)

### Tasks

- [ ] Listagem de tasks (`httpResource`, paginação)
- [ ] Criar task (Signal Form + validação)
- [ ] Editar task inline
- [ ] Deletar task (confirmação com `p-confirmdialog`)
- [ ] Filtros: status, prioridade, data
- [ ] Tags / categorias
- [ ] Sub-tasks (hierarquia simples)
- [ ] Ordenação drag-and-drop (CDK)

### Kanban

- [ ] Board com colunas configuráveis
- [ ] Drag-and-drop de cards entre colunas (CDK DragDrop)
- [ ] Criar/renomear/deletar coluna
- [ ] Card detalhe em `p-dialog`
- [ ] Persistência de ordem no backend

### Files

- [ ] Upload de arquivos (drag-and-drop)
- [ ] Progresso de upload (ProgressBar do PrimeNG)
- [ ] Preview de imagem / PDF com `@defer`
- [ ] Organização por pastas
- [ ] Download + exclusão

### Diary

- [ ] Listagem de entradas por data (calendário/timeline)
- [ ] Editor de texto rico (integrar Quill ou ProseMirror)
- [ ] Salvar rascunho automático (debounce + `httpResource` mutation)
- [ ] Mood tracker por entrada
- [ ] Busca full-text

### Catalog

- [ ] Grid de itens (livros, filmes, jogos — genérico)
- [ ] Infinite scroll com `IntersectionObserver`
- [ ] Filtros reativos com signals
- [ ] Status: quero, lendo/assistindo, concluído
- [ ] Rating + notas

### e-Pub Reader

- [ ] Import e parse de `.epub` (Web Worker)
- [ ] Renderização de capítulos com `@defer`
- [ ] Progresso de leitura persistido
- [ ] Ajuste de fonte e tema de leitura

### UX / Acessibilidade

- [ ] Foco gerenciado em modais e navegação por teclado
- [ ] ARIA labels nas rotas e componentes interativos
- [ ] Animações de entrada/saída entre rotas (`@angular/animations`)
- [ ] Empty states ilustrados por feature
- [ ] Suporte a gestos mobile (swipe para fechar sidebar)

---

## Backend

### Stack proposta

- **Runtime:** Node.js 22 LTS + TypeScript
- **Framework:** Fastify 5
- **ORM:** Drizzle ORM
- **Banco:** PostgreSQL 16
- **Auth:** JWT (access + refresh token) — sem sessão server-side
- **Validação:** Zod (schema compartilhável com frontend)
- **Testes:** Vitest + supertest

### Infraestrutura

- [ ] Setup do projeto (Fastify + TypeScript + ESM)
- [ ] Conexão com PostgreSQL via Drizzle
- [ ] Migrations (Drizzle Kit)
- [ ] Variáveis de ambiente com validação Zod (`.env`)
- [ ] Logger estruturado (Pino, já embutido no Fastify)
- [ ] Docker Compose (postgres + app)
- [ ] Dockerfile de produção (multi-stage)
- [ ] Health check endpoint `GET /health`
- [ ] CORS configurado para o frontend

### Auth

- [ ] `POST /auth/login` — retorna access token (JWT, 15 min) + refresh token (httpOnly cookie)
- [ ] `POST /auth/refresh` — renova access token via refresh token
- [ ] `POST /auth/logout` — invalida refresh token (tabela de blacklist ou rotação)
- [ ] Middleware de autenticação (verificação do JWT)
- [ ] Hash de senha com Argon2

### Tasks

- [ ] Schema Drizzle: `tasks`, `tags`, `task_tags`
- [ ] `GET /tasks` — listagem com filtros + paginação cursor-based
- [ ] `POST /tasks` — criar
- [ ] `PATCH /tasks/:id` — editar
- [ ] `DELETE /tasks/:id` — deletar (soft delete)
- [ ] `PATCH /tasks/:id/order` — reordenar

### Kanban

- [ ] Schema: `boards`, `columns`, `cards`
- [ ] CRUD de boards e colunas
- [ ] `PATCH /cards/:id/move` — mover card entre colunas

### Files

- [ ] Upload multipart com `@fastify/multipart`
- [ ] Storage local em dev / S3-compatible (MinIO) em prod
- [ ] `GET /files/:id` — servir arquivo com range support
- [ ] Metadados no banco (nome, mime, tamanho, pasta)
- [ ] Exclusão física + registro no banco

### Diary

- [ ] Schema: `entries`
- [ ] CRUD completo de entradas
- [ ] `GET /diary/search?q=` — busca full-text (PostgreSQL `tsvector`)

### Catalog

- [ ] Schema: `catalog_items`, `catalog_types`
- [ ] CRUD genérico por tipo
- [ ] `GET /catalog` — filtros + paginação

### Testes

- [ ] Testes de integração de rotas de auth
- [ ] Testes de integração das rotas de tasks
- [ ] Fixtures / seed de banco para testes

---

## DevOps / Deploy

- [ ] CI com GitHub Actions (lint + build + testes)
- [ ] Deploy do frontend (Netlify ou Vercel)
- [ ] Deploy do backend + banco (Railway ou Render)
- [ ] HTTPS forçado em produção
- [ ] Backup automático do PostgreSQL

---

## Backlog / Ideias futuras

- [ ] PWA (offline + install prompt)
- [ ] WebSockets para sync em tempo real (segundo dispositivo)
- [ ] Exportar dados (JSON / CSV)
- [ ] Internacionalização (pt-BR / en)
- [ ] Relatórios / dashboard de produtividade com charts (PrimeNG Charts)
