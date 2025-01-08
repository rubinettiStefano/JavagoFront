import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TravelerSummary} from '../../model/TravelerSummary';

@Component({
  selector: 'app-single-traveler',
  imports: [],
  templateUrl: './single-traveler.component.html',
  standalone: true,
  styleUrl: './single-traveler.component.css'
})
export class SingleTravelerComponent
{
    @Input() traveler! : TravelerSummary;
    // @Input() traveler : TravelerSummary | null = null;
    @Output() saliCima:EventEmitter<number> = new EventEmitter<number>();


  lanciaEvento() {
    this.saliCima.emit(this.traveler.id);
  }
}
