import { TestBed } from '@angular/core/testing';

import { DeviceModalService } from './device-modal.service';

describe('DeviceModalService', () => {
  let service: DeviceModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
