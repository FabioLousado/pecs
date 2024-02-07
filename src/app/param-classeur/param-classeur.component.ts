import { Component } from '@angular/core';
import { PictoComponent } from '../picto/picto.component';
import { PictoService } from '../services/picto/picto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddPictoComponent } from '../add-picto/add-picto.component';

@Component({
  selector: 'app-param-classeur',
  standalone: true,
  imports: [PictoComponent, FormsModule,CommonModule, AddPictoComponent],
  templateUrl: './param-classeur.component.html',
  styleUrl: './param-classeur.component.css'
})
export class ParamClasseurComponent {
  
  search = ""
  
  showAddPictoFromFile = false;

  constructor(public pictoService : PictoService){}

  addPictoFromFile(){
    this.showAddPictoFromFile = !this.showAddPictoFromFile
  }


  recherche() {
    this.pictoService.search(this.search);
    this.search = ""
  }
  

  haveAddedPicto(){

  }
}
