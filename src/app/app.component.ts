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
                private http: Http
    ) {
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
        // this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
        //     this.pages = [
        //         { title: 'NEWS', icon: 'images', component: ListPage },
        //         { title: 'FAVORITES', icon: 'attach', component: FavoritesPage },
        //         { title: 'SETTINGS', icon: 'settings', component: SettingsPage },
        //         { title: 'ABOUT', icon: 'alert', component: AboutPage },
        //     ];
        //   });
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

    private checkInStorage(item, path){
        this.storage.ready().then(() => {
            this.storage.get(item).then((data) => {
                console.log(item, data);
                if (data) {
                    // this.storage.clear();
                } else {
                    this.loadFromJSON(item, path);
                }
            });
        });
    }
    private loadFromJSON(item,path: string){
        this.http.get(path)
        .map(res => res.json())
        .subscribe(data => {
            if (data) {
                const news = [];
                for (let i = 0; i < data.length; i++) {
                    news.push({
                        title: data[i].title,
                        icon: data[i].icon,
                        creationDate: data[i].creationDate,
                        formattedDate: '',
                        author: data[i].author,
                        content: data[i].content,
                    });
                }
                news.forEach((item) => {
                    item.formattedDate = this.dateFormatterService.formatDate(item.creationDate);
                });
                this.storage.ready().then(() => {
                    this.storage.set(item, news);
                });
            }
        });
    }
}
