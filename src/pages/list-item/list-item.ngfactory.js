/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "ionic-angular/components/grid/row";
import * as i2 from "ionic-angular/components/badge/badge";
import * as i3 from "ionic-angular/config/config";
import * as i4 from "@ngx-translate/core";
import * as i5 from "ionic-angular/components/toolbar/toolbar-header";
import * as i6 from "ionic-angular/navigation/view-controller";
import * as i7 from "../../../node_modules/ionic-angular/components/toolbar/navbar.ngfactory";
import * as i8 from "ionic-angular/components/toolbar/navbar";
import * as i9 from "ionic-angular/components/app/app";
import * as i10 from "ionic-angular/navigation/nav-controller";
import * as i11 from "../../../node_modules/ionic-angular/components/button/button.ngfactory";
import * as i12 from "ionic-angular/components/button/button";
import * as i13 from "ionic-angular/components/menu/menu-toggle";
import * as i14 from "ionic-angular/components/app/menu-controller";
import * as i15 from "ionic-angular/components/toolbar/toolbar-item";
import * as i16 from "ionic-angular/components/toolbar/toolbar";
import * as i17 from "ionic-angular/components/icon/icon";
import * as i18 from "../../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory";
import * as i19 from "ionic-angular/components/toolbar/toolbar-title";
import * as i20 from "../../../node_modules/ionic-angular/components/content/content.ngfactory";
import * as i21 from "ionic-angular/components/content/content";
import * as i22 from "ionic-angular/platform/platform";
import * as i23 from "ionic-angular/platform/dom-controller";
import * as i24 from "ionic-angular/platform/keyboard";
import * as i25 from "@angular/common";
import * as i26 from "./list-item";
import * as i27 from "ionic-angular/navigation/nav-params";
import * as i28 from "@ionic/storage/dist/storage";
import * as i29 from "../../services/subject-transfer.service";
import * as i30 from "ionic-angular/components/alert/alert-controller";
var styles_ListItemPage = [];
var RenderType_ListItemPage = i0.ɵcrt({ encapsulation: 2, styles: styles_ListItemPage, data: {} });
export { RenderType_ListItemPage as RenderType_ListItemPage };
function View_ListItemPage_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["class", "list-item-content-bg"], ["padding", ""]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(2, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), i0.ɵted(3, null, ["", " "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.item.content; _ck(_v, 3, 0, currVal_0); }); }
function View_ListItemPage_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 14, "div", [["class", "list-item-content-bg"], ["padding", ""]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(2, 0, null, null, 11, "ion-row", [["class", "row"], ["justify-content-between", ""]], null, null, null, null, null)), i0.ɵdid(3, 16384, null, 0, i1.Row, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(5, 0, null, null, 3, "ion-badge", [], null, null, null, null, null)), i0.ɵdid(6, 16384, null, 0, i2.Badge, [i3.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(7, null, ["", ", ", " | ", ":", " "])), i0.ɵpid(131072, i4.TranslatePipe, [i4.TranslateService, i0.ChangeDetectorRef]), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(10, 0, null, null, 2, "ion-badge", [], null, null, null, null, null)), i0.ɵdid(11, 16384, null, 0, i2.Badge, [i3.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(12, null, ["", " "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵunv(_v, 7, 0, i0.ɵnov(_v, 8).transform(_co.item.timeObject.month)); var currVal_1 = _co.item.timeObject.day; var currVal_2 = _co.item.timeObject.hours; var currVal_3 = _co.item.timeObject.minutes; _ck(_v, 7, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.item.author; _ck(_v, 12, 0, currVal_4); }); }
export function View_ListItemPage_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 20, "ion-header", [], null, null, null, null, null)), i0.ɵdid(1, 16384, null, 0, i5.Header, [i3.Config, i0.ElementRef, i0.Renderer, [2, i6.ViewController]], null, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(3, 0, null, null, 16, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, i7.View_Navbar_0, i7.RenderType_Navbar)), i0.ɵdid(4, 49152, null, 0, i8.Navbar, [i9.App, [2, i6.ViewController], [2, i10.NavController], i3.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 3, ["\n        "])), (_l()(), i0.ɵeld(6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 8).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i11.View_Button_0, i11.RenderType_Button)), i0.ɵdid(7, 1097728, [[1, 4]], 0, i12.Button, [[8, ""], i3.Config, i0.ElementRef, i0.Renderer], null, null), i0.ɵdid(8, 1064960, null, 0, i13.MenuToggle, [i14.MenuController, [2, i6.ViewController], [2, i12.Button], [2, i8.Navbar]], { menuToggle: [0, "menuToggle"] }, null), i0.ɵdid(9, 16384, null, 1, i15.ToolbarItem, [i3.Config, i0.ElementRef, i0.Renderer, [2, i16.Toolbar], [2, i8.Navbar]], null, null), i0.ɵqud(603979776, 1, { _buttons: 1 }), (_l()(), i0.ɵted(-1, 0, ["\n            "])), (_l()(), i0.ɵeld(12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(13, 147456, null, 0, i17.Icon, [i3.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n        "])), (_l()(), i0.ɵted(-1, 3, ["\n        "])), (_l()(), i0.ɵeld(16, 0, null, 3, 2, "ion-title", [], null, null, null, i18.View_ToolbarTitle_0, i18.RenderType_ToolbarTitle)), i0.ɵdid(17, 49152, null, 0, i19.ToolbarTitle, [i3.Config, i0.ElementRef, i0.Renderer, [2, i16.Toolbar], [2, i8.Navbar]], null, null), (_l()(), i0.ɵted(18, 0, ["", ""])), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵeld(22, 0, null, null, 21, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i20.View_Content_0, i20.RenderType_Content)), i0.ɵdid(23, 4374528, null, 0, i21.Content, [i3.Config, i22.Platform, i23.DomController, i0.ElementRef, i0.Renderer, i9.App, i24.Keyboard, i0.NgZone, [2, i6.ViewController], [2, i10.NavController]], null, null), (_l()(), i0.ɵted(-1, 1, ["\n    "])), (_l()(), i0.ɵeld(25, 0, null, 1, 11, "ion-row", [["class", "item-icons-panel row"], ["justify-content-end", ""], ["margin-bottom", ""], ["margin-top", ""]], null, null, null, null, null)), i0.ɵdid(26, 16384, null, 0, i1.Row, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(28, 0, null, null, 1, "ion-icon", [["class", "list-item-icons"], ["margin-right", ""], ["name", "heart"], ["role", "img"]], [[2, "favorited", null], [2, "hide", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.favButtonTapped($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(29, 147456, null, 0, i17.Icon, [i3.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(31, 0, null, null, 1, "ion-icon", [["class", "list-item-icons"], ["margin-right", ""], ["name", "create"], ["role", "img"]], [[2, "hide", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.editButtonTapped($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(32, 147456, null, 0, i17.Icon, [i3.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(34, 0, null, null, 1, "ion-icon", [["class", "list-item-icons"], ["margin-right", ""], ["name", "close"], ["role", "img"]], [[2, "hide", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.presentConfirm() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(35, 147456, null, 0, i17.Icon, [i3.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, 1, ["\n    "])), (_l()(), i0.ɵand(16777216, null, 1, 1, null, View_ListItemPage_1)), i0.ɵdid(39, 16384, null, 0, i25.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, 1, ["\n    "])), (_l()(), i0.ɵand(16777216, null, 1, 1, null, View_ListItemPage_2)), i0.ɵdid(42, 16384, null, 0, i25.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, 1, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_3 = ""; _ck(_v, 8, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 13, 0, currVal_5); var currVal_11 = "heart"; _ck(_v, 29, 0, currVal_11); var currVal_13 = "create"; _ck(_v, 32, 0, currVal_13); var currVal_15 = "close"; _ck(_v, 35, 0, currVal_15); var currVal_16 = _co.item; _ck(_v, 39, 0, currVal_16); var currVal_17 = _co.item; _ck(_v, 42, 0, currVal_17); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵnov(_v, 4)._hidden; var currVal_1 = i0.ɵnov(_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = i0.ɵnov(_v, 8).isHidden; _ck(_v, 6, 0, currVal_2); var currVal_4 = i0.ɵnov(_v, 13)._hidden; _ck(_v, 12, 0, currVal_4); var currVal_6 = _co.item.title; _ck(_v, 18, 0, currVal_6); var currVal_7 = i0.ɵnov(_v, 23).statusbarPadding; var currVal_8 = i0.ɵnov(_v, 23)._hasRefresher; _ck(_v, 22, 0, currVal_7, currVal_8); var currVal_9 = _co.isFavorite; var currVal_10 = i0.ɵnov(_v, 29)._hidden; _ck(_v, 28, 0, currVal_9, currVal_10); var currVal_12 = i0.ɵnov(_v, 32)._hidden; _ck(_v, 31, 0, currVal_12); var currVal_14 = i0.ɵnov(_v, 35)._hidden; _ck(_v, 34, 0, currVal_14); }); }
export function View_ListItemPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "page-list-item", [], null, null, null, View_ListItemPage_0, RenderType_ListItemPage)), i0.ɵdid(1, 49152, null, 0, i26.ListItemPage, [i27.NavParams, i28.Storage, i29.SubjectTransferService, i10.NavController, i30.AlertController, i4.TranslateService], null, null)], null, null); }
var ListItemPageNgFactory = i0.ɵccf("page-list-item", i26.ListItemPage, View_ListItemPage_Host_0, {}, {}, []);
export { ListItemPageNgFactory as ListItemPageNgFactory };
//# sourceMappingURL=list-item.ngfactory.js.map