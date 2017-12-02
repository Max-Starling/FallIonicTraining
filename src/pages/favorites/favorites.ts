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
    private showingItems: Array<{
        title: string,
        summary: string,
        icon: string,
        date: string,
        formattedDate: string,
        author: string,
        content: string,
    }>;
    private storingItems: any;
    private data: any;
    private searchValue: string;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private appControl: App,
        private http: Http,
        private storage: Storage,
        private transferService: SubjectTransferService) {
        this.showingItems = [];
        transferService.getData().subscribe((data) => {
            if (data.type == "favorites") {
                this.showingItems = data.options;
                this.storingItems = this.showingItems;
            }
        });
        this.storage.ready().then(() => {
            // console.log('qqq')
            this.storage.get('favorites').then((data) => {
                if (data) {
                    this.showingItems = data;
                    this.storingItems = this.showingItems;
                    console.log('if');
                }
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
