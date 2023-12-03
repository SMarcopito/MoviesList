import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss'
})
export class FavoritosComponent {

  favoritos

  constructor(public activeModal: NgbActiveModal) {
   
  }
  

  fecharModal() {
    this.activeModal.close();
  }

}
