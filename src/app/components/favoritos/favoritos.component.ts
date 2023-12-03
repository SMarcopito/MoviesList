import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.scss'
})
export class FavoritosComponent implements OnInit {

  favoritos

  constructor(public activeModal: NgbActiveModal) {
   
  }
  ngOnInit(): void {
  console.log(this.favoritos);
  
  }

  fecharModal() {
    this.activeModal.close();
  }

}
