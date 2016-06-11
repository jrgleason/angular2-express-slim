import {bootstrap}     from '@angular/platform-browser-dynamic';
import {HeroComponent} from './components/hero/hero.component';
// TODO: Talk about why this is here and not somewhere else
import { HTTP_PROVIDERS } from '@angular/http';
bootstrap(HeroComponent, [ HTTP_PROVIDERS ]);