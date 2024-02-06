import { Routes } from '@angular/router';
import { IntercallaireComponent } from './intercallaire/intercallaire.component';
import { PictoComponent } from './picto/picto.component';

export const routes: Routes = [
    {path : 'picto', component : PictoComponent},
    {path : 'intercallaire', component : IntercallaireComponent}
];
