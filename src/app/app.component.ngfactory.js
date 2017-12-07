/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "../../node_modules/ionic-angular/components/item/item.ngfactory";
import * as i2 from "ionic-angular/components/item/item";
import * as i3 from "ionic-angular/util/form";
import * as i4 from "ionic-angular/config/config";
import * as i5 from "ionic-angular/components/item/item-reorder";
import * as i6 from "ionic-angular/components/item/item-content";
import * as i7 from "ionic-angular/components/menu/menu-close";
import * as i8 from "ionic-angular/components/app/menu-controller";
import * as i9 from "ionic-angular/components/icon/icon";
import * as i10 from "@ngx-translate/core";
import * as i11 from "../../node_modules/ionic-angular/components/menu/menu.ngfactory";
import * as i12 from "ionic-angular/components/split-pane/split-pane";
import * as i13 from "ionic-angular/components/menu/menu";
import * as i14 from "ionic-angular/platform/platform";
import * as i15 from "ionic-angular/platform/keyboard";
import * as i16 from "ionic-angular/gestures/gesture-controller";
import * as i17 from "ionic-angular/platform/dom-controller";
import * as i18 from "ionic-angular/components/app/app";
import * as i19 from "ionic-angular/components/toolbar/toolbar-header";
import * as i20 from "ionic-angular/navigation/view-controller";
import * as i21 from "../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory";
import * as i22 from "ionic-angular/components/toolbar/toolbar";
import * as i23 from "../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory";
import * as i24 from "ionic-angular/components/toolbar/toolbar-title";
import * as i25 from "ionic-angular/components/toolbar/navbar";
import * as i26 from "../../node_modules/ionic-angular/components/content/content.ngfactory";
import * as i27 from "ionic-angular/components/content/content";
import * as i28 from "ionic-angular/navigation/nav-controller";
import * as i29 from "ionic-angular/components/list/list";
import * as i30 from "@angular/common";
import * as i31 from "../../node_modules/ionic-angular/components/nav/nav.ngfactory";
import * as i32 from "ionic-angular/components/nav/nav";
import * as i33 from "ionic-angular/transitions/transition-controller";
import * as i34 from "ionic-angular/navigation/deep-linker";
import * as i35 from "./app.component";
import * as i36 from "@ionic-native/status-bar/index";
import * as i37 from "@ionic-native/splash-screen/index";
import * as i38 from "../services/date-formatter.service";
import * as i39 from "@ionic/storage/dist/storage";
import * as i40 from "@angular/http";
import * as i41 from "../services/subject-transfer.service";
var styles_AppComponent = [];
var RenderType_AppComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_AppComponent, data: {} });
export { RenderType_AppComponent as RenderType_AppComponent };
function View_AppComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 11, "button", [["class", "item item-block"], ["ion-item", ""], ["menuClose", ""]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 6).close() !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.openPage(_v.context.$implicit) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i1.View_Item_0, i1.RenderType_Item)), i0.ɵdid(1, 1097728, null, 3, i2.Item, [i3.Form, i4.Config, i0.ElementRef, i0.Renderer, [2, i5.ItemReorder]], null, null), i0.ɵqud(335544320, 4, { contentLabel: 0 }), i0.ɵqud(603979776, 5, { _buttons: 1 }), i0.ɵqud(603979776, 6, { _icons: 1 }), i0.ɵdid(5, 16384, null, 0, i6.ItemContent, [], null, null), i0.ɵdid(6, 16384, null, 0, i7.MenuClose, [i8.MenuController], { menuClose: [0, "menuClose"] }, null), (_l()(), i0.ɵted(-1, 2, ["\n                "])), (_l()(), i0.ɵeld(8, 0, null, 2, 1, "ion-icon", [["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(9, 147456, [[6, 4]], 0, i9.Icon, [i4.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(10, 2, [" ", "\n            "])), i0.ɵpid(131072, i10.TranslatePipe, [i10.TranslateService, i0.ChangeDetectorRef])], function (_ck, _v) { var currVal_0 = ""; _ck(_v, 6, 0, currVal_0); var currVal_2 = _v.context.$implicit.icon; _ck(_v, 9, 0, currVal_2); }, function (_ck, _v) { var currVal_1 = i0.ɵnov(_v, 9)._hidden; _ck(_v, 8, 0, currVal_1); var currVal_3 = i0.ɵunv(_v, 10, 0, i0.ɵnov(_v, 11).transform(_v.context.$implicit.title)); _ck(_v, 10, 0, currVal_3); }); }
export function View_AppComponent_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { nav: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 29, "ion-menu", [["role", "navigation"]], null, null, null, i11.View_Menu_0, i11.RenderType_Menu)), i0.ɵprd(6144, null, i12.RootNode, null, [i13.Menu]), i0.ɵdid(3, 245760, null, 2, i13.Menu, [i8.MenuController, i0.ElementRef, i4.Config, i14.Platform, i0.Renderer, i15.Keyboard, i16.GestureController, i17.DomController, i18.App], { content: [0, "content"] }, null), i0.ɵqud(335544320, 2, { menuContent: 0 }), i0.ɵqud(335544320, 3, { menuNav: 0 }), (_l()(), i0.ɵted(-1, 0, ["\n    "])), (_l()(), i0.ɵeld(7, 0, null, 0, 11, "ion-header", [], null, null, null, null, null)), i0.ɵdid(8, 16384, null, 0, i19.Header, [i4.Config, i0.ElementRef, i0.Renderer, [2, i20.ViewController]], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(10, 0, null, null, 7, "ion-toolbar", [["class", "toolbar"]], [[2, "statusbar-padding", null]], null, null, i21.View_Toolbar_0, i21.RenderType_Toolbar)), i0.ɵdid(11, 49152, null, 0, i22.Toolbar, [i4.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 3, ["\n            "])), (_l()(), i0.ɵeld(13, 0, null, 3, 3, "ion-title", [], null, null, null, i23.View_ToolbarTitle_0, i23.RenderType_ToolbarTitle)), i0.ɵdid(14, 49152, null, 0, i24.ToolbarTitle, [i4.Config, i0.ElementRef, i0.Renderer, [2, i22.Toolbar], [2, i25.Navbar]], null, null), (_l()(), i0.ɵted(15, 0, ["", ""])), i0.ɵpid(131072, i10.TranslatePipe, [i10.TranslateService, i0.ChangeDetectorRef]), (_l()(), i0.ɵted(-1, 3, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, 0, ["\n\n    "])), (_l()(), i0.ɵeld(20, 0, null, 0, 9, "ion-content", [], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i26.View_Content_0, i26.RenderType_Content)), i0.ɵdid(21, 4374528, [[2, 4]], 0, i27.Content, [i4.Config, i14.Platform, i17.DomController, i0.ElementRef, i0.Renderer, i18.App, i15.Keyboard, i0.NgZone, [2, i20.ViewController], [2, i28.NavController]], null, null), (_l()(), i0.ɵted(-1, 1, ["\n        "])), (_l()(), i0.ɵeld(23, 0, null, 1, 5, "ion-list", [["class", "menu"]], null, null, null, null, null)), i0.ɵdid(24, 16384, null, 0, i29.List, [i4.Config, i0.ElementRef, i0.Renderer, i14.Platform, i16.GestureController, i17.DomController], null, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AppComponent_1)), i0.ɵdid(27, 802816, null, 0, i30.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, 1, ["\n    "])), (_l()(), i0.ɵted(-1, 0, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵeld(33, 0, null, null, 2, "ion-nav", [["swipeBackEnabled", "false"]], null, null, null, i31.View_Nav_0, i31.RenderType_Nav)), i0.ɵprd(6144, null, i12.RootNode, null, [i32.Nav]), i0.ɵdid(35, 4374528, [[1, 4], ["content", 4]], 0, i32.Nav, [[2, i20.ViewController], [2, i28.NavController], i18.App, i4.Config, i14.Platform, i0.ElementRef, i0.NgZone, i0.Renderer, i0.ComponentFactoryResolver, i16.GestureController, i33.TransitionController, [2, i34.DeepLinker], i17.DomController, i0.ErrorHandler], { swipeBackEnabled: [0, "swipeBackEnabled"], root: [1, "root"] }, null), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵnov(_v, 35); _ck(_v, 3, 0, currVal_0); var currVal_5 = _co.pages; _ck(_v, 27, 0, currVal_5); var currVal_6 = "false"; var currVal_7 = _co.rootPage; _ck(_v, 35, 0, currVal_6, currVal_7); }, function (_ck, _v) { var currVal_1 = i0.ɵnov(_v, 11)._sbPadding; _ck(_v, 10, 0, currVal_1); var currVal_2 = i0.ɵunv(_v, 15, 0, i0.ɵnov(_v, 16).transform("MENU")); _ck(_v, 15, 0, currVal_2); var currVal_3 = i0.ɵnov(_v, 21).statusbarPadding; var currVal_4 = i0.ɵnov(_v, 21)._hasRefresher; _ck(_v, 20, 0, currVal_3, currVal_4); }); }
export function View_AppComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i0.ɵdid(1, 49152, null, 0, i35.AppComponent, [i14.Platform, i36.StatusBar, i37.SplashScreen, i10.TranslateService, i38.DateFormatterService, i39.Storage, i40.Http, i41.SubjectTransferService], null, null)], null, null); }
var AppComponentNgFactory = i0.ɵccf("ng-component", i35.AppComponent, View_AppComponent_Host_0, {}, {}, []);
export { AppComponentNgFactory as AppComponentNgFactory };
//# sourceMappingURL=app.component.ngfactory.js.map