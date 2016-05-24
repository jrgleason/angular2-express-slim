import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    constructor(private http: Http) { }
    getHeroes() {
        return this.http.get('/services')
            .toPromise()
            .then(response => 
                response.json()
            )
            .catch(this.handleError);
    }
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}