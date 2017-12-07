import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
var SubjectTransferService = (function () {
    function SubjectTransferService() {
        this.someSubject = new Subject();
    }
    SubjectTransferService.prototype.putData = function (options, type) {
        var obj = {};
        obj['options'] = options;
        if (type) {
            obj['type'] = type;
        }
        this.someSubject.next(obj);
    };
    SubjectTransferService.prototype.getData = function () {
        return this.someSubject.asObservable();
    };
    SubjectTransferService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SubjectTransferService.ctorParameters = function () { return []; };
    return SubjectTransferService;
}());
export { SubjectTransferService };
//# sourceMappingURL=subject-transfer.service.js.map