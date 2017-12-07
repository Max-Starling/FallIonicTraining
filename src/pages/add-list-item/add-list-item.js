import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SubjectTransferService } from '../../services/subject-transfer.service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { DateFormatterService } from '../../services/date-formatter.service';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { SelectIconComponent } from '../../components/select-icon/select-icon.component';
import { TranslateService } from '@ngx-translate/core';
// tslint:disable:ter-indent
var AddListItemPage = (function () {
    function AddListItemPage(navCtrl, modalCtrl, storage, transferService, alertCtrl, dateFormatterService, navParams, translate) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.transferService = transferService;
        this.alertCtrl = alertCtrl;
        this.dateFormatterService = dateFormatterService;
        this.navParams = navParams;
        this.translate = translate;
        this.iconValue = "CHOOSE_ICON";
        if (this.navParams.get('purpose') === "edit") {
            this.titleValue = this.navParams.data.title;
            this.contentValue = this.navParams.data.content;
            this.iconValue = this.navParams.data.icon;
        }
        this.isSelected = false;
    }
    AddListItemPage.prototype.presentSelectIcon = function () {
        var _this = this;
        var selectIconModal = this.modalCtrl.create(SelectIconComponent);
        selectIconModal.onDidDismiss(function (data) {
            if (data) {
                _this.iconValue = data;
                _this.isSelected = true;
            }
        });
        selectIconModal.present();
    };
    AddListItemPage.prototype.saveButtonTapped = function () {
        if (this.navParams.get('purpose') === "edit") {
            this.editArticleIn('news');
            this.editArticleIn('favorites');
        }
        else {
            this.addArticleIn('news');
        }
    };
    AddListItemPage.prototype.checkDateMatches = function (array) {
        var _this = this;
        var state = false;
        array.forEach(function (item, i) {
            if (item.date == _this.newItem.creationDate) {
                state = true;
            }
        });
        return state;
    };
    AddListItemPage.prototype.addArticleIn = function (storageName) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get(storageName).then(function (storageData) {
                var date;
                if (_this.navParams.data.date) {
                    date = _this.navParams.data.date;
                }
                else {
                    date = new Date().toISOString();
                }
                _this.newItem = {
                    title: _this.titleValue,
                    icon: _this.iconValue,
                    creationDate: date,
                    timeObject: _this.dateFormatterService.getTimeObject(date),
                    author: 'You',
                    content: _this.contentValue,
                };
                storageData.push(_this.newItem);
                _this.transferService.putData(storageData, storageName);
                _this.storage.ready().then(function () {
                    _this.storage.set(storageName, storageData);
                    _this.navCtrl.pop();
                });
            });
        });
    };
    AddListItemPage.prototype.editArticleIn = function (storageName) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get(storageName).then(function (storageData) {
                if (storageData) {
                    storageData.forEach(function (element, index) {
                        if (element.creationDate == _this.navParams.data.creationDate) {
                            element.title = _this.titleValue;
                            element.icon = _this.iconValue;
                            element.content = _this.contentValue;
                        }
                    });
                    _this.transferService.putData(storageData, storageName);
                    _this.storage.ready().then(function () {
                        _this.storage.set(storageName, storageData);
                        _this.navCtrl.popToRoot();
                    });
                }
            });
        });
    };
    AddListItemPage.prototype.presentConfirm = function () {
        var _this = this;
        this.translate.get('CONFIRM_ALERT_TITLE').subscribe(function (title) {
            _this.translate.get('SAVE_ALERT_SUBTITLE').subscribe(function (subtitle) {
                _this.translate.get('YES_BUTTON').subscribe(function (buttonYes) {
                    _this.translate.get('NO_BUTTON').subscribe(function (buttonNo) {
                        _this.translate.get('CANCEL_BUTTON').subscribe(function (buttonCancel) {
                            var alert = _this.alertCtrl.create({
                                title: title,
                                message: subtitle,
                                buttons: [
                                    {
                                        text: buttonYes,
                                        handler: function () { return _this.saveButtonTapped(); },
                                    },
                                    {
                                        text: buttonNo,
                                        handler: function () {
                                            _this.navCtrl.pop();
                                        },
                                    },
                                    {
                                        text: buttonCancel,
                                        role: 'cancel',
                                    }
                                ]
                            });
                            alert.present();
                        });
                    });
                });
            });
        });
    };
    AddListItemPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-add-list-item',
                    templateUrl: 'add-list-item.html',
                },] },
    ];
    /** @nocollapse */
    AddListItemPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: ModalController, },
        { type: Storage, },
        { type: SubjectTransferService, },
        { type: AlertController, },
        { type: DateFormatterService, },
        { type: NavParams, },
        { type: TranslateService, },
    ]; };
    return AddListItemPage;
}());
export { AddListItemPage };
//# sourceMappingURL=add-list-item.js.map