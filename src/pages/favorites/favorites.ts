import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { ListItemPage } from '../list-item/list-item';
import { Http } from '@angular/http';
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
        author: string,
        content: string,
    }>;
    private storingItems: any;
    private data: any;
    private searchValue: string;
    constructor(public navCtrl: NavController, public navParams: NavParams, private appControl: App, private http: Http) {
        this.showingItems = [];
        this.http.get('assets/favorites.json')
            .map(res => res.json())
            .subscribe(data => {
                this.data = data;
                for (let i = 0; i < this.data.length; i++) {
                    this.showingItems.push({
                        title: this.data[i].title,
                        summary: this.data[i].summary,
                        icon: this.data[i].icon,
                        date: this.data[i].createdAt,
                        author: this.data[i].author,
                        content: this.data[i].content,
                    });
                }
                this.storingItems = this.showingItems;
            });
    }
    private itemTapped(event, i) {
        this.navCtrl.push(ListItemPage, {
            title: i.title,
            summary: i.summary,
            date: i.date,
            author: i.author,
            content: i.content,
        });
    }
    private onSearchInput(event) {
        this.showingItems = [];
        const searchValue = this.searchValue;
        const showingItems = this.showingItems;
        this.storingItems.forEach(function (item, i, arr) {
            if(item.title.indexOf(searchValue) != -1) {
                showingItems.push(item);
            }
        });

    }
    private onSearchCancel(event) {
        this.showingItems = this.storingItems;
    }
}
