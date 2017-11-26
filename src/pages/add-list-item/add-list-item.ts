import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
    selector: 'page-add-list-item',
    templateUrl: 'add-list-item.html',
})
// tslint:disable:ter-indent
export class AddListItemPage {
    private titleValue: string;
    private contentValue: string;
    constructor(private navCtrl: NavController) {

    }
    private addButtonTapped(event) {
        console.log('added');
        this.navCtrl.popToRoot();
        // this.navCtrl.popTo(ListPage, {
        //     title: this.titleValue,
        //     content: this.contentValue,
        // });
    }
}
