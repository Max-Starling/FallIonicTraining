import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { ListItemPage } from '../list-item/list-item';
import { AddListItemPage } from '../add-list-item/add-list-item';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import { SubjectTransferService } from '../../services/subject-transfer.service';
import { DateFormatterService } from '../../services/date-formatter.service';
// tslint:disable:ter-indent
var ListPage = (function () {
    function ListPage(navCtrl, navParams, appControl, http, storage, transferService, dateFormatterService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appControl = appControl;
        this.http = http;
        this.storage = storage;
        this.transferService = transferService;
        this.dateFormatterService = dateFormatterService;
        this.showingItems = [];
        transferService.getData().subscribe(function (data) {
            if (data.type == "news") {
                console.log(data.options);
                _this.showingItems = data.options;
                _this.storingItems = _this.showingItems;
            }
        });
        this.storage.ready().then(function () {
            _this.storage.get('news').then(function (data) {
                if (data) {
                    _this.showingItems = data;
                    _this.storingItems = _this.showingItems;
                }
            });
        });
    }
    ListPage.prototype.itemTapped = function (event, i) {
        this.navCtrl.push(ListItemPage, {
            title: i.title,
            icon: i.icon,
            creationDate: i.creationDate,
            timeObject: i.timeObject,
            author: i.author,
            content: i.content,
        });
    };
    ListPage.prototype.addButtonTapped = function (event) {
        this.navCtrl.push(AddListItemPage);
    };
    ListPage.prototype.onSearchInput = function (event) {
        this.showingItems = [];
        var searchValue = this.searchValue;
        var showingItems = this.showingItems;
        this.storingItems.forEach(function (item, i, arr) {
            if (item.title.toLowerCase().indexOf(searchValue.toLowerCase()) != -1) {
                showingItems.push(item);
            }
        });
    };
    ListPage.prototype.onSearchCancel = function (event) {
        this.showingItems = this.storingItems;
    };
    ListPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-list',
                    templateUrl: 'list.html',
                },] },
    ];
    /** @nocollapse */
    ListPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
        { type: App, },
        { type: Http, },
        { type: Storage, },
        { type: SubjectTransferService, },
        { type: DateFormatterService, },
    ]; };
    return ListPage;
}());
export { ListPage };
//# sourceMappingURL=list.js.map