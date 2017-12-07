import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// tslint:disable:ter-indent
var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-about',
                    templateUrl: 'about.html',
                },] },
    ];
    /** @nocollapse */
    AboutPage.ctorParameters = function () { return [
        { type: NavController, },
    ]; };
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.js.map