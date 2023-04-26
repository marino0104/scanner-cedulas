import { Component } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scanner-cedulas';
  allowedFormats=[BarcodeFormat.QR_CODE, BarcodeFormat.PDF_417]
}
