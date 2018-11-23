import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, Loading, Alert } from 'ionic-angular';
import { LinhaProvider } from '../../providers/linha';
import { LinhaDetalhePage } from '../linha-detalhe/linha-detalhe';
import { SubirImagemPage} from '../subir-imagem/subir-imagem';

@Component({
  selector: 'page-linha',
  templateUrl: 'linha.html'
})
export class LinhaPage {
  linhas: any = [];
  load : Loading;
  alert : Alert;
  avaliacaoMedia: number;
  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
             private linhaProvider: LinhaProvider,
             private loadingCtrl : LoadingController,
             private alertCtrl : AlertController
             )
             {
              this.retornoBuscaAI();
              this.avaliacaoMedia = 5;
            }
  
  retornoBuscaAI(){
    
    this.alert = this.alertCtrl.create({
      title: "Opa!",
      message: "Sua busca não encontrou nenhum registro",
      buttons: ["Ok"]
    });

    if(this.navParams.get('origem')== 'subir-imagem'){
      this.linhas = this.navParams.get('linhas');
      if(this.navParams.get('linhas').length == 0){
        this.alert.present();
      }
    }
  }
            
  buscar(event){
    this.mostrarCarregando();
    var param = event.srcElement.value;
    this.linhaProvider.getLinha(param).subscribe( result =>
      {
        this.linhas = result;
      });
      this.load.dismiss();
  }
  
  subirImagem(){
    this.navCtrl.push(SubirImagemPage);
  }

  mostrarCarregando() {
    this.load = this.loadingCtrl.create({
      spinner: 'crescent',
      showBackdrop: false
    });

    this.load.present();
  }

  abrirDetalhe(linha){
    this.navCtrl.push(LinhaDetalhePage, { linha, avaliacao: this.avaliacaoMedia });
  }

  totalOcorrencias(ocorrencias){
    return ocorrencias.length;
  }
}
