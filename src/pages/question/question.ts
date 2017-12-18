import { Component } from '@angular/core';
import { ModalController, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { Items } from '../../providers/providers';
import { ExerciseService } from "../../services/active-exercise/active-exercise";

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html'
})
export class QuestionPage {
  question: any;
  id: number;
  answered: boolean;
  rightAnswerId: number;
  numberOfQuestions: number;
  answerId: number;
  points: number;
  explanations: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public items: Items,
              public exerciseService: ExerciseService,
              public view: ViewController,
              public modalCtrl: ModalController) {
    const exercise = this.exerciseService.getActiveExercise();
    this.numberOfQuestions = exercise.questions.length;

    this.answered = false;

    this.question = navParams.get('question') || items.defaultItem.questions[0];
    this.id = this.navParams.get('id');
    this.rightAnswerId = this.question.answerIndex;
    this.points = this.question.points;
    this.explanations = this.question.explanations;

  }

  nextPage() {
    const exercise = this.exerciseService.getActiveExercise();
    const nextQuestion = exercise.questions[this.id+1];
    const viewId = this.navCtrl.indexOf(this.view);
    console.log("Question n°:", this.id+1, "out of ", exercise.questions.length);
    console.log("FINISHING EXO:", this.id === exercise.questions.length-1);
    if (this.id === exercise.questions.length-1) {
      this.navCtrl.pop();
    } else {
      let modal = this.modalCtrl.create('QuestionPage', {
        question: nextQuestion,
        id: this.id+1
      });
      modal.present();
      // this.navCtrl.push('QuestionPage', {
      //   question: nextQuestion,
      //   id: this.id+1
      // });
      this.navCtrl.remove(viewId);
    }

  }

  getStyle(i, background) {
    if(this.answered && i === this.rightAnswerId) {
      return background ? "green" : "white";
    } else if (this.answered && i !== this.rightAnswerId) {
      if (i === this.answerId) {
        return background ? "red" : "white";
      }
      return background ? "lightgrey" : "";;
    }
    return "";
  }

  hasAnswered(i) {
    this.answered = true;
    this.answerId = i;
  }

  dismiss() {
    this.view.dismiss();
  }


}
