import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TravelersSummaryComponent} from './components/travelers-summary/travelers-summary.component';
import {PadreNumeriComponent} from './components/padre-numeri/padre-numeri.component';
import {EsempioComponent} from './components/esempio/esempio.component';
import {Pagina1Component} from './components/pagina1/pagina1.component';
import {Pagina2Component} from './components/pagina2/pagina2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TravelersSummaryComponent, PadreNumeriComponent, EsempioComponent, Pagina1Component, Pagina2Component, RouterLink],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JavagoFront';
}
