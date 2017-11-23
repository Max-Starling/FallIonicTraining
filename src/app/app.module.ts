import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Pro } from '@ionic/pro';

import { AppComponent } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const IonicPro = Pro.init('ccdcf8f7', {
    appVersion: "0.0.1"
  });

  @Injectable()
  export class MyErrorHandler implements ErrorHandler {
    ionicErrorHandler: IonicErrorHandler;

    constructor(injector: Injector) {
      try {
        this.ionicErrorHandler = injector.get(IonicErrorHandler);
      } catch(e) {
        // Unable to get the IonicErrorHandler provider, ensure
        // IonicErrorHandler has been added to the providers list below
      }
    }

    handleError(err: any): void {
      IonicPro.monitoring.handleNewError(err);
      // Remove this if you want to disable Ionic's auto exception handling
      // in development mode.
      this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
    }
  }

@NgModule({
    declarations: [
        AppComponent,
        HomePage,
        ListPage,
        SettingsPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(AppComponent),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        AppComponent,
        HomePage,
        ListPage,
        SettingsPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler,
        },
        IonicErrorHandler,
        [{ provide: ErrorHandler, useClass: MyErrorHandler }]
    ],
})
export class AppModule { }




