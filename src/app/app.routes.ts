import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { EditarComponent } from './pages/editar/editar.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detalhes/:id', component: DetalhesComponent },
    { path: 'cadastro', component: CadastrarComponent },
    { path: 'editar/:id', component: EditarComponent }
];
