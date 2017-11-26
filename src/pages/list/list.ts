import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { ListItemPage } from '../list-item/list-item';

@Component({
    selector: 'page-list',
    templateUrl: 'list.html',
})
// tslint:disable:ter-indent
export class ListPage {
    selectedItem: any;
    icons: string[];
    items: Array<{ title: string, note: string, icon: string }>;
    private pushPage: any;
    private itemParams: any;
    constructor(public navCtrl: NavController, public navParams: NavParams, private appControl: App) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');

        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];

        this.items = [];
        for (let i = 1; i < 11; i++) {
            this.items.push({
                title: 'New ' + i,
                note: 'This is new #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)],
            });
        }
        this.counter = 0;
        console.log('qq', this.appControl.getRootNav());
        this.pushPage = ListItemPage;
        // this.itemParams = {};
    }
    private counter: number;
    itemTapped(event, i) {
        // That's right, we're pushing to ourselves!
        // this.navCtrl.push(ListPage, { item: i });
        this.counter++;
        this.navCtrl.push(this.pushPage, {
            title : i.title
        });
        console.log(this.navParams.get('id'), this.navParams.get('name'));
    }
}
