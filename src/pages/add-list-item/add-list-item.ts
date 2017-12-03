import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';
import { SubjectTransferService } from '../../services/subject-transfer.service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { DateFormatterService } from '../../services/date-formatter.service';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { SelectIconComponent } from '../../components/select-icon/select-icon.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'page-add-list-item',
    templateUrl: 'add-list-item.html',
})
// tslint:disable:ter-indent
export class AddListItemPage {
    private titleValue: string;
    private contentValue: string;
    private iconValue: string;
    private icons: Array<string>;
    private news: any;
    private newItem: {
        title: string,
        icon: string,
        creationDate: string,
        timeObject: any,
        author: string,
        content: string,
    };
    private isSelected: boolean;
    constructor(private navCtrl: NavController,
                private modalCtrl: ModalController,
                private storage: Storage,
                private transferService: SubjectTransferService,
                private alertCtrl: AlertController,
                private dateFormatterService: DateFormatterService,
                private navParams: NavParams,
                private translate: TranslateService) {
        this.iconValue = "CHOOSE_ICON";
        if (this.navParams.get('purpose') === "edit") {
            this.titleValue = this.navParams.data.title;
            this.contentValue = this.navParams.data.content;
            this.iconValue = this.navParams.data.icon;
        }
        this.isSelected = false;
    }
    private presentSelectIcon() {
        let selectIconModal = this.modalCtrl.create(SelectIconComponent);
        selectIconModal.onDidDismiss(data => {
            if (data) {
                this.iconValue = data;
                this.isSelected = true;
            }
        });
        selectIconModal.present();
    }
    private saveButtonTapped() {
        if (this.navParams.get('purpose') === "edit") {
            this.editArticleIn('news');
            this.editArticleIn('favorites');
        } else {
            this.addArticleIn('news');
        }

    }
    private checkDateMatches(array): boolean {
        let state = false;
        array.forEach((item, i) => {
            if (item.date == this.newItem.creationDate) {
                state = true;
            }
        });
        return state;
    }
    private addArticleIn(storageName) {
        this.storage.ready().then(() => {
            this.storage.get(storageName).then((storageData) => {
                let date;
                if (this.navParams.data.date) {
                    date = this.navParams.data.date;
                } else {
                    date = new Date().toISOString();
                }
                this.newItem = {
                    title: this.titleValue,
                    icon: this.iconValue,
                    creationDate: date,
                    timeObject: this.dateFormatterService.getTimeObject(date),
                    author: 'You',
                    content: this.contentValue,
                }
                storageData.push(this.newItem);
                this.transferService.putData(storageData, storageName);
                this.storage.ready().then(() => {
                    this.storage.set(storageName, storageData);
                    this.navCtrl.pop();
                });
            })
        });
    }
    private editArticleIn(storageName) {
        this.storage.ready().then(() => {
            this.storage.get(storageName).then((storageData) => {
                if (storageData) {
                    storageData.forEach((element, index) => {
                        if (element.creationDate == this.navParams.data.creationDate) {
                            element.title = this.titleValue;
                            element.icon = this.iconValue;
                            element.content = this.contentValue;
                        }
                    });
                    this.transferService.putData(storageData, storageName);
                    this.storage.ready().then(() => {
                        this.storage.set(storageName, storageData);
                        this.navCtrl.popToRoot();
                    });
                }
            });
        });
    }
    private presentConfirm() {
        this.translate.get('CONFIRM_ALERT_TITLE').subscribe((title: string) => {
            this.translate.get('SAVE_ALERT_SUBTITLE').subscribe((subtitle: string) => {
                this.translate.get('YES_BUTTON').subscribe((buttonYes: string) => {
                    this.translate.get('NO_BUTTON').subscribe((buttonNo: string) => {
                        this.translate.get('CANCEL_BUTTON').subscribe((buttonCancel: string) => {
                            let alert = this.alertCtrl.create({
                                title: title,
                                message: subtitle,
                                buttons: [
                                    {
                                        text: buttonYes,
                                        handler: () => this.saveButtonTapped(),
                                    },
                                    {
                                        text: buttonNo,
                                        handler: () => {
                                            this.navCtrl.pop();
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
    }
}
