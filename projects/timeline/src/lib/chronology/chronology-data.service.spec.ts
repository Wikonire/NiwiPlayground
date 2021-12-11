import { TestBed } from '@angular/core/testing';

import { ChronologyDataService } from './chronology-data.service';

describe('ChronologyDataService', () => {
	let service: ChronologyDataService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ChronologyDataService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
