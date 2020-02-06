import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { StudAssignmentsPage } from "./stud-assignments";
import { FroalaEditorModule, FroalaViewModule } from "angular-froala-wysiwyg";

@NgModule({
  declarations: [StudAssignmentsPage],
  imports: [
    IonicPageModule.forChild(StudAssignmentsPage),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  exports: [StudAssignmentsPage]
})
export class StudAssignmentsPageModule {}
