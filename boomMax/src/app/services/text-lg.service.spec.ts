import { TestBed } from '@angular/core/testing';

import { TextLgService } from './text-lg.service';

describe('TextLgService', () => {
  let service: TextLgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextLgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
