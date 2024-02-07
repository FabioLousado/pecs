import { Component, EventEmitter, Output } from '@angular/core';
import { PictoService } from '../services/picto/picto.service';
import { Picto } from '../classes/Picto';

@Component({
  selector: 'app-add-picto',
  standalone: true,
  imports: [],
  templateUrl: './add-picto.component.html',
  styleUrl: './add-picto.component.css'
})
export class AddPictoComponent {

  picto = new Picto('', '', '');

  @Output() endOfAdd = new EventEmitter<void>();

  constructor(private pictoService : PictoService){}

  addPicto(event : any){
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result as string;
      this.picto.nom = file.name;
      this.picto.data = base64String;
    };

    if(file){
      reader.readAsDataURL(file);
    }
  }


  ajouter(){
    this.pictoService.addPicto(this.picto).then(
      _ => this.endOfAdd.emit());
  }

}
