import { Injectable } from '@angular/core';
var DateFormatterService = (function () {
    function DateFormatterService() {
    }
    DateFormatterService.prototype.formatDate = function (date) {
        var timeArray = this.getTimeObject(date);
        return "" + timeArray.month + ', ' + timeArray.day + '  ' + timeArray.hours + ':' + timeArray.minutes;
    };
    DateFormatterService.prototype.getTimeObject = function (date) {
        // console.log(date);
        var allTokens = date.split('T');
        var leftTokens = allTokens[0].split('-');
        var rightTokens = allTokens[1].split(':');
        var timeObject = {
            'year': leftTokens[0],
            'month': this.defineMonth(leftTokens[1]),
            'day': this.removeZero(leftTokens[2]),
            'hours': this.removeZero(rightTokens[0]),
            'minutes': rightTokens[1],
            'seconds': rightTokens[2]
        };
        return timeObject;
    };
    DateFormatterService.prototype.defineMonth = function (month) {
        switch (month) {
            case '01': return 'JAN';
            case '02': return 'FEB';
            case '03': return 'MAR';
            case '04': return 'APR';
            case '05': return 'MAY';
            case '06': return 'JUN';
            case '07': return 'JUL';
            case '08': return 'AUG';
            case '09': return 'SEP';
            case '10': return 'OCT';
            case '11': return 'NOV';
            case '12': return 'DEC';
        }
        return 'Jan';
    };
    DateFormatterService.prototype.removeZero = function (str) {
        if (str != '00') {
            return str.replace(/^0+/, '');
        }
        else {
            return '0';
        }
    };
    DateFormatterService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DateFormatterService.ctorParameters = function () { return []; };
    return DateFormatterService;
}());
export { DateFormatterService };
//# sourceMappingURL=date-formatter.service.js.map