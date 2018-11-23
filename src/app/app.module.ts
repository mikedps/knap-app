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
import { FileChooser } from '@ionic-native/file-chooser';
import { FileOpener }  from '@ionic-native/file-opener';
import { FilePath } from '@ionic-native/file-path';
import { Base64 } from '@ionic-native/base64';
import { CloudVisionProvider} from '../providers/cloud-vision';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LinhaPage,
    LinhaDetalhePage,
    AddOcorrenciaPage,
    ItinerarioPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
    StarRatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LinhaPage,
    LinhaDetalhePage,
    AddOcorrenciaPage,
    ItinerarioPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LinhaProvider,
    TipoOcorrenciaProvider,
    OcorrenciaProvider,
    ItinerarioProvider,
    CloudVisionProvider,
    FileChooser,
    FileOpener,
    FilePath,
    Base64
  ]
})
export class AppModule {}
