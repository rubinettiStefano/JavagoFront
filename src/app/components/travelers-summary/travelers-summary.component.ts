import { Component } from '@angular/core';
import {TravelerSummary} from '../../model/TravelerSummary';
import {HttpClient} from '@angular/common/http';
import {NgForOf} from '@angular/common';
import {RequestClientService} from '../../services/request-client.service';
import {Observable} from 'rxjs';

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

  stringaQualsiasi:string = "ciao";
  constructor(private serv: RequestClientService)
  {
      //questo è il mio observable
    //dentro subscribe io inserisco una funzione, una CALLBACK
    //tale funzione verrà richiamata quando l'observable darà il segnale
    console.log("REQUEST PARTITA")
    console.log(Date.now())
     serv.getAllTravelersSummary().subscribe(
       (resp)=>{
         console.log("RESPONSE ARRIVATA")
         console.log(resp)
         this.travelers = resp;
       }
     );
  }

}

// (parametri)=>{
//
// }

// funzione(parametri)
// {
//
// }
