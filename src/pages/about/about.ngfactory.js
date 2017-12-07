/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "ionic-angular/components/toolbar/toolbar-header";
import * as i2 from "ionic-angular/config/config";
import * as i3 from "ionic-angular/navigation/view-controller";
import * as i4 from "../../../node_modules/ionic-angular/components/toolbar/navbar.ngfactory";
import * as i5 from "ionic-angular/components/toolbar/navbar";
import * as i6 from "ionic-angular/components/app/app";
import * as i7 from "ionic-angular/navigation/nav-controller";
import * as i8 from "../../../node_modules/ionic-angular/components/button/button.ngfactory";
import * as i9 from "ionic-angular/components/button/button";
import * as i10 from "ionic-angular/components/menu/menu-toggle";
import * as i11 from "ionic-angular/components/app/menu-controller";
import * as i12 from "ionic-angular/components/toolbar/toolbar-item";
import * as i13 from "ionic-angular/components/toolbar/toolbar";
import * as i14 from "ionic-angular/components/icon/icon";
import * as i15 from "../../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory";
import * as i16 from "ionic-angular/components/toolbar/toolbar-title";
import * as i17 from "@ngx-translate/core";
import * as i18 from "../../../node_modules/ionic-angular/components/content/content.ngfactory";
import * as i19 from "ionic-angular/components/content/content";
import * as i20 from "ionic-angular/platform/platform";
import * as i21 from "ionic-angular/platform/dom-controller";
import * as i22 from "ionic-angular/platform/keyboard";
import * as i23 from "ionic-angular/components/grid/row";
import * as i24 from "../../../node_modules/ionic-angular/components/img/img.ngfactory";
import * as i25 from "ionic-angular/components/img/img";
import * as i26 from "./about";
var styles_AboutPage = [];
var RenderType_AboutPage = i0.ɵcrt({ encapsulation: 2, styles: styles_AboutPage, data: {} });
export { RenderType_AboutPage as RenderType_AboutPage };
export function View_AboutPage_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 24, "ion-header", [], null, null, null, null, null)), i0.ɵdid(1, 16384, null, 0, i1.Header, [i2.Config, i0.ElementRef, i0.Renderer, [2, i3.ViewController]], null, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(3, 0, null, null, 20, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, i4.View_Navbar_0, i4.RenderType_Navbar)), i0.ɵdid(4, 49152, null, 0, i5.Navbar, [i6.App, [2, i3.ViewController], [2, i7.NavController], i2.Config, i0.ElementRef, i0.Renderer], null, null), (_l()(), i0.ɵted(-1, 3, ["\n        "])), (_l()(), i0.ɵeld(6, 0, null, 0, 8, "button", [["ion-button", ""], ["menuToggle", ""]], [[8, "hidden", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 8).toggle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, i8.View_Button_0, i8.RenderType_Button)), i0.ɵdid(7, 1097728, [[1, 4]], 0, i9.Button, [[8, ""], i2.Config, i0.ElementRef, i0.Renderer], null, null), i0.ɵdid(8, 1064960, null, 0, i10.MenuToggle, [i11.MenuController, [2, i3.ViewController], [2, i9.Button], [2, i5.Navbar]], { menuToggle: [0, "menuToggle"] }, null), i0.ɵdid(9, 16384, null, 1, i12.ToolbarItem, [i2.Config, i0.ElementRef, i0.Renderer, [2, i13.Toolbar], [2, i5.Navbar]], null, null), i0.ɵqud(603979776, 1, { _buttons: 1 }), (_l()(), i0.ɵted(-1, 0, ["\n            "])), (_l()(), i0.ɵeld(12, 0, null, 0, 1, "ion-icon", [["name", "menu"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(13, 147456, null, 0, i14.Icon, [i2.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(-1, 0, ["\n        "])), (_l()(), i0.ɵted(-1, 3, ["\n        "])), (_l()(), i0.ɵeld(16, 0, null, 3, 6, "ion-title", [], null, null, null, i15.View_ToolbarTitle_0, i15.RenderType_ToolbarTitle)), i0.ɵdid(17, 49152, null, 0, i16.ToolbarTitle, [i2.Config, i0.ElementRef, i0.Renderer, [2, i13.Toolbar], [2, i5.Navbar]], null, null), (_l()(), i0.ɵted(-1, 0, ["\n            "])), (_l()(), i0.ɵeld(19, 0, null, 0, 1, "ion-icon", [["name", "alert"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), i0.ɵdid(20, 147456, null, 0, i14.Icon, [i2.Config, i0.ElementRef, i0.Renderer], { name: [0, "name"] }, null), (_l()(), i0.ɵted(21, 0, ["\n            ", ""])), i0.ɵpid(131072, i17.TranslatePipe, [i17.TranslateService, i0.ChangeDetectorRef]), (_l()(), i0.ɵted(-1, 3, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n\n"])), (_l()(), i0.ɵeld(26, 0, null, null, 9, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, i18.View_Content_0, i18.RenderType_Content)), i0.ɵdid(27, 4374528, null, 0, i19.Content, [i2.Config, i20.Platform, i21.DomController, i0.ElementRef, i0.Renderer, i6.App, i22.Keyboard, i0.NgZone, [2, i3.ViewController], [2, i7.NavController]], null, null), (_l()(), i0.ɵted(-1, 1, ["\n    "])), (_l()(), i0.ɵeld(29, 0, null, 1, 5, "ion-row", [["class", "row"], ["justify-content-center", ""]], null, null, null, null, null)), i0.ɵdid(30, 16384, null, 0, i23.Row, [], null, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(32, 0, null, null, 1, "ion-img", [["height", "300px"], ["src", "./assets/imgs/by_Max_Starling2.png"], ["width", "300px"]], null, null, null, i24.View_Img_0, i24.RenderType_Img)), i0.ɵdid(33, 1228800, null, 0, i25.Img, [i0.ElementRef, i0.Renderer, i20.Platform, [2, i19.Content], i21.DomController], { src: [0, "src"], width: [1, "width"], height: [2, "height"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, 1, ["\n"])), (_l()(), i0.ɵted(-1, null, ["\n"]))], function (_ck, _v) { var currVal_3 = ""; _ck(_v, 8, 0, currVal_3); var currVal_5 = "menu"; _ck(_v, 13, 0, currVal_5); var currVal_7 = "alert"; _ck(_v, 20, 0, currVal_7); var currVal_11 = "./assets/imgs/by_Max_Starling2.png"; var currVal_12 = "300px"; var currVal_13 = "300px"; _ck(_v, 33, 0, currVal_11, currVal_12, currVal_13); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 4)._hidden; var currVal_1 = i0.ɵnov(_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = i0.ɵnov(_v, 8).isHidden; _ck(_v, 6, 0, currVal_2); var currVal_4 = i0.ɵnov(_v, 13)._hidden; _ck(_v, 12, 0, currVal_4); var currVal_6 = i0.ɵnov(_v, 20)._hidden; _ck(_v, 19, 0, currVal_6); var currVal_8 = i0.ɵunv(_v, 21, 0, i0.ɵnov(_v, 22).transform("ABOUT")); _ck(_v, 21, 0, currVal_8); var currVal_9 = i0.ɵnov(_v, 27).statusbarPadding; var currVal_10 = i0.ɵnov(_v, 27)._hasRefresher; _ck(_v, 26, 0, currVal_9, currVal_10); }); }
export function View_AboutPage_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "page-about", [], null, null, null, View_AboutPage_0, RenderType_AboutPage)), i0.ɵdid(1, 49152, null, 0, i26.AboutPage, [i7.NavController], null, null)], null, null); }
var AboutPageNgFactory = i0.ɵccf("page-about", i26.AboutPage, View_AboutPage_Host_0, {}, {}, []);
export { AboutPageNgFactory as AboutPageNgFactory };
//# sourceMappingURL=about.ngfactory.js.map