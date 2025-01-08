import { Component } from '@angular/core';
import {TravelerSummary} from '../../model/TravelerSummary';
import {HttpClient} from '@angular/common/http';
import {NgForOf} from '@angular/common';
import {RequestClientService} from '../../services/request-client.service';
import {Observable} from 'rxjs';
import {TravelerReqBody} from '../../model/TravelerReqBody';
import {FormsModule} from '@angular/forms';
import {SingleTravelerComponent} from '../single-traveler/single-traveler.component';

@Component({
  selector: 'app-travelers-summary',
  imports: [
    NgForOf,
    FormsModule,
    SingleTravelerComponent
  ],
  templateUrl: './travelers-summary.component.html',
  standalone: true,
  styleUrl: './travelers-summary.component.css'
})
export class TravelersSummaryComponent
{
  travelers: TravelerSummary[] = [];
  travelerToInsert: TravelerReqBody = {  name: "",surname: "",address: "",email: "",phone: "",profession: "",dob: null};

  stringaQualsiasi:string = "ciao";
  constructor(private serv: RequestClientService)
  {
      //questo è il mio observable
    //dentro subscribe io inserisco una funzione, una CALLBACK
    //tale funzione verrà richiamata quando l'observable darà il segnale
     serv.getAllTravelersSummary().subscribe(
       (resp)=>{
         this.travelers = resp;
       }
     );
  }

  insert() {
    this.serv.insertTraveler(this.travelerToInsert).subscribe(
      (resp)=>{

        this.travelers.push(resp);
        this.travelerToInsert = {  name: "",surname: "",address: "",email: "",phone: "",profession: "",dob: null};
      }

    )
  }

  gestiscoEventoFiglio(id:number) {

    let posizioneFiglio = this.travelers.findIndex(f => f.id === id);
    let figlioDaSpostare = this.travelers[posizioneFiglio];
    this.travelers.splice(posizioneFiglio, 1);
    this.travelers.unshift(figlioDaSpostare);
  }
}

// (parametri)=>{
//
// }

// funzione(parametri)
// {
//
// }
