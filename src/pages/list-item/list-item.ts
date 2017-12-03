import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AddListItemPage } from '../add-list-item/add-list-item';
import { SubjectTransferService } from '../../services/subject-transfer.service';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'page-list-item',
    templateUrl: 'list-item.html',
})
export class ListItemPage {
    private itemTitle: any;
    private item: any;
    private isFavorite: boolean;
    constructor(private navParams: NavParams,
        private storage: Storage,
        private transferService: SubjectTransferService,
        private navCtrl: NavController,
        private alertCtrl: AlertController,
        private translate: TranslateService) {
        this.item = {
            'title': this.navParams.get('title'),
            'icon': this.navParams.get('icon'),
            'creationDate': this.navParams.get('creationDate'),
            'timeObject': this.navParams.get('timeObject'),
            'author': this.navParams.get('author'),
            'content': this.navParams.get('content'),
        }
        this.checkIsFavorite();
    }

    private favButtonTapped(event) {
        this.storage.ready().then(() => {
            this.storage.get('favorites').then((favoritesData) => {
                favoritesData.forEach((element, index) => {
                    if (element.creationDate == this.item.creationDate) {
                        this.isFavorite = true;
                    }
                });
                if (this.isFavorite) {
                    this.deleteItemIn('favorites');
                    this.isFavorite = false;
                } else if (!this.isFavorite) {
                    this.addItemIn('favorites');
                    this.isFavorite = true;
                }
            });
        });
    }
    private checkIsFavorite() {
        this.storage.ready().then(() => {
            this.storage.get('favorites').then((favoritesData) => {
                favoritesData.forEach((element, index) => {
                    if (element.creationDate == this.item.creationDate) {
                        this.isFavorite = true;
                    }
                });
                if (!this.isFavorite) {
                    this.isFavorite = false;
                }
            });
        });
    }
    private editButtonTapped(event) {
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
        } else {
            this.presentAlert();
        }
    }
    private deleteButtonTapped() {
        this.deleteItemIn('news');
        this.deleteItemIn('favorites');
        this.navCtrl.popToRoot();
    }
    private checkAuthor(articleAuthor) {
        if (articleAuthor != 'You') {
            return false;
        }
        return true;
    }
    private presentAlert() {
        this.translate.get('NOT_YOURS_ALERT_TITLE').subscribe((title: string) => {
            this.translate.get('NOT_YOURS_ALERT_SUBTITLE').subscribe((subtitle: string) => {
                this.translate.get('NOT_YOURS_ALERT_BUTTON').subscribe((button: string) => {
                    let alert = this.alertCtrl.create({
                        title: title,
                        subTitle: subtitle,
                        buttons: [button],
                    });
                    alert.present();
                });
            });
        });
    }
    private presentConfirm() {
        if (this.checkAuthor(this.item.author)) {
            this.translate.get('CONFIRM_ALERT_TITLE').subscribe((title: string) => {
                this.translate.get('DELETE_ALERT_SUBTITLE').subscribe((subtitle: string) => {
                    this.translate.get('YES_BUTTON').subscribe((buttonYes: string) => {
                        this.translate.get('NO_BUTTON').subscribe((buttonNo: string) => {
                            let alert = this.alertCtrl.create({
                                title: title,
                                message: subtitle,
                                buttons: [
                                    {
                                        text: buttonYes,
                                        handler: () => this.deleteButtonTapped(),
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
    }
    private addItemIn(storageName) {
        this.storage.ready().then(() => {
            this.storage.get(storageName).then((storageData) => {
                storageData.push(this.item);
                this.transferService.putData(storageData, storageName);
                this.storage.ready().then(() => {
                    this.storage.set(storageName, storageData);
                });
            })
        });
    }
    private deleteItemIn(storageName) {
        this.storage.ready().then(() => {
            this.storage.get(storageName).then((storageData) => {
                storageData.forEach((element, index) => {
                    if (element.creationDate == this.item.creationDate) {
                        storageData.splice(index, 1);
                    }
                });
                this.transferService.putData(storageData, storageName);
                this.storage.ready().then(() => {
                    this.storage.set(storageName, storageData);
                });
                console.log(storageData);
            });
        });
    }
}
