/// <reference path="angular2-meteor/angular2-meteor.d.ts" />
/// <reference path="ionic2-meteor/ionic2-meteor.d.ts" />

declare module 'socially' {
  import {Type} from "angular2/core";
  import {Router} from "angular2/router";
  import {NavController} from "ionic/ionic";

  export function MeteorApp(args?: {}): (cls: Type) => any;

  export class App {
    constructor(navProvider: NavProvider);
  }

  export class NavProvider {
    get(): Router | NavController;
  }
}

declare module 'socially-client' {
  export class PartiesList {}

  export class PartiesForm {}

  export class PartyDetails {}

  export class DisplayName {}

  export class RsvpPipe {}
}
