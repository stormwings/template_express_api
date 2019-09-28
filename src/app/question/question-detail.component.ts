import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionService } from './question.service';
import { ActivatedRoute } from '@angular/router'; // para obtener parametros de la url

// Modelos
import { Question } from './question.model';

// Informacion del Componente
@Component ({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
  providers: [QuestionService]
})

// Acciones del Componente
export class QuestionDetailComponent implements OnInit, OnDestroy {
  question?: Question;
  sub: any;

  loading = true;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.questionService
        .getQuestion(params.id)
        .then((question: Question) => {
          this.question = question;
          this.loading = false;
        });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
