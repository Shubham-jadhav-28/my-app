import { Component } from '@angular/core';
import { CurrencyConverterPipe } from '../pipe/currency-converter.pipe';

@Component({
  selector: 'app-currency-converter',
  imports: [CurrencyConverterPipe],
  templateUrl: './currency-converter.component.html',
  styleUrl: './currency-converter.component.css'
})
export class CurrencyConverterComponent {
amount =10

}
