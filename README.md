# Angular CLI Universal Example

A simple example of Angular server side rendering using [Angular CLI][@angular/cli], with pre-rendering to generate a static site, lazy loading routes and state transfer to prevent repeated request.

This project was generated with [Angular CLI](@angular/cli) version 1.4.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Run server build

Run `npm run build:ssr` to generate the client and server bundles. Then run `npm run start:ssr` to start an express server that renders the app pages.

## Generate static site

Run `npm run build:prerender` to create the client and server bundles. And then to generate the static site pages based on the routes declared in the `./routes.js` file.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

[@angular/cli]: https://github.com/angular/angular-cli
