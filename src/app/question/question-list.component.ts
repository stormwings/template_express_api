import { Component, OnInit } from '@angular/core';
import { QuestionService } from './question.service';

// Modelos
import { Question } from './question.model';

// Test Pregunta
// const questionExample = new Question(
//   "Como reutilizo un componente en android?",
//   "Miren, esta es mi pregunta...",
//   new Date(),
//   // 'devicon-android-plain'
//   'none'
// )

// Informacion del Componente
@Component ({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
  providers: [QuestionService]
})

// Acciones del Componente
export class QuestionListComponent implements OnInit {

  constructor(
    private questionService: QuestionService
  ) {}

  questions: Question[];
  loading = true;

  ngOnInit() {
    this.questionService
      .getQuestions()
      .then((questions: Question[]) => {
        this.questions = questions;
        this.loading = false; // spinner off
      });
  }
 }
