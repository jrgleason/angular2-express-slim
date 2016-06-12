import {bootstrap}     from '@angular/platform-browser-dynamic';
import {HeroComponent} from './components/hero/hero.component';
import { HTTP_PROVIDERS } from '@angular/http';
bootstrap(HeroComponent, [ HTTP_PROVIDERS ]);