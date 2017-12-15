import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "about": "Burt is a Bear.",
    "instructions": "Natura amicitia posset dandis ex in desiderata voluntarium causa Nam ab sed et nihil antiquior est ex quidem coniungendam est.",
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
        "name": "Exercice 1",
        "about": "Burt is a Bear.",
        "profilePic": "assets/img/chapters/functions.jpg",
        "instructions": "Natura amicitia posset dandis ex in desiderata voluntarium causa Nam ab sed et nihil antiquior est ex quidem coniungendam est.",
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
        chapter: "functions",
        recommended: false
      },
      {
        "name": "Exercice 2",
        "about": "Burt is a Bear.",
        "profilePic": "assets/img/chapters/functions.jpg",
        "instructions": "Description de l'exercice",
        "difficulty": 2,
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
        chapter: "functions",
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
