import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
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
    rootPage: any = ListPage;
    pages: Array<{ title: string, icon: string, component: any }>;
    constructor(private platform: Platform,
                private statusBar: StatusBar,
                private splashScreen: SplashScreen,
                private translate: TranslateService) {
        this.initializeApp();
        this.pages = [
            // { title: 'Home', component: HomePage },
            { title: ' News', icon: 'images', component: ListPage },
            { title: ' Favorites', icon: 'attach', component: FavoritesPage },
            { title: ' Settings', icon: 'settings', component: SettingsPage },
            { title: ' About', icon: 'alert', component: AboutPage },
        ];
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.translate.setDefaultLang('en');
            this.translate.use('en');
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
