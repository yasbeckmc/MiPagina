import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisMascotasComponent } from './mis-mascotas/mis-mascotas.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  {path: "MisMascotas", component: MisMascotasComponent, title: "MisMascotas"},
  {path: "Home", component: HomeComponent, title: "Home"},
  { path: '**', redirectTo:'/Home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
