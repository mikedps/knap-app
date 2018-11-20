import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class LinhaProvider{
    url = 'http://18.216.245.190:8080/API/linha2/?param=';
    constructor(private http: HttpClient){
    }

    getLinha(param){
        return this.http.get(this.url + param).map(res => res);
    }
    
    getLinhas(){
        return this.http.get(this.url).map(res => res);
    }
}