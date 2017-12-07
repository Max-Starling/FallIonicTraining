import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { ListItemPage } from '../list-item/list-item';
import { Http } from '@angular/http';
import { SubjectTransferService } from '../../services/subject-transfer.service';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map'

@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html',
})
// tslint:disable:ter-indent
export class FavoritesPage {
    public showingItems: Array<{
        title: string,
        summary: string,
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
    public data: any;
    public searchValue: string;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public appControl: App,
                public http: Http,
                public storage: Storage,
                public transferService: SubjectTransferService) {
        this.showingItems = [];
        transferService.getData().subscribe((data) => {
            if (data.type == "favorites") {
                this.showingItems = data.options;
                this.storingItems = this.showingItems;
            }
        });
        this.storage.ready().then(() => {
            this.storage.get('favorites').then((data) => {
                if (data) {
                    this.showingItems = data;
                    this.storingItems = this.showingItems;
                }
            });
        });
    }
    public itemTapped(event, i) {
        console.log(i.creationDate);
        this.navCtrl.push(ListItemPage, {
            title: i.title,
            icon: i.icon,
            creationDate: i.creationDate,
            timeObject: i.timeObject,
            author: i.author,
            content: i.content,
        });
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
