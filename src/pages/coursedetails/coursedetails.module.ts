import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoursedetailsPage } from './coursedetails';

@NgModule({
  declarations: [
    CoursedetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CoursedetailsPage),
  ],
})
export class CoursedetailsPageModule {}
