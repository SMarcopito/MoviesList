// app.module.ts

import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListaFilmesComponent } from './components/lista-filmes/lista-filmes.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaFilmesModule } from './components/lista-filmes/lista-filmes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetalhesFilmeModule } from './components/detalhes-filme/detalhes-filme.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    ListaFilmesModule,
    DetalhesFilmeModule,
    NgbModule,
    FormsModule 
  ],
  providers: [HttpClientModule,DatePipe], 
  bootstrap: [AppComponent],
})
export class AppModule { }
