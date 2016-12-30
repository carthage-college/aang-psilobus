import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';

import settings = require('./settings.js');

@Injectable()
export class DemoService {

    constructor(private http:Http) {
    }

    // Uses http.get() to load a single JSON file
    getFoods() {
        return this.http.get(settings.root_url + 'app/food.json').map((res:Response) => res.json());
    }
}
