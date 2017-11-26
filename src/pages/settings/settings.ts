import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})
// tslint:disable:ter-indent
export class SettingsPage {
    constructor(private navCtrl: NavController, private alertCtrl: AlertController) {

    }

    presentAlert(event) {
        let alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'Sorry, this function is not available yet.',
          buttons: ['No problem']
        });
        alert.present();
    }
}

