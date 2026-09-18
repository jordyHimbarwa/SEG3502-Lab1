import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  firstNumber: string | number = '';
  secondNumber: string | number = '';
  result = '';
  error = '';

  calculate(operation: '+' | '-' | '*' | '/'): void {
    const firstInput = String(this.firstNumber).trim();
    const secondInput = String(this.secondNumber).trim();
    const first = Number(firstInput);
    const second = Number(secondInput);

    this.error = '';
    this.result = '';

    if (
      firstInput === '' ||
      secondInput === '' ||
      !Number.isFinite(first) ||
      !Number.isFinite(second)
    ) {
      this.error = 'Enter two valid numbers.';
      return;
    }

    if (operation === '/' && second === 0) {
      this.error = 'Cannot divide by zero.';
      return;
    }

    const value = {
      '+': first + second,
      '-': first - second,
      '*': first * second,
      '/': first / second,
    }[operation];

    this.result = String(value);
  }
}
