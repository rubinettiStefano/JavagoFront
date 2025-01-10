import { Routes } from '@angular/router';
import {Pagina1Component} from './components/pagina1/pagina1.component';
import {Pagina2Component} from './components/pagina2/pagina2.component';

export const routes: Routes = [

  {path:"contatti",component:Pagina1Component},
  {path:"siamo",component:Pagina2Component},

];
