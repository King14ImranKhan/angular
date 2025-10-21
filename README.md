. Basics / Fundamentals

What is Angular & its architecture (Modules, Components, Templates, Services)

TypeScript basics (classes, interfaces, decorators)

Angular CLI commands (ng new, ng serve, ng generate)

Components and Templates

Data binding:

Interpolation ({{ }})

Property binding ([property])

Event binding ((event))

Two-way binding ([(ngModel)])

Directives:

Structural (*ngIf, *ngFor)

Attribute ([ngClass], [ngStyle])

Pipes (built-in pipes like date, currency, and custom pipes)

2. Forms

Template-driven forms

Reactive forms (FormGroup, FormControl, FormBuilder)

Form validation (required, minlength, pattern, custom validators)

3. Services & Dependency Injection

Creating services (ng generate service)

Injecting services into components

Singleton services

Providers and hierarchical DI

4. Routing & Navigation

Configuring routes (RouterModule.forRoot())

Route parameters & query parameters

Lazy loading modules

Route guards (CanActivate, CanDeactivate)

Navigation programmatically

5. HTTP & APIs

HttpClient module

GET, POST, PUT, DELETE requests

Observables (rxjs) and subscriptions

Error handling

Interceptors

6. Component Communication

Input and Output decorators (@Input, @Output)

EventEmitters

Shared service for communication

ViewChild, ContentChild

7. Advanced Topics

Angular lifecycle hooks (ngOnInit, ngOnDestroy, etc.)

Change Detection strategies

Dynamic components

Custom directives

Custom pipes

8. State Management

Using RxJS for state

BehaviorSubject & Observables

NgRx (Redux pattern in Angular)

Store, Actions, Reducers, Effects

9. Performance & Optimization

Lazy loading modules

Preloading strategies

OnPush change detection

TrackBy with *ngFor

Avoiding unnecessary re-renders

10. Testing

Unit testing with Jasmine/Karma

Component testing

Service testing

E2E testing with Protractor / Cypress

11. Angular Material / UI Libraries

Angular Material components

Styling & theming

Reactive forms with Angular Material

Animations

12. Deployment & Build

Environment configuration (environment.ts)

Production build (ng build --prod)

Angular Universal (SSR)

PWA setup

Dockerizing Angular apps


Commands-
set NODE_OPTIONS=--max-old-space-size=1000 --openssl-legacy-provider
set NODE_OPTIONS=--openssl-legacy-provider
npm install --legacy-peer-deps
npm install --force
chrome.exe --disable-web-security --user-data-dir="C:\chrome-qa2-profile" --new-window https://hello.com