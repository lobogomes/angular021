**"Creative Space" — workspace pessoal e criativo com:**

┌──────────────┬───────────────────────────────────────────┐
│ Módulo │ Features Angular 21 que se aplicam │
├──────────────┼───────────────────────────────────────────┤
│ Tasks │ Signals + computed, control flow @for/@if │
├──────────────┼───────────────────────────────────────────┤
│ Kanban │ CDK DragDrop, signal-based state │
├──────────────┼───────────────────────────────────────────┤
│ Files │ @defer para lazy load, upload progressivo │
├──────────────┼───────────────────────────────────────────┤
│ Diary │ Reactive forms, rotas aninhadas │
├──────────────┼───────────────────────────────────────────┤
│ Catalog │ Filtros com signals, infinite scroll │
├──────────────┼───────────────────────────────────────────┤
│ e-Pub Reader │ @defer, animações, Web Workers │
└──────────────┴───────────────────────────────────────────┘

---

**Proposta de arquitetura**

src/
├── app/
│ ├── core/ # singleton: auth, layout, interceptors, guards
│ ├── shared/ # componentes, pipes e directives reutilizáveis
│ └── features/
│ ├── tasks/
│ ├── kanban/
│ ├── files/
│ ├── diary/
│ ├── catalog/
│ └── reader/

---

**abordagem feature-based (vertical slice)**:

Cada feature é autossuficiente:
tasks/
├── components/ → UI da feature
├── services/ → lógica de negócio da feature
├── models/ → tipos da feature
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
{ path: 'tasks', loadChildren: () => import('./features/tasks/tasks.routes') },
{ path: 'kanban', loadChildren: () => import('./features/kanban/kanban.routes') },
{ path: 'diary', loadChildren: () => import('./features/diary/diary.routes') },
];

Cada feature define suas próprias sub-rotas internamente:
// features/tasks/tasks.routes.ts
export const routes: Routes = [
{ path: '', component: TaskListComponent },
{ path: ':id', component: TaskDetailComponent },
{ path: 'new', component: TaskFormComponent },
];

O benefício prático é o lazy loading — o Angular só carrega o bundle da feature quando o usuário navegar para ela. O app.routes.ts
não precisa conhecer os detalhes internos de cada feature.
Se todas as rotas ficassem no global, você perderia isso e quebraria o encapsulamento — o app.routes.ts precisaria conhecer cada
componente de cada feature.

---

**color theme ideas**

// https://coolors.co/fafaff-faebd7-deb887-a75502-a64100-e2725b
// https://coolors.co/faebd7-ebc5aa-de9e7c-d0764e-ce673d-b35a29-974d15-7b3f00
// https://coolors.co/faebd7-c19a6b-704214
// https://coolors.co/palette/8b593e-e3bc9a-faebd7

---

**primeng theme styled**

By defining your own design tokens as a custom preset,
you'll be able to define your own style without touching CSS.
Overriding the PrimeNG components using style classes is not a best practice
and should be the last resort, design tokens are the suggested approach.

Primitive Tokens
have no context, a color palette is a good example for a primitive token such
as blue-50 to blue-900. A token named blue-500 may be used as the primary color,
background of a message however on its own, the name of the token does not indicate context.
Usually they are utilized by the semantic tokens.

Semantic Tokens
define content and their names indicate where they are utilized, a well known
example of a semantic token is the primary.color. Semantic tokens map to primitive tokens or
other semantic tokens. The colorScheme token group is a special variable to define tokens
based on the color scheme active in the application, this allows defining different tokens
based on the color scheme like dark mode.

Component Tokens
are isolated tokens per component such as inputtext.background or
button.color that map to the semantic tokens. As an example, button.background component
token maps to the primary.color semantic token which maps to the green.500 primitive token.

Best Practices
Use primitive tokens when defining the core color palette and semantic tokens to specify
the common design elements such as focus ring, primary colors and surfaces. Components tokens
should only be used when customizing a specific component

--- 

**angular 21 features**

- Signal Forms
- Signals
- Angular Aria (acessibility)
- Reactive data fetching with httpResource
- Deferrable Views
- Unhandled errors
- Dependency injection
- Route-level providers for dependency injection
- Route transition animations
