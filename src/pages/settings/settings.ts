import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
// tslint:disable:ter-indent
export class SettingsPage {
    private checkedArray: Array<string>;
    private languages: Array<{
        id: string,
        name: string,
        checked: boolean,
        isWorking: boolean
    }>
    constructor(private navCtrl: NavController, private alertCtrl: AlertController, private translateService: TranslateService) {
        this.languages = [
            { id: 'en', name: 'ENGLISH', checked: false, isWorking: true },
            { id: 'ru', name: 'RUSSIAN', checked: false, isWorking: true },
            { id: 'de', name: 'DEUTSCH', checked: false, isWorking: false },
            { id: 'fr', name: 'FRENCH', checked: false, isWorking: false }
        ];
        if (this.translateService.currentLang) {
            this.languages.forEach((item, i) =>{
                if (item.id == this.translateService.currentLang) {
                    item.checked = true;
                }
              });
        }
    }
    private setLanguage(event, language) {
        if (language.isWorking) {
            this.translateService.use(language.id);
            this.languages.forEach((item, i) =>{
                item.checked = false;
              });
            language.checked = true;
        }
        else {
            this.presentAlert();
        }
    }
    private presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Oops!',
            subTitle: 'Sorry, this function is not available yet.',
            buttons: ['No problem']
        });
        alert.present();
    }
}

