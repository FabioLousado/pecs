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

  posX = 0
  posY = 0

  @Output() haveAdded = new EventEmitter<void>();

  constructor(private pictoService: PictoService) { }

  ngOnInit(): void {
  }

  addPicto() {
    this.pictoService.addPicto(this.picto)
    this.haveAdded.emit();
  }

  onMouseDown(event: MouseEvent) {
    // Stockez les coordonnées de la souris au moment du clic
    let startX = event.clientX;
    let startY = event.clientY;

    // Écoutez les mouvements de la souris et mettez à jour les coordonnées en conséquence
    const mouseMoveListener = (moveEvent: MouseEvent) => {
      // Calculez le déplacement par rapport aux coordonnées du clic initial
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      // Mettez à jour les coordonnées de la div
      this.posX += deltaX;
      this.posY += deltaY;

      // Mettez à jour les coordonnées de départ pour le prochain déplacement
      startX = moveEvent.clientX;
      startY = moveEvent.clientY;
    };

    // Écoutez l'événement mousemove pour suivre les mouvements de la souris
    document.addEventListener('mousemove', mouseMoveListener);

    // Supprimez l'écouteur de mouvement lorsque la souris est relâchée
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', mouseMoveListener);
    });
  }
}
