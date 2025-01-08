import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TravelerSummary} from '../model/TravelerSummary';

//@Service di Spring
@Injectable({
  providedIn: 'root'
})
export class RequestClientService
{

  constructor(private http: HttpClient) {}

  getAllTravelersSummary(): Observable<TravelerSummary[]>
  {
    //il mio http fa una chiamata get e crea SUBITO un oggetto
    //Observable in attesa
    //l'oggetto rimane in attesa fino a quando non arriva la response dal server
    //quando la response arriva l'oggetto manda un segnale
    //altre parti del programma avranno fatto la SOTTOSCRIZIONE al segnale
    //quando arriva fanno partire una propria funzione
    return this.http.get<TravelerSummary[]>("/api/travelers");
  }
}
