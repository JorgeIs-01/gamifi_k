import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { PerfilAlumnoComponent } from './components/perfils/perfil-alumno/perfil-alumno.component';
import { PerfilProfesorComponent } from './components/perfils/perfil-profesor/perfil-profesor.component';
import { RegistroAlumnoComponent } from './components/registro/registro-alumno/registro-alumno.component';
import { RegistroInicialComponent } from './components/registro/registro-inicial/registro-inicial.component';
import { RegistroProfesorComponent } from './components/registro/registro-profesor/registro-profesor.component';
import { LoginProfesorComponent } from './components/login-inicial/login-profesor/login-profesor.component';
import { LoginAlumnoComponent } from './components/login-inicial/login-alumno/login-alumno.component';
import { LoginComponent } from './components/login-inicial/login/login.component';
import { ModificarAlumnoComponent } from './components/modificar perfil/modificar-alumno/modificar-alumno.component';
import { ModificarProfesorComponent } from './components/modificar perfil/modificar-profesor/modificar-profesor.component';
import { ModificarPwdComponent } from './components/modificar perfil/modificar-pwd/modificar-pwd.component';






@NgModule({
  declarations: [
    AppComponent,
    RegistroAlumnoComponent,
    RegistroProfesorComponent,
    PerfilAlumnoComponent,
    PerfilProfesorComponent,
    RegistroInicialComponent,
    LoginComponent,
    HeaderComponent,
    LoginAlumnoComponent,
    LoginProfesorComponent,
    ModificarAlumnoComponent,
    ModificarProfesorComponent,
    ModificarPwdComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
