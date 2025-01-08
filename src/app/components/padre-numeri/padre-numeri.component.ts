import { Component } from '@angular/core';
import {FiglioNumeroComponent} from '../figlio-numero/figlio-numero.component';

@Component({
  selector: 'app-padre-numeri',
  imports: [
    FiglioNumeroComponent
  ],
  templateUrl: './padre-numeri.component.html',
  standalone: true,
  styleUrl: './padre-numeri.component.css'
})
export class PadreNumeriComponent {

}
