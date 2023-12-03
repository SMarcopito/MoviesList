// lista-filmes.module.ts

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListaFilmesComponent } from './lista-filmes.component';

@NgModule({
  declarations: [ListaFilmesComponent],
  imports: [CommonModule],
  exports: [ListaFilmesComponent],
})
export class ListaFilmesModule { }
