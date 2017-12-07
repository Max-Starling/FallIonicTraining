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
    public showingItems: Array<{
        title: string,
        icon: string,
        creationDate: string,
        timeObject: {
            year: number,
            month: string,
            day:  number,
            hours: number,
            minutes: number,
            seconds: number,
        },
        author: string,
        content: string,
    }>;
    public storingItems: any;
    public news: any;
    public searchValue: string;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public appControl: App,
                public http: Http,
                public storage: Storage,
                public transferService: SubjectTransferService,
                public dateFormatterService: DateFormatterService) {
        this.showingItems = [];
        transferService.getData().subscribe((data) => {
            if (data.type == "news") {
                console.log(data.options);
                this.showingItems = data.options;
                this.storingItems = this.showingItems;
            }
        });
        this.storage.ready().then(() => {
            this.storage.get('news').then((data) => {
                if (data) {
                    this.showingItems = data;
                    this.storingItems = this.showingItems;
                }
            });
        });
    }
    public itemTapped(event, i) {
        this.navCtrl.push(ListItemPage, {
            title: i.title,
            icon: i.icon,
            creationDate: i.creationDate,
            timeObject: i.timeObject,
            author: i.author,
            content: i.content,
        });
    }
    public addButtonTapped(event) {
        this.navCtrl.push(AddListItemPage);
    }
    public onSearchInput(event) {
        this.showingItems = [];
        const searchValue = this.searchValue;
        const showingItems = this.showingItems;
        this.storingItems.forEach(function (item, i, arr) {
            if (item.title.toLowerCase().indexOf(searchValue.toLowerCase()) != -1) {
                showingItems.push(item);
            }
        });
    }
    public onSearchCancel(event) {
        this.showingItems = this.storingItems;
    }
}
