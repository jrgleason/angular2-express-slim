import {bootstrap}     from '@angular/platform-browser-dynamic';
import {AppComponent}  from './components/app.component';
import {HeroComponent} from './components/hero/hero.component';
import { HTTP_PROVIDERS } from '@angular/http';
;

bootstrap(AppComponent);
bootstrap(HeroComponent, [ HTTP_PROVIDERS ]);