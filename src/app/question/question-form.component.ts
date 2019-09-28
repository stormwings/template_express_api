import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

 // Modelos
import { Question } from './question.model';

 // Otras Librerias
import Icons from './iconsForQuestions';

 // Informacion del Componente
@Component ({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css'],
  providers: [QuestionService]
})
 // Acciones del Componente
export class QuestionFormComponent implements OnInit {
  icons: Object[] = Icons;

  constructor(
    private questionService: QuestionService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/signin');
    }
  }

  getIconVersion(icon: any) {
    let version;
    if (icon.versions.font.includes('plain-wordmark')) {
      version = 'plain-wordmark';
    } else {
      version = icon.versions.font[0];
    }
    return version;
  } // evita espacios en blanco

  onSubmit(form: NgForm) {
    const newQuestion = new Question(
      form.value.title,
      form.value.description,
      new Date(),
      form.value.icon
    );
    this.questionService.addQuestion(newQuestion)
                        .subscribe(
                          ({ _id }) => this.router.navigate(['/questions', _id]),
                          this.authService.handleError
                        );
    form.resetForm();
  }
}
