import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams, ViewController } from 'ionic-angular';

import { Settings } from '../../../providers/providers';

@IonicPage()
@Component({
    selector: 'page-form',
  templateUrl: 'form.html'
})
export class FormModalPage {
    oldChapters: any;
    chapterList: any;
    controles: any;
    exercices: any;
    selectedChapters = [];
    // selectedChapters: {
    //     index: number,
    //     chapter : string,
    //     notions: any,
    //     selectedNotion: string,
    //     lesson: number,
    //     exercises: number
    // };
    // chapters: [{
    //     checked: boolean,
    //     chapter: string,
    //     notion: string,
    //     lesson: number,
    //     exercises: number
    // }[];
    chapters=[];
    notionCounter: number;

      constructor(
          public platform: Platform,
          public params: NavParams,
          public viewCtrl: ViewController
      ){
          this.notionCounter=1;

          for (let i = 0; i<this.notionCounter; i += 1) {
              this.selectedChapters.push({
                  chapter: '',
                  index: 0,
                  notions: null,
                  selectedNotion: '',
                  lesson: 1,
                  exercises: 1
              });
          }

          this.oldChapters = [
              {
                  chapter: 'Fonctions',
                  notion: 'Lecture graphique'
              },
              {
                  chapter: 'Fonctions',
                  notion: 'Sens de variation'
              }
          ]

          this.chapterList = [
              {
                  chapter: 'Fonctions',
                  notion: ['Lecture graphique', 'Fonctions linéaires', 'Fonctions affines',
                                'Sens de variation', 'Minimum et maximum']
              },
              {
                  chapter: 'Géométrie',
                  notion: ['Coordonnées', 'Configuration du plan', 'Equation de droite', 'Vecteurs']
              }
          ]

          this.exercices = [
              {
                  name: 'Trigonométrie',
                  resume: 'Révision des identités remarquables'
              }
          ]
          for (let i = 0; i<this.oldChapters.length; i += 1) {
              this.chapters.push({
                  checked: false,
                  chapter: '',
                  notion: '',
                  lesson: 1,
                  exercises: 1
              });
          }


          console.log(this.chapters);
      }

    dismiss() {
     this.viewCtrl.dismiss();
    }

    ngOnChanges() {
    console.log('Ng All Changes');
    }

    getChapter(index, k){
        this.selectedChapters[k].chapter= this.chapterList[index].chapter;
        this.selectedChapters[k].notions = this.chapterList[index].notion;
        console.log(this.selectedChapters[k].notions);
    }

    getNumber(num){
        return new Array(num);
    }

    newNotion(){
        this.notionCounter +=1;
        this.selectedChapters.push({
            chapter: '',
            index: 0,
            notions: null,
            selectedNotion: '',
            lesson:1,
            exercises:1
        });
    }

    getChanges(){
        console.log(this.chapters);
    }

    getCheck(bool, chapter, notion, index){
        if (bool){
            this.chapters[index].chapter = chapter;
            this.chapters[index].notion = notion;
        }else{
            this.chapters[index].chapter = '';
            this.chapters[index].notion = '';
        }
    }
    deleteNotion(){

    }
}
