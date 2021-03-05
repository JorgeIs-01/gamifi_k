import  { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app/app.component';
import { LoginAlumnoComponent } from './components/login-inicial/login-alumno/login-alumno.component';
import { LoginProfesorComponent } from './components/login-inicial/login-profesor/login-profesor.component';
import { LoginComponent } from './components/login-inicial/login/login.component';
import { ModificarAlumnoComponent } from './components/modificar perfil/modificar-alumno/modificar-alumno.component';
import { ModificarProfesorComponent } from './components/modificar perfil/modificar-profesor/modificar-profesor.component';
import { PerfilAlumnoComponent } from './components/perfils/perfil-alumno/perfil-alumno.component';
import { PerfilProfesorComponent } from './components/perfils/perfil-profesor/perfil-profesor.component';
import { RegistroAlumnoComponent } from './components/registro/registro-alumno/registro-alumno.component';
import { RegistroInicialComponent } from './components/registro/registro-inicial/registro-inicial.component';
import { RegistroProfesorComponent } from './components/registro/registro-profesor/registro-profesor.component';
import { ModificarPwdComponent } from './modificar-pwd/modificar-pwd.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'AppComponent', component: AppComponent },
  { path: 'perfil-alumno', component: PerfilAlumnoComponent },
  { path: 'perfil-profesor', component: PerfilProfesorComponent },
  { path: 'registro-alumno', component: RegistroAlumnoComponent },
  { path: 'registro-profesor', component: RegistroProfesorComponent },
  { path: 'registro-inicial', component: RegistroInicialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-alumno', component: LoginAlumnoComponent },
  { path: 'login-profesor', component: LoginProfesorComponent },
  { path: 'modificar-alumno', component: ModificarAlumnoComponent },
  { path: 'modificar-profesor', component: ModificarProfesorComponent },
  { path: 'modificar-pwd', component: ModificarPwdComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
