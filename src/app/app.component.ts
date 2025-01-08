import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TravelersSummaryComponent} from './components/travelers-summary/travelers-summary.component';
import {PadreNumeriComponent} from './components/padre-numeri/padre-numeri.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TravelersSummaryComponent, PadreNumeriComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JavagoFront';
}
