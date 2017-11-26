import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-list-item',
    templateUrl: 'list-item.html',
})
export class ListItemPage {
    private itemParams: any;
    constructor(private navParams: NavParams) {
        this.itemParams = this.navParams.get('title');
        console.log(this.itemParams);
    }
}
