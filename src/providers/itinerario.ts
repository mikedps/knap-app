import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ItinerarioProvider{
    
    url : string = 'http://18.216.245.190:8080/API/itinerario/';
    constructor(private http: HttpClient){

    }

    get(param){
        return this.http.get(this.url +'?param=' + param).map(res => res);
    }

}