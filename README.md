# MyNg2App

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

This is based on a tutorial from IBM developerworks
https://www.ibm.com/developerworks/library/wa-implement-a-single-page-application-with-angular2/index.html

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deploy to Bluemix

After you have run `ng build`, you can deploy the build artifacts (index.html, 3 Javascript files, and 1 CSS file) into Bluemix. To do so, you need to run the following staticfile-buildpack (in the folder containing the build artifacts).

cf push <appname> -b https://github.com/cloudfoundry-community/staticfile-buildpack

I have this running on IBM Bluemix
https://ksng2app.mybluemix.net/
