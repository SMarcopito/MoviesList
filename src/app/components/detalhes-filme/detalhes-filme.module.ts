// lista-filmes.module.ts

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetalhesFilmeComponent } from './detalhes-filme.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DetalhesFilmeComponent],
  imports: [CommonModule],
  exports: [DetalhesFilmeComponent],
})
export class DetalhesFilmeModule { }
 