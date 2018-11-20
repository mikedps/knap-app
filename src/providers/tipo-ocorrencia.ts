import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TipoOcorrenciaProvider{
    url : string = 'http://18.216.245.190:8080/API/TipoOcorrencia';
    constructor(private http: HttpClient){

    }

    get(){
        return this.http.get(this.url).map(result => result);
    }
}