import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MicroApp1Component } from './microapp1.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MicroApp1Component
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MicroApp1Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mircoApp1'`, () => {
    const fixture = TestBed.createComponent(MicroApp1Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('mircoApp1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MicroApp1Component);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('mircoApp1 app is running!');
  });
});
