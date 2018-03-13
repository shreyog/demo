import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuizPage} from '../quiz/quiz';
/**
 * Generated class for the PrerequisitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prerequisite',
  templateUrl: 'prerequisite.html',
})
export class PrerequisitePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrerequisitePage');
  }
submit()
{
  this.navCtrl.push(QuizPage);
}
}
