import { Component, Input } from '@angular/core';
import { Hero } from '../hero'
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";
import {MD_ICON_DIRECTIVES} from "@angular2-material/icon/icon";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input/input";
import {MdToolbar} from "@angular2-material/toolbar/toolbar";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list/list";
import {MdIconRegistry} from "@angular2-material/icon/icon-registry";
@Component({
    selector: 'my-hero-detail',
    directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES, MD_ICON_DIRECTIVES, MdToolbar, MD_INPUT_DIRECTIVES],
    viewProviders: [MdIconRegistry],
    templateUrl:'hero-detail.component.html'
})
export class HeroDetailComponent {
  @Input()  
  hero: Hero;
}