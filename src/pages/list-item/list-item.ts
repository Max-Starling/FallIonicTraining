import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-list-item',
    templateUrl: 'list-item.html',
})
export class ListItemPage {
    private itemTitle: any;
    private item: any = [];
    constructor(private navParams: NavParams) {
        this.item['title'] = this.navParams.get('title');
        this.item['summary'] = this.navParams.get('summary');
        this.item['date'] = this.navParams.get('date');
        this.item['author'] = this.navParams.get('author');
        this.item['content'] = this.navParams.get('content');
        console.log(this.item);
    }
}
