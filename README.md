# PrintLab

Small printing business manager.

This project pretends to be a simple tool to learn Angular.

## Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.4.

Always consult [Angular Docs](https://angular.dev/) for more information.

### Commands

See pacakage.json, scripts section. The server runs on `http://localhost:4200/`

### Code scaffolding

Generate a new component:

```bash
ng generate component component-name 
#or
ng g c component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```
## Test

See pacakage.json, scripts section. For now, it is using Jasmine and Karma.

## End-to-end tests

Soon
```bash
ng e2e
```

## Project configuration

This project uses new Zoneless configuration og Angular. 

### Folder structure

Main directories:
- `src/app/core`
- `src/app/shared`
- `src/app/widget`
- `src/app/domain`

Which one can have subdirectories like:
- `*/components`
- `*/service`
- `*/directives`
- `*/models`
- `*/pipes`
- `*/interfaces`
- `*/dialogs`
- `*/pages`
- `*/layouts`

Do the best choice for each case.

### Types

You can use `--type` flag to define the type of the component. For example:

```bash
ng g c --type=page component-name
#or
ng g c --type=layout component-name
```

It can be used to better define the component.

### Imports

Paths configurations on `tsconfig.json` file to organize imports and avoid realtive paths:

```json
"paths": {
  "@core/*": ["src/app/core/*"],
  "@domain/*": ["src/app/domain/*"],
  "@shared/*": ["src/app/shared/*"],
  "@widget/*": ["src/app/widget/*"],
  "@/*": ["./*"]
}
```

`@/*` must be the last one because it is the most general.

## Architecture

About Angular components, it is recommended to use the Template Driven style instead of Reactive Forms. For more information, see these links below:

- [Prefer Template-Driven Forms | Ward Bell | ng-conf 2021](https://www.youtube.com/watch?v=L7rGogdfe2Q)
- [Template-driven or reactive forms in Angular](https://blog.simplified.courses/template-driven-or-reactive-forms-in-angular/)
- [Mastering complex reactivity with template-driven forms and Signals by Brecht Billiet](https://www.youtube.com/watch?v=2PGKQHiGyio)
- [Why It’s Time to Say Goodbye to Angular Template-Driven Forms](https://medium.com/netanelbasal/why-its-time-to-say-goodbye-to-angular-template-driven-forms-350c11d004b): see the first comment of Ward Bell.

About validations, the suggestion is to use a Model Validation approach. It consists in decouple the validation from the framework and focus on the business rules and it is done using [Vest library](https://vestjs.dev/). For more information, see these links below:

- [Form Validation Done Right | Ward Bell | ng-cof 2022](https://www.youtube.com/watch?v=EMUAtQlh9Ko)
- [Mastering complex reactivity with template-driven forms and Signals by Brecht Billiet](https://www.youtube.com/watch?v=2PGKQHiGyio): second part
- [Ward Bell's example code on github - ngc-validate](https://github.com/wardbell/ngc-validate/)

### Implementation

Soon

## Development

Notes about the development environment and workflow

### Workflow

The suggestion is to use the Pull Request workflow. To simplify the process, follow this guide: [Pull Request Workflow with Git — 6 steps guide](https://medium.com/@urna.hybesis/pull-request-workflow-with-git-6-steps-guide-3858e30b5fa4)

0. “Pull” the changes to your local machine (get the most recent base)
1. Create a “branch” (version)
2. Commit the changes
3.a Push your changes
3.b Open a “pull request” (propose changes)
4. Discuss and review your code
5. Rebase and tests
6. “Merge” your branch to the master branch

Example: [Como criar Pull Requests no GitHub](https://www.youtube.com/watch?v=sXKZb37BRD8)

For the commits, use [Convetional Commits](https://www.conventionalcommits.org).

### Server

The `Dockerfile`and `docker-compose.yml` files configure an instance of [json-server](https://github.com/typicode/json-server) to mock the API.
In order to get it working must have a `.data` directory on project root with the json files to each case. For example:

- clients.json
- products.json

The `Dockerfile` is ready to merge all these json files into only one, called `db.json` inside de container. The json server will serve this merged `db.json`.