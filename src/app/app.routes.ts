import { Routes } from '@angular/router';
import { IntercallaireComponent } from './intercallaire/intercallaire.component';
import { PictoComponent } from './picto/picto.component';
import { ClasseurComponent } from './classeur/classeur.component';

export const routes: Routes = [
    {path : 'picto', component : PictoComponent},
    {path : 'classeur', component : ClasseurComponent},
    {path : 'intercallaire', component : IntercallaireComponent}
];
