import {Component, Input} from '@angular/core';
import {TravelerSummary} from '../../model/TravelerSummary';

@Component({
  selector: 'app-figlio-numero',
  imports: [],
  templateUrl: './figlio-numero.component.html',
  standalone: true,
  styleUrl: './figlio-numero.component.css'
})
export class FiglioNumeroComponent {

  @Input() numeretto! : number;

}
