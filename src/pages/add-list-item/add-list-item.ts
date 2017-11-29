import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { Storage } from '@ionic/storage';
import { SubjectTransferService } from '../../services/subject-transfer.service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
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
        date: string,
        author: string,
        content: string,
    };
    constructor(private navCtrl: NavController, private storage: Storage, private transferService: SubjectTransferService, private alertCtrl: AlertController) {
        this.icons = ['pizza', 'paper-plane', 'snow', 'bonfire', 'bowtie', 'clock', 'cloudy-night', 'cog', 'compass', 'flask', 'leaf'];
    }
    private addButtonTapped(event) {
        console.log(this.iconValue, this.contentValue);
        this.storage.ready().then(() => {
            this.storage.get('news').then((data) => {
                console.log(data);
                const creationDate = new Date().toISOString();
                this.newItem = {
                    title: this.titleValue,
                    icon: this.iconValue,
                    date: new Date().toISOString(),
                    author: 'You',
                    content: this.contentValue,
                }
                data.push(this.newItem);
                this.transferService.putData(data, 'news');
                this.storage.ready().then(() => {
                    this.storage.set('news', data);
                });
                this.navCtrl.popToRoot();
            })
        });
    }
}
