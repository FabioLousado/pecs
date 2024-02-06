import { Component, OnInit } from '@angular/core';
import { PictoComponent } from '../picto/picto.component';
import { CommonModule } from '@angular/common';
import { Intercallaire } from '../classes/Intercallaire';
import { PictoService } from '../services/picto/picto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-intercallaire',
  standalone: true,
  templateUrl: './intercallaire.component.html',
  imports: [CommonModule, PictoComponent, FormsModule],
  styleUrls: ['./intercallaire.component.css']
})
export class IntercallaireComponent implements OnInit {

  intercallaire = new Intercallaire([]);

  search = ""

  listPicto : any

  constructor(public pictoService: PictoService) { }

  ngOnInit(): void {
    this.readPicto();
  }

  async readPicto() {
    this.listPicto = await this.pictoService.getPictos();
  }

  haveAddedPicto(){
    this.readPicto();
  }

  recherche() {
    this.pictoService.search(this.search);
    this.search = ""
  }
}
