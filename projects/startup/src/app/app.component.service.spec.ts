import { TestBed } from '@angular/core/testing';

import { App.ComponentService } from './app.component.service';

describe('App.ComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: App.ComponentService = TestBed.get(App.ComponentService);
    expect(service).toBeTruthy();
  });
});
