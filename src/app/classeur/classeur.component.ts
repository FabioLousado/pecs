import { Component, OnInit } from '@angular/core';
import { IntercallaireComponent } from '../intercallaire/intercallaire.component';
import { BandePhraseComponent } from '../bande-phrase/bande-phrase.component';
import { Picto } from '../classes/Picto';
import { ParamClasseurComponent } from '../param-classeur/param-classeur.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-classeur',
  standalone: true,
  imports: [IntercallaireComponent, BandePhraseComponent, ParamClasseurComponent, CommonModule],
  templateUrl: './classeur.component.html',
  styleUrl: './classeur.component.css'
})
export class ClasseurComponent implements OnInit {

  listPictoPhrase : Picto[] = []

  showSettings = false

  page = 0

  ngOnInit(): void {
  }

  sendToBandePhrase(picto : Picto){
    this.listPictoPhrase.push(picto)
  }

  changePage(cpt : number){
    this.page += cpt;
  }

  openSettings(){
    this.showSettings = !this.showSettings
  }

}
