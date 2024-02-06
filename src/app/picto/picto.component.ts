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

  @Output() haveAdded = new EventEmitter<void>();

  constructor(private pictoService: PictoService) { }

  ngOnInit(): void {
  }

  addPicto() {
    this.pictoService.addPicto(this.picto)
    this.haveAdded.emit();
  }
}
