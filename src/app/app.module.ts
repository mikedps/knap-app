import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LinhaPage } from '../pages/linha/linha';
import { LinhaDetalhePage } from '../pages/linha-detalhe/linha-detalhe';
import { AddOcorrenciaPage } from '../pages/add-ocorrencia/add-ocorrencia';
import { ItinerarioPage } from '../pages/itinerario/itinerario';
import { LinhaProvider}  from '../providers/linha';
import { TipoOcorrenciaProvider}  from '../providers/tipo-ocorrencia';
import { OcorrenciaProvider } from '../providers/ocorrencia';
import { ItinerarioProvider} from '../providers/itinerario';
import { StarRatingModule } from 'ionic3-star-rating';
import { MapsPage} from '../pages/maps/maps';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LinhaPage,
    LinhaDetalhePage,
    AddOcorrenciaPage,
    ItinerarioPage,
    MapsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    StarRatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LinhaPage,
    LinhaDetalhePage,
    AddOcorrenciaPage,
    ItinerarioPage,
    MapsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LinhaProvider,
    TipoOcorrenciaProvider,
    OcorrenciaProvider,
    ItinerarioProvider,
    FileTransfer
  ]
})
export class AppModule {}
