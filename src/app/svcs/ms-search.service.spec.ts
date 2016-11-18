/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MsSearchSvcService } from './ms-search-svc.service';

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
