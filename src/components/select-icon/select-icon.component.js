import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SubjectTransferService } from '../../services/subject-transfer.service';
// tslint:disable:ter-indent
var SelectIconComponent = (function () {
    function SelectIconComponent(viewCtrl, navCtrl, storage, transferService) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.transferService = transferService;
        this.showingIcons = [];
        this.storage.ready().then(function () {
            _this.storage.get('icons').then(function (iconsData) {
                if (iconsData) {
                    _this.showingIcons = iconsData;
                    _this.storingIcons = _this.showingIcons;
                }
                // transferService.getData().subscribe((data) => {
                //     if (data.type == "icons") {
                //         this.icons = data.options;
                //     }
                // });
            });
        });
    }
    SelectIconComponent.prototype.makeChoice = function (item) {
        this.viewCtrl.dismiss(item.icon);
    };
    SelectIconComponent.prototype.onSearchInput = function (event) {
        this.showingIcons = [];
        var searchValue = this.searchValue;
        var icons = this.showingIcons;
        this.storingIcons.forEach(function (item, i, arr) {
            if (item.icon.toLowerCase().indexOf(searchValue.toLowerCase()) != -1) {
                icons.push(item);
            }
        });
    };
    SelectIconComponent.prototype.onSearchCancel = function (event) {
        this.showingIcons = [];
        var searchValue = this.searchValue;
        var icons = this.showingIcons;
        this.storingIcons.forEach(function (item, i, arr) {
            if (item.icon.toLowerCase().indexOf(searchValue.toLowerCase()) != -1) {
                icons.push(item);
            }
        });
    };
    SelectIconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'select-icon',
                    templateUrl: 'select-icon.component.html',
                },] },
    ];
    /** @nocollapse */
    SelectIconComponent.ctorParameters = function () { return [
        { type: ViewController, },
        { type: NavController, },
        { type: Storage, },
        { type: SubjectTransferService, },
    ]; };
    return SelectIconComponent;
}());
export { SelectIconComponent };
//# sourceMappingURL=select-icon.component.js.map