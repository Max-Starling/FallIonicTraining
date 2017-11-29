import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ListPage } from '../pages/list/list';
import { FavoritesPage } from '../pages/favorites/favorites';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';

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
        private translateService: TranslateService
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
            // this.translate.setDefaultLang('en');
            // this.translate.use('en');
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
