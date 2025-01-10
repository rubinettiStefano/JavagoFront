import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-esempio',
  imports: [
    FormsModule
  ],
  templateUrl: './esempio.component.html',
  standalone: true,
  styleUrl: './esempio.component.css'
})
export class EsempioComponent {

  testo = "CIAO";

  valoreCasella = "";

  modificaTesto()
  {
    this.testo+= " CIAO ";
  }
}
