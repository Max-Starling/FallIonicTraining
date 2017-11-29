import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SubjectTransferService } from '../../services/subject-transfer.service';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-list-item',
    templateUrl: 'list-item.html',
})
export class ListItemPage {
    private itemTitle: any;
    private item: any = [];
    constructor(private navParams: NavParams, private storage: Storage, private transferService: SubjectTransferService) {
        this.item['title'] = this.navParams.get('title');
        this.item['icon'] = this.navParams.get('icon');
        this.item['date'] = this.navParams.get('date');
        this.item['author'] = this.navParams.get('author');
        this.item['content'] = this.navParams.get('content');
        this.item['formattedDate'] = this.navParams.get('formattedDate');
        console.log(this.item);
    }
    private favButtonTapped(event) {
        this.storage.ready().then(() => {
            this.storage.get('favorites').then((data) => {
                console.log(data);
                if (data) {
                    if (!this.checkDateMatches(data)) {
                        data.push(this.item);
                        console.log(data);
                        this.transferService.putData(data, 'favorites');
                        this.storage.ready().then(() => {
                            this.storage.set('favorites', data);
                        });
                    }
                } else {
                    const dataArray = [];
                    dataArray.push(this.item);
                    console.log(dataArray);
                    this.transferService.putData(dataArray, 'favorites');
                    this.storage.ready().then(() => {
                        this.storage.set('favorites', dataArray);
                    });
                }
            });
        });
    }
    private checkDateMatches(array): boolean {
        let state = false;
        array.forEach((item, i) => {
            if (item.date == this.item.date) {
                console.log(item.date, this.item.date);
                state = true;
            }
        });
        return state;
    }
}
