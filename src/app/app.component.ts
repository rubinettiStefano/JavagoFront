import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TravelersSummaryComponent} from './components/travelers-summary/travelers-summary.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TravelersSummaryComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JavagoFront';
}
