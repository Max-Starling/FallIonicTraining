import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AddListItemPage } from '../add-list-item/add-list-item';
import { SubjectTransferService } from '../../services/subject-transfer.service';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
var ListItemPage = (function () {
    function ListItemPage(navParams, storage, transferService, navCtrl, alertCtrl, translate) {
        this.navParams = navParams;
        this.storage = storage;
        this.transferService = transferService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.item = {
            'title': this.navParams.get('title'),
            'icon': this.navParams.get('icon'),
            'creationDate': this.navParams.get('creationDate'),
            'timeObject': this.navParams.get('timeObject'),
            'author': this.navParams.get('author'),
            'content': this.navParams.get('content'),
        };
        this.checkIsFavorite();
    }
    ListItemPage.prototype.favButtonTapped = function (event) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('favorites').then(function (favoritesData) {
                favoritesData.forEach(function (element, index) {
                    if (element.creationDate == _this.item.creationDate) {
                        _this.isFavorite = true;
                    }
                });
                if (_this.isFavorite) {
                    _this.deleteItemIn('favorites');
                    _this.isFavorite = false;
                }
                else if (!_this.isFavorite) {
                    _this.addItemIn('favorites');
                    _this.isFavorite = true;
                }
            });
        });
    };
    ListItemPage.prototype.checkIsFavorite = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get('favorites').then(function (favoritesData) {
                favoritesData.forEach(function (element, index) {
                    if (element.creationDate == _this.item.creationDate) {
                        _this.isFavorite = true;
                    }
                });
                if (!_this.isFavorite) {
                    _this.isFavorite = false;
                }
            });
        });
    };
    ListItemPage.prototype.editButtonTapped = function (event) {
        if (this.checkAuthor(this.item.author)) {
            this.navCtrl.push(AddListItemPage, {
                purpose: 'edit',
                title: this.item.title,
                icon: this.item.icon,
                creationDate: this.item.creationDate,
                timeObject: this.item.timeObject,
                author: this.item.author,
                content: this.item.content,
            });
        }
        else {
            this.presentAlert();
        }
    };
    ListItemPage.prototype.deleteButtonTapped = function () {
        this.deleteItemIn('news');
        this.deleteItemIn('favorites');
        this.navCtrl.popToRoot();
    };
    ListItemPage.prototype.checkAuthor = function (articleAuthor) {
        if (articleAuthor != 'You') {
            return false;
        }
        return true;
    };
    ListItemPage.prototype.presentAlert = function () {
        var _this = this;
        this.translate.get('NOT_YOURS_ALERT_TITLE').subscribe(function (title) {
            _this.translate.get('NOT_YOURS_ALERT_SUBTITLE').subscribe(function (subtitle) {
                _this.translate.get('NOT_YOURS_ALERT_BUTTON').subscribe(function (button) {
                    var alert = _this.alertCtrl.create({
                        title: title,
                        subTitle: subtitle,
                        buttons: [button],
                    });
                    alert.present();
                });
            });
        });
    };
    ListItemPage.prototype.presentConfirm = function () {
        var _this = this;
        if (this.checkAuthor(this.item.author)) {
            this.translate.get('CONFIRM_ALERT_TITLE').subscribe(function (title) {
                _this.translate.get('DELETE_ALERT_SUBTITLE').subscribe(function (subtitle) {
                    _this.translate.get('YES_BUTTON').subscribe(function (buttonYes) {
                        _this.translate.get('NO_BUTTON').subscribe(function (buttonNo) {
                            var alert = _this.alertCtrl.create({
                                title: title,
                                message: subtitle,
                                buttons: [
                                    {
                                        text: buttonYes,
                                        handler: function () { return _this.deleteButtonTapped(); },
                                    },
                                    {
                                        text: buttonNo,
                                        role: 'cancel',
                                    }
                                ]
                            });
                            alert.present();
                        });
                    });
                });
            });
        }
        else {
            this.presentAlert();
        }
    };
    ListItemPage.prototype.addItemIn = function (storageName) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get(storageName).then(function (storageData) {
                storageData.push(_this.item);
                _this.transferService.putData(storageData, storageName);
                _this.storage.ready().then(function () {
                    _this.storage.set(storageName, storageData);
                });
            });
        });
    };
    ListItemPage.prototype.deleteItemIn = function (storageName) {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get(storageName).then(function (storageData) {
                storageData.forEach(function (element, index) {
                    if (element.creationDate == _this.item.creationDate) {
                        storageData.splice(index, 1);
                    }
                });
                _this.transferService.putData(storageData, storageName);
                _this.storage.ready().then(function () {
                    _this.storage.set(storageName, storageData);
                });
                console.log(storageData);
            });
        });
    };
    ListItemPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-list-item',
                    templateUrl: 'list-item.html',
                },] },
    ];
    /** @nocollapse */
    ListItemPage.ctorParameters = function () { return [
        { type: NavParams, },
        { type: Storage, },
        { type: SubjectTransferService, },
        { type: NavController, },
        { type: AlertController, },
        { type: TranslateService, },
    ]; };
    return ListItemPage;
}());
export { ListItemPage };
//# sourceMappingURL=list-item.js.map