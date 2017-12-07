import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Injectable, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Pro } from '@ionic/pro';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
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
var IonicPro = Pro.init('ccdcf8f7', {
    appVersion: "1.0.0"
});
var MyErrorHandler = (function () {
    function MyErrorHandler(injector) {
        try {
            this.ionicErrorHandler = injector.get(IonicErrorHandler);
        }
        catch (e) {
            // Unable to get the IonicErrorHandler provider, ensure
            // IonicErrorHandler has been added to the providers list below
        }
    }
    MyErrorHandler.prototype.handleError = function (err) {
        IonicPro.monitoring.handleNewError(err);
        // Remove this if you want to disable Ionic's auto exception handling
        // in development mode.
        this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
    };
    MyErrorHandler.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MyErrorHandler.ctorParameters = function () { return [
        { type: Injector, },
    ]; };
    return MyErrorHandler;
}());
export { MyErrorHandler };
export function createTranslateLoader(http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
var ɵ0 = (createTranslateLoader);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
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
                                useFactory: ɵ0,
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
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
export { AppModule };
export { ɵ0 };
//# sourceMappingURL=app.module.js.map