"Creative Space" — workspace pessoal e criativo com:

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
Proposta de arquitetura

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
