import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the calculator', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Simple calculator');
  });

  it('should calculate each operation', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.firstNumber = '12';
    app.secondNumber = '4';

    app.calculate('+');
    expect(app.result).toBe('16');
    app.calculate('-');
    expect(app.result).toBe('8');
    app.calculate('*');
    expect(app.result).toBe('48');
    app.calculate('/');
    expect(app.result).toBe('3');
  });

  it('should reject division by zero', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    app.firstNumber = '12';
    app.secondNumber = '0';

    app.calculate('/');

    expect(app.result).toBe('');
    expect(app.error).toBe('Cannot divide by zero.');
  });
});
