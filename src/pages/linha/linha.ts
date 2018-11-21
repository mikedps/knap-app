import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LinhaProvider } from '../../providers/linha';
import { LinhaDetalhePage } from '../linha-detalhe/linha-detalhe';
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener }  from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';
import { Base64 } from '@ionic-native/base64';
import { CloudVisionProvider} from '../../providers/cloud-vision';


@Component({
  selector: 'page-linha',
  templateUrl: 'linha.html'
})
export class LinhaPage {
  linhas: any;
  constructor(private navCtrl: NavController, 
             private linhaProvider: LinhaProvider,
             private navParams : NavParams,
             private fileChooser : FileChooser,
             private fileOpener : FileOpener,
             private filePath : FilePath,
             private base64 : Base64,
             private cloudVisionProvider : CloudVisionProvider
             ) {}
  

  buscar(event){
    var param = event.srcElement.value;
    this.linhaProvider.getLinha(param).subscribe( result =>
      {
        this.linhas = result;
      });
  }
  upload() {
    
    this.fileChooser.open().then(foto =>{
      
      this.base64.encodeFile(foto).then((base64File: string) => {
        const img = 'data:image/jpeg;base64,' + base64File;
        console.log(base64File);
         /* console.log(img);

        this.cloudVisionProvider.post(img).then(resultado =>{
          console.log(resultado);
        
          this.cloudVisionProvider.tratarRetorno(resultado).then(buscar =>{
            console.log(buscar);
            this.linhaProvider.getLinha(buscar).subscribe(linha => {
              console.log(linha);
              this.linhas = linha;
            })
          })
        })*/

      }, (err) => {
        console.log(err);
      });

    });
    
  }

  
  abrirDetalhe(linha){
    this.navCtrl.push(LinhaDetalhePage, { linha });
  }

  totalOcorrencias(ocorrencias){
    return ocorrencias.length;
  }
}
