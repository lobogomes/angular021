**"Creative Space" — workspace pessoal e criativo com:**

┌──────────────┬───────────────────────────────────────────┐
│    Módulo    │    Features Angular 21 que se aplicam     │
├──────────────┼───────────────────────────────────────────┤
│ Tasks        │ Signals + computed, control flow @for/@if │
├──────────────┼───────────────────────────────────────────┤
│ Kanban       │ CDK DragDrop, signal-based state          │
├──────────────┼───────────────────────────────────────────┤
│ Files        │ @defer para lazy load, upload progressivo │
├──────────────┼───────────────────────────────────────────┤
│ Diary        │ Reactive forms, rotas aninhadas           │
├──────────────┼───────────────────────────────────────────┤
│ Catalog      │ Filtros com signals, infinite scroll      │
├──────────────┼───────────────────────────────────────────┤
│ e-Pub Reader │ @defer, animações, Web Workers            │
└──────────────┴───────────────────────────────────────────┘
---
**Proposta de arquitetura**

src/
├── app/
│   ├── core/               # singleton: auth, layout, interceptors, guards
│   ├── shared/             # componentes, pipes e directives reutilizáveis
│   └── features/
│       ├── tasks/
│       ├── kanban/
│       ├── files/
│       ├── diary/
│       ├── catalog/
│       └── reader/
---
**abordagem feature-based (vertical slice)**:

Cada feature é autossuficiente:
tasks/
├── components/   → UI da feature
├── services/     → lógica de negócio da feature
├── models/       → tipos da feature
└── tasks.routes.ts

A ideia é que tudo relacionado a tasks vive junto. Se você deletar a pasta tasks, não quebra nada do resto do projeto.

  ---
Comparação com a alternativa (horizontal/técnica):
services/
├── tasks.service.ts
├── kanban.service.ts
└── diary.service.ts

models/
├── task.model.ts
├── kanban.model.ts
└── diary.model.ts

Nessa abordagem você agrupa por tipo técnico, não por domínio. Funciona bem em projetos pequenos, mas escala mal — para entender
uma feature você navega em múltiplas pastas.

  ---
Por que feature-based para portfólio:

- É o padrão adotado pelo Angular Style Guide oficial
- Reflete como o mercado organiza projetos grandes
- Facilita lazy loading por rota — cada feature é um bundle separado
- Demonstra entendimento de separação de responsabilidades por domínio

---
**routes e lazy loading**

A rota fica na feature porque ela faz parte do domínio dela, não do app global.

O app.routes.ts global fica limpo e só conhece os lazy imports:
// app.routes.ts
export const routes: Routes = [
{ path: 'tasks',   loadChildren: () => import('./features/tasks/tasks.routes') },
{ path: 'kanban',  loadChildren: () => import('./features/kanban/kanban.routes') },
{ path: 'diary',   loadChildren: () => import('./features/diary/diary.routes') },
];

Cada feature define suas próprias sub-rotas internamente:
// features/tasks/tasks.routes.ts
export const routes: Routes = [
{ path: '',      component: TaskListComponent },
{ path: ':id',   component: TaskDetailComponent },
{ path: 'new',   component: TaskFormComponent },
];

O benefício prático é o lazy loading — o Angular só carrega o bundle da feature quando o usuário navegar para ela. O app.routes.ts
não precisa conhecer os detalhes internos de cada feature.
Se todas as rotas ficassem no global, você perderia isso e quebraria o encapsulamento — o app.routes.ts precisaria conhecer cada
componente de cada feature.
---
