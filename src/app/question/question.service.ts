import { Injectable } from '@angular/core'; // agregar una notation para injectar una clase en los componentes
import { Question } from './question.model';
import { Answer } from '../answer/answer.model';
import { Http, Headers, Response } from '@angular/http'; // para que angular ayude a injectar el modulo
import { environment } from '../../environments/environment'; // apiUrl: 'http:// localhost:3000/api/'
import { Observable } from 'rxjs/Observable';
import * as urljoin from 'url-join'; // para unir los url en constructor de forma segura
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class QuestionService {

  private questionsUrl: string;

  constructor(private http: Http) {
    this.questionsUrl = urljoin(environment.apiUrl, 'questions'); // la ruta de donde llegan las preguntas en json
  }

  getQuestions(): Promise<void | Question[]> {// devuelve un array o un mensaje de error
    return this.http.get(this.questionsUrl)
                        .toPromise()
                        .then(response => response.json() as Question[])// convierte los json en preguntas (usando el "Question" model)
                        .catch(this.handleError);
  }

  getQuestion(id): Promise<void | Question> {
    const url = urljoin(this.questionsUrl, id);
    return this.http.get(url)
                        .toPromise()
                        .then(response => response.json() as Question)
                        .catch(this.handleError);
  }

  getToken() {
    const token = localStorage.getItem('token');
    return `?token=${token}`;
  }

  addQuestion(question: Question) {
    const body = JSON.stringify(question);
    console.log(body)
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const token = this.getToken();

    return this.http.post(this.questionsUrl + token, body, { headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  addAnswer(answer: Answer) {
    const answerConstructor = {
      description: answer.description,
      question: {
        _id: answer.question._id
      }
    };
    const body = JSON.stringify(answerConstructor);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const idString = answer.question._id.toString();
    const url = urljoin(this.questionsUrl, idString, 'answers');

    const token = this.getToken();

    return this.http.post(url + token, body, { headers })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  handleError(error: any) {
    const errMsg = error.message ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'ServerError';
      console.log(errMsg);
  }
}
