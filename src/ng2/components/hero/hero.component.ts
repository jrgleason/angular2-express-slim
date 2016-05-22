import {Component} from '@angular/core';
import { ApplicationConstants } from '../../constants/ApplicationConstants';

@Component({
    selector: 'hero',
    templateUrl:'hero.component.html',
    styleUrls: [ApplicationConstants.BASE_TEMPLATE_PATH + 'components/hero/hero.component.css']
})
export class HeroComponent {
    heroes = HEROES;
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}
export class Hero {
    id: number;
    name: string;
}

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];