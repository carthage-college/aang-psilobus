import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';

import settings = require('./settings.js');

@Injectable()
export class DemoService {

    constructor(private http:Http) {
    }

    // Uses http.get() to communicate with REST API endpoint in json format
    getFoods() {
        return this.http.get(settings.root_url + 'dspace/MTH/RA/2016/courses/').map((res:Response) => res.json());
    }
}
