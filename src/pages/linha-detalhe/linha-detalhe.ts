import { Component } from '@angular/core';
import { NavController, ActionSheetController, NavParams } from 'ionic-angular';
import { AddOcorrenciaPage } from '../add-ocorrencia/add-ocorrencia';
import { ItinerarioPage } from '../itinerario/itinerario';

@Component({
    selector: 'page-linha-detalhe',
    templateUrl: 'linha-detalhe.html'
  })
export class LinhaDetalhePage{
    linha: any;
    nomeLinhaCompleta : string;
    avaliacao : number;

    constructor(private navCtrl : NavController, 
                private navParams : NavParams,
                private actionSheetCtrl : ActionSheetController){
        this.linha = navParams.get('linha');
        this.nomeLinhaCompleta = this.linha.Numero + ' ' + this.linha.Nome;
        this.avaliacao = navParams.get('avaliacao');

        console.log(this.linha);
    }
    ionViewDidLoad(){
        
    }


    abrirMenu(){

        const actionSheet = this.actionSheetCtrl.create({
            title: 'Ações',
            buttons: [
              {
                text: 'Ver Itinerário',
                handler: () => {
                    this.navCtrl.push(ItinerarioPage, { linha: this.linha, nomeLinhaCompleta: this.nomeLinhaCompleta });
                }
              },{
                text: 'Adicionar Ocorrência',
                handler: () => {
                    this.navCtrl.push(AddOcorrenciaPage, {  linha: this.linha, nomeLinhaCompleta: this.nomeLinhaCompleta });
                }
              
              }
            ]
          });
          actionSheet.present();
   }
    

    addOcorrencia(linha){
        console.log('clicou ocorrencia');
        
    }

    getItinerario(linha){
        console.log('clicou itinerario');
        this.navCtrl.push(ItinerarioPage, {  linha, nomeLinhaCompleta: this.nomeLinhaCompleta });
    }



}