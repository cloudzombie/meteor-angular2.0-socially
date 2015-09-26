# Meteor App for the Angular2-Meteor tutorial

[Angular2-Meteor](http://www.angular-meteor.com/tutorials/socially/angular2/bootstrapping) tutorial is about building a Meteor app
called "Socially" using Angular 2 and other UI frameworks based on Angular2.

Install Meteor typings using special `typings` tool before running the app:

```
npm install typings -g

typings install meteor --ambient

typings install es6-promise --ambient

typings install es6-shim --ambient

```

Run `meteor update` periodically to keep the app up to date and avoid any errors
(for simplicity, the app itself and local packages don't depend on exact versions of the packages they use).

The final version of the app contains both Ionic 2 and Web versions at the same time, and 
can be downloaded [here](https://github.com/Urigo/meteor-angular2.0-socially/archive/Step_22.zip).
To run the Web version, hit:

```
  meteor run
```

To run the iOS version based on Ionic 2, hit:

```
  meteor run ios
```
