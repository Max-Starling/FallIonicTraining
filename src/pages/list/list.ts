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
        date: string,
        formattedDate: string,
        author: string,
        content: string,
    }>;
    private storingItems: any;
    private news: any;
    private searchValue: string;
    constructor(public navCtrl: NavController, public navParams: NavParams, private appControl: App, private http: Http, private storage: Storage, private transferService: SubjectTransferService, private dateFormatterService: DateFormatterService) {
        this.showingItems = [];
        this.http.get('assets/news.json')
            .map(res => res.json())
            .subscribe(data => {
                this.news = data;
                for (let i = 0; i < this.news.length; i++) {
                    this.showingItems.push({
                        title: this.news[i].title,
                        icon: this.news[i].icon,
                        date: this.news[i].createdAt,
                        formattedDate: '',
                        author: this.news[i].author,
                        content: this.news[i].content,
                    });
                }
                this.showingItems.forEach((item) => {
                    item.formattedDate = this.dateFormatterService.formatDate(item.date);
                })
                console.log(this.showingItems);
                this.storingItems = this.showingItems;
                this.storage.ready().then(() => {
                    this.storage.set('news', this.showingItems);
                });
                this.storage.ready().then(() => {
                    this.storage.get('news').then((data) => {
                        if (data) {
                            this.showingItems = data;
                            this.storingItems = this.showingItems;
                        }
                    });
                });
                transferService.getData().subscribe((data) => {
                    if (data.type == "news") {
                        this.showingItems = data.options;
                        this.storingItems = this.showingItems;
                    }
                });
            });
    }
    private itemTapped(event, i) {
        this.navCtrl.push(ListItemPage, {
            title: i.title,
            icon: i.icon,
            date: i.date,
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
