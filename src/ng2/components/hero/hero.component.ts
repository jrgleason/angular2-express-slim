import {Component} from '@angular/core';
import { ApplicationConstants } from '../../constants/ApplicationConstants';
import { Hero } from './hero'
import { HeroDetailComponent } from './detail/hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
@Component({
    selector: 'hero',
    templateUrl:'hero.component.html',
    styleUrls: [ApplicationConstants.BASE_TEMPLATE_PATH + 'components/hero/hero.component.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
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
