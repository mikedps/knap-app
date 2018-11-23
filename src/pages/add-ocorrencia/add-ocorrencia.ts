import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { TipoOcorrenciaProvider} from '../../providers/tipo-ocorrencia';
import { OcorrenciaProvider} from '../../providers/ocorrencia';
import { LinhaDetalhePage } from '../../pages/linha-detalhe/linha-detalhe';

@Component({
    selector: 'page-add-ocorrencia',
    templateUrl: 'add-ocorrencia.html'
  })
  export class AddOcorrenciaPage{

        tiposOcorrencia : any;
        tipoOcorrenciaID: Int16Array;
        descricao : string;
        linha: any;
        nomeLinhaCompleta: string;

        constructor(private navParams : NavParams, 
                    private navCtrl : NavController,
                    private alertCtrl : AlertController,
                    private tipoOcorrenciaProvider: TipoOcorrenciaProvider,
                    private ocorrenciaProvider : OcorrenciaProvider) {

                  this.linha = navParams.get('linha');
                  this.nomeLinhaCompleta = navParams.get('nomeLinhaCompleta');
                  this.tipoOcorrenciaProvider.get().subscribe(resultado =>{
                  this.tiposOcorrencia = resultado;
                  console.log(this.tiposOcorrencia.Nome);
              });

              
        }

        criarOcorrencia(){
              const data = {
                     tipoOcorrenciaID: this.tipoOcorrenciaID, 
                     descricao: this.descricao,
                     linhaID: this.linha.LinhaID,
                     Nome: this.descricao                  
                  };
                  console.log(data);

                  this.ocorrenciaProvider.adicionar(data)
                 .then(o=> {
                      console.log(this.linha);
                       this.linha.Ocorrencias.push(data);

                         this.mostrarAlerta( 'Ocorrência', 'Ocorrência adicionada com sucesso.');
                         this.navCtrl.push(LinhaDetalhePage, { linha : this.linha })
                  })
                  .catch(err => {
                        console.log(err);
                        this.mostrarAlerta( 'Ocorrência', 'Houve um erro ao adicionar ocorrência');
                  })
        }

        mostrarAlerta(titulo, mensagem) {
            const alert = this.alertCtrl.create({
              title: titulo,
              subTitle: mensagem,
              buttons: ['OK']
            });
            alert.present();
          }

  }