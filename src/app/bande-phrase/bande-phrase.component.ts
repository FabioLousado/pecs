import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Picto } from '../classes/Picto';
import { PictoService } from '../services/picto/picto.service';
import { PictoComponent } from '../picto/picto.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bande-phrase',
  standalone: true,
  imports: [PictoComponent, CommonModule],
  templateUrl: './bande-phrase.component.html',
  styleUrl: './bande-phrase.component.css'
})
export class BandePhraseComponent {
  
  @Input() pictos : Picto[] = []

  removeFromPictos(idPicto : string){
    let index = this.pictos.findIndex(p => p.id == idPicto)
    if(index != -1){
      this.pictos.splice(index, 1)
    }
  }

}
