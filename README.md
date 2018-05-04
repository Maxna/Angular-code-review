# AngularCodeReview
#### _Week 8 project by: **Matt Nardoni**_

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Description
This project is supposed to be a website modeled after https://www.freelancer.com/. Using Angular components, the app should have a similar look and functionality to the freelancer home page.

### Setup

### Known Bugs

### Technologies Used

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Specs
This project is an exercise in using components to create and display block elements of a website, such as an input field or an image header. It should have 5 components where a user can interact with or edit a section.

| Component | Content | Purpose |
| :--------- | :---------- | :---------- |
| app.component.ts | Master list of projects, forms, contests, and categories | To contain the master project list, master sign-up form list, master contest list, and master category list of the site, and produce directory with filters (pipe), and be the crossroads of all other components |
| project-list.component.ts | Child list of popular projects, clicked function emitter, (location priority??) | To contain a child of the project list, and to return information on clicks (and location??) to app.component.js |
| contest-list.component.ts |  contests, clicked function emitter, (location priority??) | To contain a child of the project list, and to return information on clicks (and location??) to app.component.js |
| form-list.component.ts |  Stores all types of forms and sign-up sheets | To contain child lists of all forms a user can edit, returns information to app.component.js |



#### Link
https://github.com/Maxna/Angular-code-review.git

#### License

_This software is licensed under the MIT licensed_

Copyright (c) 2018 Matt Nardoni.
