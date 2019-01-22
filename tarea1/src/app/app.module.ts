import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AudioPage } from "../pages/audio/audio";
import { DetallePage} from "../pages/detalle/detalle";
import { MensajesPage } from "../pages/mensajes/mensajes";
import { TabsPage } from "../pages/tabs/tabs";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AudioPage,
    DetallePage,
    MensajesPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AudioPage,
    DetallePage,
    MensajesPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
