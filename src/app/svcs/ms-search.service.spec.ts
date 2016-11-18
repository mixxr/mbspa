/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MsSearchService } from './ms-search.service';

describe('MsSearchSvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsSearchSvcService]
    });
  });

  it('should ...', inject([MsSearchSvcService], (service: MsSearchSvcService) => {
    expect(service).toBeTruthy();
  }));
});
