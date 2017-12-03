import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Http, HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Pro } from '@ionic/pro';
import { TranslateLoader, TranslateModule, TranslateModuleConfig } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicStorageModule } from '@ionic/storage';

import { AppComponent } from './app.component';
import { SelectIconComponent } from '../components/select-icon/select-icon.component';
import { ListPage } from '../pages/list/list';
import { FavoritesPage } from '../pages/favorites/favorites';
import { ListItemPage } from '../pages/list-item/list-item';
import { AddListItemPage } from '../pages/add-list-item/add-list-item';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SubjectTransferService } from '../services/subject-transfer.service';
import { DateFormatterService } from '../services/date-formatter.service';

const IonicPro = Pro.init('ccdcf8f7', {
    appVersion: "1.0.0"
});

@Injectable()
export class MyErrorHandler implements ErrorHandler {
    ionicErrorHandler: IonicErrorHandler;

    constructor(injector: Injector) {
        try {
            this.ionicErrorHandler = injector.get(IonicErrorHandler);
        } catch (e) {
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
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent,
        ListPage,
        ListItemPage,
        AddListItemPage,
        SettingsPage,
        AboutPage,
        FavoritesPage,
        SelectIconComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(AppComponent),
        IonicStorageModule.forRoot(),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        AppComponent,
        ListPage,
        ListItemPage,
        AddListItemPage,
        SettingsPage,
        AboutPage,
        FavoritesPage,
        SelectIconComponent,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler,
        },
        IonicErrorHandler,
        SubjectTransferService,
        DateFormatterService,
        [{ provide: ErrorHandler, useClass: MyErrorHandler }]
    ],
})
export class AppModule { }




