import { Component, ChangeDetectorRef, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { LoadingController, Loading } from 'ionic-angular';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class CloudVisionProvider {

    constructor(private http: Http){}

    post(imagemBase64){
        const url = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCld9b8xmKZSu5rz4WcZ5ZVdTnoXqaetsY";
        const request = {
          "requests":[
            {
              "image":{
                "content": imagemBase64
              },
              "features":[
                {
                  "type":"TEXT_DETECTION",
                  "maxResults": 5
                }
              ]
            }
          ]
        }
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers});
     
        return this.http.post(url, request, options)
          .toPromise()
          .then(res => res.json().responses[0])
    }
 
    tratarRetorno(resultado){
        return  resultado.textAnnotations[0]
         .description
         .replace(',','')
         .replace('.','')
         .trim()
         .substring(0,4)
        ;
     }
}
