import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CrearViajeComponent } from './components/crear-viaje/crear-viaje.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'crear-viaje', component: CrearViajeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
