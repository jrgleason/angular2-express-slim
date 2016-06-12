import {Component} from '@angular/core';
import { ApplicationConstants } from '../../constants/ApplicationConstants';
import { Hero } from './hero'
import { HeroDetailComponent } from './detail/hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import {MdIconRegistry} from "@angular2-material/icon/icon-registry";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";
import {MD_ICON_DIRECTIVES} from "@angular2-material/icon/icon";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list/list";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input/input";
import {MdToolbar} from "@angular2-material/toolbar/toolbar";
@Component({
    module: module.id,
    selector: 'hero',
    templateUrl:'hero.component.html',
    styleUrls: ['hero.component.css'],
    directives: [HeroDetailComponent, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES, MD_ICON_DIRECTIVES, MdToolbar, MD_INPUT_DIRECTIVES],
    providers: [HeroService],
    viewProviders: [MdIconRegistry]
})
export class HeroComponent implements OnInit{
    heroes: Hero[];
    title = 'Tour of Heroes';
    selectedHero: Hero; 
    onSelect(hero: Hero) { this.selectedHero = hero; };
    constructor(private heroService: HeroService){}
    getHeros(){
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    };
    ngOnInit() {
        this.getHeros();
    }
}
