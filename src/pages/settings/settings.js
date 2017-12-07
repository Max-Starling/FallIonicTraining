import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
// tslint:disable:ter-indent
var SettingsPage = (function () {
    function SettingsPage(navCtrl, alertCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.languages = [
            { id: 'en', name: 'ENGLISH', checked: false, isWorking: true },
            { id: 'ru', name: 'RUSSIAN', checked: false, isWorking: true },
            { id: 'de', name: 'DEUTSCH', checked: false, isWorking: false },
            { id: 'fr', name: 'FRENCH', checked: false, isWorking: false }
        ];
        if (this.translateService.currentLang) {
            this.languages.forEach(function (item, i) {
                if (item.id == _this.translateService.currentLang) {
                    item.checked = true;
                }
            });
        }
    }
    SettingsPage.prototype.setLanguage = function (event, language) {
        if (language.isWorking) {
            this.translateService.use(language.id);
            this.languages.forEach(function (item, i) {
                item.checked = false;
            });
            language.checked = true;
        }
        else {
            this.presentAlert();
        }
    };
    SettingsPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Oops!',
            subTitle: 'Sorry, this function is not available yet.',
            buttons: ['No problem']
        });
        alert.present();
    };
    SettingsPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-settings',
                    templateUrl: 'settings.html',
                },] },
    ];
    /** @nocollapse */
    SettingsPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: AlertController, },
        { type: TranslateService, },
    ]; };
    return SettingsPage;
}());
export { SettingsPage };
//# sourceMappingURL=settings.js.map