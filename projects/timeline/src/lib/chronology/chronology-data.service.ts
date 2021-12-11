import { CustomDateUnit, TimelineDate, TimelinePoint } from './chronology-data.interface';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ChronologyDataService {
	sortDateTypes(data: TimelinePoint[]): TimelinePoint[] {
		if (this.isDateType(data[0], data[0].type)) {
			return this.sortByDate(data);
		} else if (this.isCustomDateUnit(data[0], data[0].type)) {
			return this.sortByCustomDateUnit(data);
		} else {
			throw new Error("Invalid type of date-property. It must be 'Date' or 'CustomDateUnit'");
		}
	}

	private isCustomDateUnit(point: TimelinePoint, timelinePointType: 'Date' | 'CustomDateUnit'): boolean {
		return (
			timelinePointType === 'CustomDateUnit' &&
			point.date.hasOwnProperty('value') &&
			point.date.hasOwnProperty('namePlural') &&
			point.date.hasOwnProperty('nameSingular') &&
			point.date.hasOwnProperty('pluralIsUsedFrom') &&
			point.date.hasOwnProperty('maxAmount')
		);
	}

	private isDateType(point: TimelinePoint, timelinePointType: 'Date' | 'CustomDateUnit'): boolean {
		return (
			timelinePointType === 'Date' &&
			point.date.hasOwnProperty('toLocaleDateString') &&
			point.date.hasOwnProperty('toString') &&
			point.date.hasOwnProperty('toDateString') &&
			point.date.hasOwnProperty('toTimeString') &&
			point.date.hasOwnProperty('toLocaleString') &&
			point.date.hasOwnProperty('toLocaleTimeString') &&
			point.date.hasOwnProperty('valueOf') &&
			point.date.hasOwnProperty('getTime') &&
			point.date.hasOwnProperty('getFullYear') &&
			point.date.hasOwnProperty('getMonth') &&
			point.date.hasOwnProperty('getDate') &&
			point.date.hasOwnProperty('getDay') &&
			point.date.hasOwnProperty('getHours') &&
			point.date.hasOwnProperty('getMinutes') &&
			point.date.hasOwnProperty('getSeconds') &&
			point.date.hasOwnProperty('getMilliseconds') &&
			point.date.hasOwnProperty('getTimezoneOffset') &&
			point.date.hasOwnProperty('setTime') &&
			point.date.hasOwnProperty('setMilliseconds') &&
			point.date.hasOwnProperty('setSeconds') &&
			point.date.hasOwnProperty('setMinutes') &&
			point.date.hasOwnProperty('setHours') &&
			point.date.hasOwnProperty('setDate') &&
			point.date.hasOwnProperty('setMonth') &&
			point.date.hasOwnProperty('setFullYear')
		);
	}

	private sortByCustomDateUnit(data: TimelinePoint[]): TimelinePoint[] {
		return data.sort(
			(dateFirst: TimelinePoint, dateSecond: TimelinePoint) =>
				(dateFirst.date as CustomDateUnit).value - (dateSecond.date as CustomDateUnit).value
		);
	}

	private sortByDate(data: TimelinePoint[]): TimelinePoint[] {
		return data.sort(
			(dateFirst: TimelinePoint, dateSecond: TimelinePoint) =>
				(dateFirst.date as Date).getTime() - (dateSecond.date as Date).getTime()
		);
	}

	private validateDateRange(startDate: TimelineDate, endDate: TimelineDate): void {
		if (startDate === endDate) {
			throw new Error('Start-date is the same as end-date');
		} else if (startDate > endDate) {
			throw new Error('Start-date is the same as end-date');
		}
	}
}
