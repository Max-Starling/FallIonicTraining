import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Nav, Platform } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http } from '@angular/http';
import { ListPage } from '../pages/list/list';
import { FavoritesPage } from '../pages/favorites/favorites';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { DateFormatterService } from '../services/date-formatter.service';
import { SubjectTransferService } from '../services/subject-transfer.service';
// tslint:disable:ter-indent
var AppComponent = (function () {
    function AppComponent(platform, statusBar, splashScreen, translateService, dateFormatterService, storage, http, transferService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translateService = translateService;
        this.dateFormatterService = dateFormatterService;
        this.storage = storage;
        this.http = http;
        this.transferService = transferService;
        this.rootPage = ListPage;
        this.initializeApp();
        this.translateService.setDefaultLang('en');
        this.translateService.use('en');
        this.pages = [
            { title: 'NEWS', icon: 'images', component: ListPage },
            { title: 'FAVORITES', icon: 'attach', component: FavoritesPage },
            { title: 'SETTINGS', icon: 'settings', component: SettingsPage },
            { title: 'ABOUT', icon: 'alert', component: AboutPage },
        ];
        this.checkInStorage('news', './assets/news.json');
        this.checkInStorage('favorites', './assets/favorites.json');
        this.checkInStorage('icons', './assets/icons.json');
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    AppComponent.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    AppComponent.prototype.checkInStorage = function (storageName, storagePath) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get(storageName).then(function (storageData) {
                console.log(storageName, storageData);
                if (storageData) {
                    // _this.storage.clear();
                    _this.transferService.putData(storageData, storageName);
                }
                else {
                    _this.loadFromJSON(storageName, storagePath);
                }
            });
        });
    };
    AppComponent.prototype.loadFromJSON = function (storageName, storagePath) {
        var _this = this;
        this.http.get(storagePath)
            .map(function (res) { return res.json(); })
            .subscribe(function (jsonData) {
            if (jsonData) {
                var storageData_1 = [];
                if (storageName == "favorites" || storageName == "news") {
                    for (var i = 0; i < jsonData.length; i++) {
                        storageData_1.push({
                            title: jsonData[i].title,
                            icon: jsonData[i].icon,
                            creationDate: jsonData[i].creationDate,
                            timeObject: {},
                            author: jsonData[i].author,
                            content: jsonData[i].content,
                        });
                    }
                    storageData_1.forEach(function (item) {
                        item.timeObject = _this.dateFormatterService.getTimeObject(item.creationDate);
                    });
                }
                else if (storageName == "icons") {
                    for (var i = 0; i < jsonData.length; i++) {
                        storageData_1.push({
                            icon: jsonData[i].icon,
                        });
                    }
                }
                _this.storage.ready().then(function () {
                    _this.storage.set(storageName, storageData_1);
                    _this.transferService.putData(storageData_1, storageName);
                });
            }
        });
    };
    AppComponent.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.component.html',
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = function () { return [
        { type: Platform, },
        { type: StatusBar, },
        { type: SplashScreen, },
        { type: TranslateService, },
        { type: DateFormatterService, },
        { type: Storage, },
        { type: Http, },
        { type: SubjectTransferService, },
    ]; };
    AppComponent.propDecorators = {
        "nav": [{ type: ViewChild, args: [Nav,] },],
    };
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
