import {Component} from '@angular/core';
import { ApplicationConstants } from '../../constants/ApplicationConstants';

@Component({
    selector: 'hero',
    templateUrl:'hero.component.html',
    styleUrls: [ApplicationConstants.BASE_TEMPLATE_PATH + 'components/hero/hero.component.css']
})
export class HeroComponent {
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