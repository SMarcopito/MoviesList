// Importe os módulos necessários do Angular
import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import moviesData from '../../movies.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalhesFilmeComponent } from '../detalhes-filme/detalhes-filme.component';
import { FavoritosComponent } from '../favoritos/favoritos.component';

// Importe o módulo de formulários para usar [(ngModel)]
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss'],
  imports: [CommonModule, FormsModule],  
  providers:[DatePipe]
})
export class ListaFilmesComponent implements OnInit {
  movies: any[] = [];
  favoritos: any[] = [];
  isSelectVisible = false;
  filtroTitulo = '';
  ordenacaoTitulo = 'asc';
  filtroDataLancamento = '';
  filmesFiltrados: any[] = [];  

  constructor(private modalService: NgbModal, private datePipe: DatePipe) {}

  ngOnInit() {
    this.movies = moviesData;
    this.aplicarFiltros();  
  }

  abrirDetalhesFiltrados(movie) {
    console.log(movie);
    console.log(this.favoritos);
    const modalRef = this.modalService.open(DetalhesFilmeComponent, { centered: true });
    modalRef.componentInstance.filme = movie;
    modalRef.componentInstance.favorito = this.favoritos;
   modalRef.result.then(
      (result) => {
        if (result[0]) {
          if (!this.favoritos.includes(result[1])) {
            this.favoritos.push(result[1])
          } else return

        } else {
          if (this.favoritos.includes(result[1])) {
            const index = this.favoritos.findIndex(element => element === result[1]);
            this.favoritos.splice(index,1)
          } else return
        }
      },
      (reason) => {
     
        console.log('Modal fechado com dismiss, motivo:', reason);
      }
    );

  }

  abrirFavoritosFilme() {
    console.log(this.favoritos);

    const modalRef = this.modalService.open(FavoritosComponent, { centered: true });
    modalRef.componentInstance.favoritos = this.favoritos;
    modalRef.result.then(
      (result) => {
        console.log('Modal fechado, resultado:', result);
      },
      (reason) => {
        console.log('Modal fechado com dismiss, motivo:', reason);
      }
    );
  }

  aplicarFiltros() {
    this.filmesFiltrados = this.movies
      .filter(movie => movie.title.toLowerCase().includes(this.filtroTitulo.toLowerCase()))
      .filter(movie => {
        if (this.filtroDataLancamento) {
          console.log('Filme:', movie);
          let filtro =  this.datePipe.transform(this.filtroDataLancamento, 'dd mm yyyy');
          const formattedReleaseDate = this.datePipe.transform(movie.releasedDate, 'dd mm yyyy');
          console.log('Data Formatada:', formattedReleaseDate);
          
          console.log('Filtro de Data:', this.filtroDataLancamento);
          
          return formattedReleaseDate === filtro;
        }
        return true;
      })
      .sort((a, b) => {
        const orderFactor = this.ordenacaoTitulo === 'asc' ? 1 : -1;
        return orderFactor * a.title.localeCompare(b.title);
      });
  }
  
  
}

