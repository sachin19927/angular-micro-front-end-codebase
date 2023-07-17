# Mainapplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



Micro Front End Steps


Step 1:
Create workspce for MFE
ng new mainapplication --create-application="false"

Step 2: create project folder


Step 3: create  shell project inside projects folder and follow the same for other projects 
ng g application shell --routing=true --style=scss
ng g application jobs --routing=true --style=scss
ng g application profile --routing=true --style=scss
ng g application setting --routing=true --style=scss


step 4:

npm i @angular-architects/module-federation

step 5: add module-federation for each project

ng add @angular-architects/module-federation --project=shell    8200
ng add @angular-architects/module-federation --project=jobs    8300
ng add @angular-architects/module-federation --project=profile    8400
ng add @angular-architects/module-federation --project=setting    8500


step 6 : addfeature modules for each porject

ng g m shell-feature --routing
ng g m jobs-feature --routing
ng g m profile-feature --routing
ng g m setting-feature --routing


step 7 : 	create component for each projects
ng g c dashboard
ng g c search-jobs
ng g c profile
ng g c setting


step 8 
ng serve shell
ng serve jobs
ng serve profile
ng serve setting
