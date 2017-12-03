import { Injectable } from '@angular/core';

@Injectable()
export class DateFormatterService {
    public formatDate(date: string) {
        const timeArray = this.getTimeObject(date);
        return `${timeArray.month}${', '}${timeArray.day}${'  '}${timeArray.hours}${':'}${timeArray.minutes}`
    }
    public getTimeObject(date: string) {
        // console.log(date);
        const allTokens = date.split('T');
        const leftTokens = allTokens[0].split('-');
        const rightTokens = allTokens[1].split(':');
        const timeObject = {
            'year': leftTokens[0],
            'month': this.defineMonth(leftTokens[1]),
            'day': this.removeZero(leftTokens[2]),
            'hours': this.removeZero(rightTokens[0]),
            'minutes': rightTokens[1],
            'seconds': rightTokens[2]
        }
        return timeObject;
    }
    public defineMonth(month: string) {
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
    }
    public removeZero(str) {
        if (str!='00') {
            return str.replace(/^0+/, '');
        } else {
            return '0';
        }
    }
}
