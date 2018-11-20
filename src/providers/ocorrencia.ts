import { HttpClient, HttpHeaders   } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class OcorrenciaProvider{

    url = 'http://18.216.245.190:8080/API/OcorrenciaAPI/';
    constructor(private http: HttpClient){

    }

    adicionar(ocorrencia){

        let config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
        return this.http.post(this.url, ocorrencia, config)
        .toPromise()
        .then(res => res);
    }
}
