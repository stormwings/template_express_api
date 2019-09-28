import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

// Modelos
import { Answer } from './answer.model';
import { Question } from '../question/question.model';
import { User } from '../auth/user.model';
import { QuestionService } from '../question/question.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

// Otras Librerias
// import SweetScroll from 'sweet-scroll';

// Informacion del Componente
@Component ({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css'],
  providers: [QuestionService]
})

// Acciones del Componente
export class AnswerFormComponent {
  @Input() question: Question;
  // extrae la 'question' cargada en el componente 'question-detail'
  // sweetScroll: SweetScroll;

  constructor(
    private questionService: QuestionService,
    private authService: AuthService,
    private router: Router
  ) {
    // this.sweetScroll = new SweetScroll();
  }

  onSubmit(form: NgForm) {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/signin');
    }

    const answer = new Answer(
      form.value.description,
      this.question
    ); // obtiene los datos del formulario y crea una nueva respuesta
    this.questionService
        .addAnswer(answer)
        .subscribe(
          a => {
            this.question.answers.unshift(a);
            // this.sweetScroll.to('#title');
          },
          this.authService.handleError
        );
    form.reset();
  }
}
