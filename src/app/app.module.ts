// Modulos de funcionamiento
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component'; // componente principal

// Modulos de Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http'; // para hacer injections en cualquier service

// Modulos de Material Angular
import { MaterialModule } from './material.module'; // conjunto de Modulos

// Otras Librerias
import 'hammerjs';
import { MomentModule } from 'angular2-moment';

// Routing
import { Routing } from './app.routing';

// Mis Componentes
import { QuestionDetailComponent } from './question/question-detail.component';
import { AnswerFormComponent } from './answer/answer-form.component';
import { SigninScreenComponent } from './auth/signin-screen.component';
import { SignupScreenComponent } from './auth/signup-screen.component';
import { QuestionListComponent } from './question/question-list.component';
import { QuestionFormComponent } from './question/question-form.component';

// Servicios
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent, // componente por defecto
    QuestionDetailComponent,
    AnswerFormComponent,
    SigninScreenComponent,
    SignupScreenComponent,
    QuestionListComponent,
    QuestionFormComponent
  ], // componentes propios
  imports: [
    BrowserModule, // por defecto
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    HttpModule
  ], // imports de componentes externos
  providers: [AuthService],
  bootstrap: [AppComponent]
})// aquí van todos los componentes que vamos a utilizar en el FrontEnd

export class AppModule { }
