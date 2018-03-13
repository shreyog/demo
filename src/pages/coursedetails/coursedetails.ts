import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrerequisitePage } from '../prerequisite/prerequisite';

/**
 * Generated class for the CoursedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coursedetails',
  templateUrl: 'coursedetails.html',
})
export class CoursedetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursedetailsPage');
  }
java()
{
  this.navCtrl.push(PrerequisitePage);
}
game()
{
  this.navCtrl.push(PrerequisitePage);
}

}
