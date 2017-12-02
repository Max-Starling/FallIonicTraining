import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AddListItemPage } from '../add-list-item/add-list-item';
import { SubjectTransferService } from '../../services/subject-transfer.service';
import { Storage } from '@ionic/storage';

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
        private alertCtrl: AlertController) {
        this.item = {
            'title': this.navParams.get('title'),
            'icon': this.navParams.get('icon'),
            'creationDate': this.navParams.get('creationDate'),
            'author': this.navParams.get('author'),
            'content': this.navParams.get('content'),
            'formattedDate': this.navParams.get('formattedDate')
        }
        console.log(this.item);
    }

    private favButtonTapped(event) {
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
                console.log(favoritesData);
                console.log(this.isFavorite)
                if (this.isFavorite) {
                    this.deleteItemIn('favorites');
                } else {
                    this.addItemIn('favorites');
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
                formattedDate: this.item.formattedDate,
                author: this.item.author,
                content: this.item.content,
            });
        } else {
            this.presentAlert();
        }
    }
    private deleteButtonTapped(event) {
        if (this.checkAuthor(this.item.author)) {
            this.deleteItemIn('news');
            this.deleteItemIn('favorites');
            this.navCtrl.popToRoot();
        } else {
            this.presentAlert();
        }
    }
    private checkAuthor(articleAuthor) {
        if (articleAuthor != 'You') {
            return false;
        }
        return true;
    }
    private presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Huh...',
            subTitle: "Sorry, it's now yous. You can't do this.",
            buttons: ['No problem']
        });
        alert.present();
    }
    private presentConfirm(alertTitle, alertMessage) {
        let alert = this.alertCtrl.create({
          title: 'Slow down, please...',
          message: 'Do you want to save changes?',
          buttons: [
            {
              text: 'No',
            //   role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Yes',
              handler: () => {
                console.log('Buy clicked');
              }
            }
          ]
        });
        alert.present();
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
