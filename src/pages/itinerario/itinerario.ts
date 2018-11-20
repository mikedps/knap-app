import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ItinerarioProvider} from '../../providers/itinerario';
@Component({
    selector: 'page-itinerario',
    templateUrl: 'itinerario.html'
  })
  export class ItinerarioPage{
      horarios : any;
      linha : any;
      nomeLinhaCompleta: string;
      constructor(private itinerarioProvider : ItinerarioProvider,
        private navParams : NavParams) {
            this.linha = navParams.get('linha');
            this.nomeLinhaCompleta = navParams.get('nomeLinhaCompleta');
            this.carregar(this.linha.Numero);
        }
        

      carregar(param){
          return this.itinerarioProvider.get(param).subscribe(res => {
              this.horarios = res
             console.log(this.horarios);
            });

      }
  }