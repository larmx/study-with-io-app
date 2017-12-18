import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "about": "Burt is a Bear.",
    "instructions": "Exercice de révisions sur les fonctions usuelles",
    "difficulty": 3,
    "questions": [
      {
        question: "Quelle est la première question ?",
        answers: [
          "Réponse 1",
          "Réponse 2",
          "Réponse 3",
          "Réponse 4",
        ],
        "explanations": "Le 3 est le meilleur chiffre !",
        answerIndex: 2,
        points: 30,
        time: 300,
        hint: "Voici un indice"
      }
    ],
    chapter: "fonctions",
    recommended: false
  };


  constructor() {
    let items = [
      {
        "name": "Calcul d'antécédents",
        "about": "Burt is a Bear.",
        "profilePic": "assets/img/chapters/functions.jpg",
        "instructions": "Exercice de révision sur les fonctions usuelles",
        "difficulty": 3,
        "questions": [
          {
            question: "Quelle est la première question ?",
            answers: [
              "Réponse 1",
              "Réponse 2",
              "Réponse 3",
              "Réponse 4",
            ],
            "explanations": "Le 3 est le meilleur chiffre !",
            answerIndex: 2,
            points: 30,
            time: 290,
            hint: "Voici un indice"
          }
        ],
        chapter: "Fonctions usuelles",
        recommended: false
      },
      {
        "name": "Variation de fonction",
        "profilePic": "assets/img/chapters/functions.jpg",
        "instructions": "Et post circenses Octobres annum idus multavit in insolentiae Magnentianae dubium annum in eius atque inter Arelate alia Arelate eius exulari oriente tricensimum aut multavit excarnificatum liquido aut siquid post imperii exulari hiemem apparatu et Arelate falsum in eius Arelate.",
        "difficulty": 2,
        "questions": [
          {
            question: "ƒ(x) = 2x+1",
            answers: [
              "est une fonction affine de coefficient directeur 2 et d'ordonnée à l'origine 1",
              "est une fonction affine de coefficient directeur 1 et d'ordonnée à l'origine 2",
              "n'est pas une fonction affine",
            ],
            "explanations": "Une fonction affine est de la forme ƒ(x) = ax+b où a est le coefficient à l'origine et b est l'ordonnée à l'origine !",
            answerIndex: 0,
            points: 30,
            time: 340,
            hint: "Voici un indice pour la question 1"
          },
          {
            question: "Quelle est la deuxième question ?",
            answers: [
              "Réponse 1",
              "Réponse 2",
              "Réponse 3",
              "Réponse 4",
            ],
            "explanations": "Le 3 est le meilleur chiffre !",
            answerIndex: 2,
            points: 30,
            time: 340,
            hint: "Voici un indice pour la question 2"
          }
        ],
        chapter: "Fonctions",
        recommended: false
      },
      {
        "name": "Exercice 3",
        "about": "Burt is a Bear.",
        "profilePic": "assets/img/chapters/functions.jpg",
        "instructions": "Description de l'exercice",
        "difficulty": 4,
        "questions": [
          {
            question: "Quelle est la première question ?",
            answers: [
              "Réponse 1",
              "Réponse 2",
              "Réponse 3",
              "Réponse 4",
            ],
            answerIndex: 2,
            points: 30,
            time: 300,
            hint: "Voici un indice"
          }
        ],
        chapter: "functions",
        recommended: false
      },
      {
        "name": "Exercice 4",
        "about": "Burt is a Bear.",
        "profilePic": "assets/img/chapters/functions.jpg",
        "instructions": "Description de l'exercice",
        "difficulty": 3,
        "questions": [
          {
            question: "Quelle est la première question ?",
            answers: [
              "Réponse 1",
              "Réponse 2",
              "Réponse 3",
              "Réponse 4",
            ],
            answerIndex: 2,
            points: 30,
            time: 300,
            hint: "Voici un indice"
          }
        ],
        chapter: "functions",
        recommended: false
      },
      {
        "name": "Exercice 1",
        "about": "Burt is a Bear.",
        "profilePic": "assets/img/chapters/functions.jpg",
        "instructions": "Description de l'exercice",
        "difficulty": 3,
        "questions": [
          {
            question: "Quelle est la première question ?",
            answers: [
              "Réponse 1",
              "Réponse 2",
              "Réponse 3",
              "Réponse 4",
            ],
            answerIndex: 2,
            points: 30,
            time: 300,
            hint: "Voici un indice"
          }
        ],
        chapter: "functions",
        recommended: false
      },
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
