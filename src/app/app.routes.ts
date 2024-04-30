import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokedexapiComponent } from './components/pokedexapi/pokedexapi.component';
import { IbgeapiComponent } from './components/ibgeapi/ibgeapi.component';

export const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'pokedex',  component: PokedexapiComponent },
  { path: 'ibge',  component: IbgeapiComponent },
  { path: '**',  component: HomeComponent},
];
