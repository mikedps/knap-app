import { Component, ChangeDetectorRef, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import { LoadingController, Loading } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { literal } from '@angular/compiler/src/output/output_ast';

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
              "features": [
                {
                  "type":"TEXT_DETECTION",
                  "maxResults":5
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

      let anotacoes = resultado.textAnnotations;
      let indice = 0;
      for(let l=1; l<= anotacoes.length; l++){

          let palavra = anotacoes[l] == 'undefined' ? '' : anotacoes[l].description;
          let palavraPotencial = true;
          let contador = 0;


          console.log(palavra);

          if(palavra.length <4){   l++; }


            for(let letra=0; letra <= 4; letra++){
                  
                  if(!isNaN(palavra[letra]) && palavraPotencial){
                    contador++;
                  }
                  else{
                    palavraPotencial = false;
                  }
              }
             
              if(contador >= 4 && palavra.length>=4){
                 return palavra;                 
              }
        }

        
               return  resultado.textAnnotations[0]
                .description
                .replace(',','')
                .replace('.','')
                .trim()
                .substring(0,4);
     }
}
