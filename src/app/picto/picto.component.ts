import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PictoService } from '../services/picto/picto.service';
import { Picto } from '../classes/Picto';

@Component({
  selector: 'app-picto',
  standalone: true,
  imports: [],
  templateUrl: './picto.component.html',
  styleUrls: ['./picto.component.css']
})
export class PictoComponent implements OnInit {
  @Input() picto: Picto = new Picto('', '', '')
  @Input() canBeDeleted: boolean = false

  posX = 0
  posY = 0

  @Output() haveAdded = new EventEmitter<void>();
  @Output() haveSelected = new EventEmitter<Picto>();
  @Output() removeFromBandePhrase = new EventEmitter<string>();

  constructor(private pictoService: PictoService) { }

  onSelectPicto() {
    this.haveSelected.emit(this.picto);
  }


  ngOnInit(): void {
  }

  addPicto() {
    this.pictoService.addPicto(this.picto)
    this.haveAdded.emit();
  }

  performClick(){
    if(this.canBeDeleted){
      this.removeFromPhrase();
    }
    else{
      this.onSelectPicto();
    }
  }

  removeFromPhrase(){
    this.removeFromBandePhrase.emit(this.picto.id);
  }
}
