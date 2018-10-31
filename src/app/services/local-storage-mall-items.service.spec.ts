import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageMallItemsService } from './local-storage-mall-items.service';

describe('LocalStorageMallItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageMallItemsService]
    });
  });

  it('should be created', inject([LocalStorageMallItemsService], (service: LocalStorageMallItemsService) => {
    expect(service).toBeTruthy();
  }));
});
