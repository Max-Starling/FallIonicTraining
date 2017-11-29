import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { ListItemPage } from '../list-item/list-item';
import { AddListItemPage } from '../add-list-item/add-list-item';
import { Http, HttpModule } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map'
import { SubjectTransferService } from '../../services/subject-transfer.service';
import { DateFormatterService } from '../../services/date-formatter.service';

@Component({
    selector: 'page-list',
    templateUrl: 'list.html',
})
// tslint:disable:ter-indent
export class ListPage {
    private showingItems: Array<{
        title: string,
        icon: string,
        creationDate: string,
        formattedDate: string,
        author: string,
        content: string,
    }>;
    private storingItems: any;
    private news: any;
    private searchValue: string;
    constructor(public navCtrl: NavController, public navParams: NavParams, private appControl: App, private http: Http, private storage: Storage, private transferService: SubjectTransferService, private dateFormatterService: DateFormatterService) {
        this.showingItems = [];
        this.storage.ready().then(() => {
            this.storage.get('news').then((data) => {
                if (data) {
                    this.showingItems = data;
                    this.storingItems = this.showingItems;
                    console.log('if');
                }
                transferService.getData().subscribe((data) => {
                    if (data.type == "news") {
                        this.showingItems = data.options;
                        this.storingItems = this.showingItems;
                    }
                });
            });
        });
    }
    private itemTapped(event, i) {
        console.log(i.creationDate);
        this.navCtrl.push(ListItemPage, {
            title: i.title,
            icon: i.icon,
            creationDate: i.creationDate,
            formattedDate: i.formattedDate,
            author: i.author,
            content: i.content,
        });
    }
    private addButtonTapped(event) {
        this.navCtrl.push(AddListItemPage);
    }
    private onSearchInput(event) {
        this.showingItems = [];
        const searchValue = this.searchValue;
        const showingItems = this.showingItems;
        this.storingItems.forEach(function (item, i, arr) {
            if (item.title.toLowerCase().indexOf(searchValue.toLowerCase()) != -1) {
                showingItems.push(item);
            }
        });
    }
    private onSearchCancel(event) {
        this.showingItems = this.storingItems;
    }
}
