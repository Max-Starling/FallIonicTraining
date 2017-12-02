
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SubjectTransferService } from '../../services/subject-transfer.service';
@Component({
    selector: 'select-icon',
    templateUrl: 'select-icon.component.html',
})
// tslint:disable:ter-indent
export class SelectIconComponent {
    private showingIcons: Array<{icon: string}>;
    private storingIcons: Array<{icon: string}>;
    private searchValue: string;
    constructor(private viewCtrl: ViewController,
                private navCtrl: NavController,
                private storage: Storage,
                private transferService: SubjectTransferService) {
                    this.showingIcons = [];
                    this.storage.ready().then(() => {
                        this.storage.get('icons').then((iconsData) => {
                            if (iconsData) {
                                this.showingIcons = iconsData;
                                this.storingIcons = this.showingIcons;
                            }
                            // transferService.getData().subscribe((data) => {
                            //     if (data.type == "icons") {
                            //         this.icons = data.options;
                            //     }
                            // });
                        });
                    });

    }
    private makeChoice(item) {
        this.viewCtrl.dismiss(item.icon);
    }

    private onSearchInput(event) {
        this.showingIcons = [];
        const searchValue = this.searchValue;
        const icons = this.showingIcons;
        this.storingIcons.forEach(function (item, i, arr) {
            if (item.icon.toLowerCase().indexOf(searchValue.toLowerCase()) != -1) {
                icons.push(item);
            }
        });
    }
    private onSearchCancel(event) {
        this.showingIcons = [];
        const searchValue = this.searchValue;
        const icons = this.showingIcons;
        this.storingIcons.forEach(function (item, i, arr) {
            if (item.icon.toLowerCase().indexOf(searchValue.toLowerCase()) != -1) {
                icons.push(item);
            }
        });
    }
}
