import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LinhaProvider } from '../../providers/linha';
import { LinhaDetalhePage } from '../linha-detalhe/linha-detalhe';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';


@Component({
  selector: 'page-linha',
  templateUrl: 'linha.html'
})
export class LinhaPage {
  linhas: any;
  constructor(private navCtrl: NavController, 
             private linhaProvider: LinhaProvider,
             private navParams : NavParams,
             private transfer: FileTransfer
             ) {}
  

  buscar(event){
    var param = event.srcElement.value;
    this.linhaProvider.getLinha(param).subscribe( result =>
      {
        this.linhas = result;
      });
  }
  // full example
upload() {
    
  const fileTransfer: FileTransferObject = this.transfer.create();

  let options: FileUploadOptions = {
     fileKey: 'file',
     fileName: 'name.jpg',
     headers: {}
   }

  fileTransfer.upload('<file path>', '<api endpoint>', options)
   .then((data) => {
     // success
   }, (err) => {
     // error
   })
}

  abrirDetalhe(linha){
    this.navCtrl.push(LinhaDetalhePage, { linha });
  }

  totalOcorrencias(ocorrencias){
    return ocorrencias.length;
  }
}
