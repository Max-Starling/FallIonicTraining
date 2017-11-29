import { Injectable } from '@angular/core';

@Injectable()
export class DateFormatterService {
    public formatDate(date: string) {
        const timeArray = this.getTimeArray(date);
        return `${this.defineMonth(timeArray.month)}${', '}${this.removeZero(timeArray.day)}${'  '}${this.removeZero(timeArray.hours)}${':'}${timeArray.minutes}`
    }
    public getTimeArray(date: string) {
        const allTokens = date.split('T');
        const leftTokens = allTokens[0].split('-');
        const rightTokens = allTokens[1].split(':');
        const timeObject = {
            'year': leftTokens[0],
            'month': leftTokens[1],
            'day': leftTokens[2],
            'hours': rightTokens[0],
            'minutes': rightTokens[1],
            'seconds': rightTokens[2]
        }
        return timeObject;
    }
    public defineMonth(month: string) {
        switch (month) {
            case '01': return 'Jan';
            case '02': return 'Feb';
            case '03': return 'Mar';
            case '04': return 'Apr';
            case '05': return 'May';
            case '06': return 'Jun';
            case '07': return 'Jul';
            case '08': return 'Aug';
            case '09': return 'Sep';
            case '10': return 'Oct';
            case '11': return 'Nov';
            case '12': return 'Dec';
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
