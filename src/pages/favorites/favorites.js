import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { ListItemPage } from '../list-item/list-item';
import { Http } from '@angular/http';
import { SubjectTransferService } from '../../services/subject-transfer.service';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
// tslint:disable:ter-indent
var FavoritesPage = (function () {
    function FavoritesPage(navCtrl, navParams, appControl, http, storage, transferService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appControl = appControl;
        this.http = http;
        this.storage = storage;
        this.transferService = transferService;
        this.showingItems = [];
        transferService.getData().subscribe(function (data) {
            if (data.type == "favorites") {
                _this.showingItems = data.options;
                _this.storingItems = _this.showingItems;
            }
        });
        this.storage.ready().then(function () {
            _this.storage.get('favorites').then(function (data) {
                if (data) {
                    _this.showingItems = data;
                    _this.storingItems = _this.showingItems;
                }
            });
        });
    }
    FavoritesPage.prototype.itemTapped = function (event, i) {
        console.log(i.creationDate);
        this.navCtrl.push(ListItemPage, {
            title: i.title,
            icon: i.icon,
            creationDate: i.creationDate,
            timeObject: i.timeObject,
            author: i.author,
            content: i.content,
        });
    };
    FavoritesPage.prototype.onSearchInput = function (event) {
        this.showingItems = [];
        var searchValue = this.searchValue;
        var showingItems = this.showingItems;
        this.storingItems.forEach(function (item, i, arr) {
            if (item.title.toLowerCase().indexOf(searchValue.toLowerCase()) != -1) {
                showingItems.push(item);
            }
        });
    };
    FavoritesPage.prototype.onSearchCancel = function (event) {
        this.showingItems = this.storingItems;
    };
    FavoritesPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-favorites',
                    templateUrl: 'favorites.html',
                },] },
    ];
    /** @nocollapse */
    FavoritesPage.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
        { type: App, },
        { type: Http, },
        { type: Storage, },
        { type: SubjectTransferService, },
    ]; };
    return FavoritesPage;
}());
export { FavoritesPage };
//# sourceMappingURL=favorites.js.map