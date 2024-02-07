import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PictoComponent } from '../picto/picto.component';
import { CommonModule } from '@angular/common';
import { Intercallaire } from '../classes/Intercallaire';
import { PictoService } from '../services/picto/picto.service';
import { FormsModule } from '@angular/forms';
import { AddPictoComponent } from '../add-picto/add-picto.component';
import { Picto } from '../classes/Picto';

@Component({
  selector: 'app-intercallaire',
  standalone: true,
  templateUrl: './intercallaire.component.html',
  imports: [CommonModule, PictoComponent, FormsModule, AddPictoComponent],
  styleUrls: ['./intercallaire.component.css']
})
export class IntercallaireComponent implements OnInit {

  @Input() pageNumber : number = 0; 

  colors = ['red', 'green', 'yellow', 'purple']

  intercallaire = new Intercallaire([]);

  listPicto : any


  @Output() putOnBandePhrase = new EventEmitter<Picto>();

  constructor(public pictoService: PictoService) {}

  ngOnInit(): void {
    this.readPicto();
  }

  async readPicto() {
    this.listPicto = await this.pictoService.getPictos();
  }

  haveAddedPicto(){
    this.readPicto();
  }



  onSelectPicto(picto : Picto){
    if(picto){
      this.putOnBandePhrase.emit(picto);
    }
  }
}
