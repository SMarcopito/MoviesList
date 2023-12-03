import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detalhes-filme',
  standalone: true,
  templateUrl: './detalhes-filme.component.html',
  styleUrl: './detalhes-filme.component.scss',
  imports: [CommonModule,FormsModule],
})
export class DetalhesFilmeComponent implements OnInit{
  @Input() filme: any;
  addToWish = false
  @Input() favorito = []
  constructor(public activeModal: NgbActiveModal,public sanitizer: DomSanitizer) {
   
   }
   ngOnInit() {
    if (this.favorito && this.favorito.includes(this.filme)) {
      this.addToWish = true
    }
    
  }
  


  fecharModal() {
    let data = [this.addToWish,this.filme]
    this.activeModal.close(data);
  }

}
