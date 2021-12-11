export interface TimelinePoint {
	date: Date | CustomDateUnit;
	type: 'Date' | 'CustomDateUnit';
	name: string;
	pointDataDescription?: PointDescription;
}

export type ShowDateType = 'always' | 'byClick' | 'byHover' | 'never';

export interface PointDescription {
	description: string;
	title: string;
}

export interface CustomDateUnit extends BaseDateUnit {
	type: 'CustomDateUnit';
	date: CustomDateUnit;
}

export interface BaseDateUnit {
	value: number;
	/**
	 * Denotes how the unit is named in the plural.
	 * e.g: 'seconds'
	 */
	namePlural: string;
	/**
	 * Denotes how the unit is named in the singular.
	 * e.g: 'second'
	 */
	nameSingular: string;
	/**
	 * Describes from how many units the plural form is used.
	 * The singular name is used if the value is smaller than specified in 'pluralIsUsedFrom'.
	 * e.g: 2 is the number of 'pluralUsedFrom' for 'seconds'
	 */
	pluralIsUsedFrom: number;
	/**
	 * Quantity of the unit until the next CustomDateUnit.
	 * e.g: 60 seconds would be the amount for 1 minute.
	 */
	maxAmount: number;
}

/**
 * DateRange which describes the time unit from the smallest to the largest unit.
 */
export interface CustomDateUnitDefinition {
	dateUnits: CustomDateUnit[];
}

export type TimelineDate = Date | CustomDateUnit;
