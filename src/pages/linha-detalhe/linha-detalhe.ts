import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddOcorrenciaPage } from '../add-ocorrencia/add-ocorrencia';
import { ItinerarioPage } from '../itinerario/itinerario';

@Component({
    selector: 'page-linha-detalhe',
    templateUrl: 'linha-detalhe.html'
  })
export class LinhaDetalhePage{
    linha: any;
    nomeLinhaCompleta : string;
    avaliacao : Int16Array;
    constructor(private navCtrl : NavController, private navParams : NavParams){
        this.linha = navParams.get('linha');
        this.nomeLinhaCompleta = this.linha.Numero + ' ' + this.linha.Nome;
        this.avaliacao = this.linha.AvaliacaoMedia;
    }
    ionViewDidLoad(){
        
    }

    addOcorrencia(linha){
        console.log('clicou ocorrencia');
        this.navCtrl.push(AddOcorrenciaPage, {  linha, nomeLinhaCompleta: this.nomeLinhaCompleta });
    }

    getItinerario(linha){
        console.log('clicou itinerario');
        this.navCtrl.push(ItinerarioPage, {  linha, nomeLinhaCompleta: this.nomeLinhaCompleta });
    }



}