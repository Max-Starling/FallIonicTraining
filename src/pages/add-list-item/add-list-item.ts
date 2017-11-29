import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';
import { SubjectTransferService } from '../../services/subject-transfer.service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { DateFormatterService } from '../../services/date-formatter.service';
import { NavParams } from 'ionic-angular/navigation/nav-params';
// import { Http, HttpModule } from '@angular/http';

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
        formattedDate: string,
        author: string,
        content: string,
    };
    constructor(private navCtrl: NavController, private storage: Storage, private transferService: SubjectTransferService, private alertCtrl: AlertController, private dateFormatterService: DateFormatterService, private navParams: NavParams) {
        this.icons = ['pizza', 'paper-plane', 'snow', 'bonfire', 'bowtie', 'clock', 'cloudy-night', 'cog', 'compass', 'flask', 'leaf'];
        if (this.navParams.get('purpose') === "edit") {
            console.log('qq')
            this.titleValue = this.navParams.data.title;
            this.contentValue = this.navParams.data.content;
            this.iconValue = this.navParams.data.icon;

        }
    }
    private saveButtonTapped(event) {
        console.log(this.iconValue, this.contentValue);
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
                console.log(item.date, this.newItem.creationDate);
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
                    formattedDate: this.dateFormatterService.formatDate(date),
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
}
