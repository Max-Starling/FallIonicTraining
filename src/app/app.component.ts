import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Nav, Platform } from 'ionic-angular';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http } from '@angular/http'
import { ListPage } from '../pages/list/list';
import { FavoritesPage } from '../pages/favorites/favorites';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { DateFormatterService } from '../services/date-formatter.service';
import { SubjectTransferService } from '../services/subject-transfer.service';

@Component({
    templateUrl: 'app.component.html',
})
// tslint:disable:ter-indent
export class AppComponent {
    @ViewChild(Nav) nav: Nav;
    private rootPage: any = ListPage;
    private newsTitle: string;
    private favoritesTitle: string;
    private settingsTitle: string;
    private aboutTitle: string;
    private pages: Array<{ title: string, icon: string, component: any }>;
    constructor(private platform: Platform,
                private statusBar: StatusBar,
                private splashScreen: SplashScreen,
                private translateService: TranslateService,
                private dateFormatterService: DateFormatterService,
                private storage: Storage,
                private http: Http,
                private transferService: SubjectTransferService) {
        this.initializeApp();
        this.translateService.setDefaultLang('en');
        this.translateService.use('en')
        this.pages = [
            { title: 'NEWS', icon: 'images', component: ListPage },
            { title: 'FAVORITES', icon: 'attach', component: FavoritesPage },
            { title: 'SETTINGS', icon: 'settings', component: SettingsPage },
            { title: 'ABOUT', icon: 'alert', component: AboutPage },
        ];
        this.checkInStorage('news', 'assets/news.json');
        this.checkInStorage('favorites', 'assets/favorites.json');
        this.checkInStorage('icons', 'assets/icons.json');
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    private checkInStorage(storageName, storagePath) {
        this.storage.ready().then(() => {
            this.storage.get(storageName).then((storageData) => {
                console.log(storageName, storageData);
                if (storageData) {
                    // this.storage.clear();
                    this.transferService.putData(storageData, storageName);
                } else {
                    this.loadFromJSON(storageName, storagePath);
                }
            });
        });
    }
    private loadFromJSON(storageName, storagePath) {
        this.http.get(storagePath)
            .map(res => res.json())
            .subscribe(jsonData => {
                if (jsonData) {
                    const storageData = [];
                    if (storageName == "favorites" || storageName == "news") {
                        for (let i = 0; i < jsonData.length; i++) {
                            storageData.push({
                                title: jsonData[i].title,
                                icon: jsonData[i].icon,
                                creationDate: jsonData[i].creationDate,
                                formattedDate: '',
                                author: jsonData[i].author,
                                content: jsonData[i].content,
                            });
                        }
                        storageData.forEach((item) => {
                            item.formattedDate = this.dateFormatterService.formatDate(item.creationDate);
                        });
                    } else if (storageName == "icons") {
                        for (let i = 0; i < jsonData.length; i++) {
                            storageData.push({
                                icon: jsonData[i].icon,
                            });
                        }
                    }
                    this.storage.ready().then(() => {
                        this.storage.set(storageName, storageData);
                        this.transferService.putData(storageData, storageName);
                    });
                }
            });
    }
}
