import { Component } from '@angular/core';
import {TravelerSummary} from '../../model/TravelerSummary';
import {HttpClient} from '@angular/common/http';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-travelers-summary',
  imports: [
    NgForOf
  ],
  templateUrl: './travelers-summary.component.html',
  standalone: true,
  styleUrl: './travelers-summary.component.css'
})
export class TravelersSummaryComponent
{
  travelers: TravelerSummary[] = [];

  constructor(http: HttpClient)
  {
    http.get<TravelerSummary[]>("/api/travelers").subscribe(res =>
    {
      this.travelers=res;
      console.log(res);
    });
  }

}
