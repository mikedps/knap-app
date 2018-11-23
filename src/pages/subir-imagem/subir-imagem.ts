import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { CloudVisionProvider } from '../../providers/cloud-vision';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener } from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';
import { Base64 } from '@ionic-native/base64';
import { LinhaProvider } from '../../providers/linha';
import { LinhaPage } from '../linha/linha';

@Component({
      selector: 'page-subir-imagem',
      templateUrl: 'subir-imagem.html'
})

export class SubirImagemPage {
      imgbase64: string;

      constructor(private navParams: NavParams,
            private navCtrl: NavController,
            private fileChooser: FileChooser,
            private fileOpener: FileOpener,
            private filePath: FilePath,
            private base64: Base64,
            private linhaProvider: LinhaProvider,
            private cloudVisionProvider: CloudVisionProvider,
            private alertCtrl: AlertController
      ) {

      }

      upload() {





            this.fileChooser.open().then(data => {
                  this.filePath.resolveNativePath(data).then(filePath => {
                        this.base64.encodeFile(filePath).then(base64File => {
                              let mg = this.imgbase64.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
                              this.cloudVisionProvider.post(mg)

                                    .then(resultado => {
                                          let tratado = this.cloudVisionProvider.tratarRetorno(resultado);

                                          this.linhaProvider.getLinha(tratado).subscribe(linhas => {
                                                this.navCtrl.push(LinhaPage, { linhas, origem: 'subir-imagem' });

                                          })

                                    })
                        })
                  });
            }).catch(er => {
                  let alert = this.alertCtrl.create({
                        message: 'Houve um erro ao processar a requisição, por favor, tente novamente.',
                        title: "Opa!",
                        buttons: ["Ok"]
                  });
                  alert.present();
            })

      }
}
