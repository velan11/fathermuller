import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { FacAssignmentPage } from "./fac-assignment";
// import { EditorModule } from "@tinymce/tinymce-angular";
import { QuillModule } from "ngx-quill";

@NgModule({
  declarations: [FacAssignmentPage],
  imports: [IonicPageModule.forChild(FacAssignmentPage), QuillModule],
  exports: [FacAssignmentPage]
})
export class FacAssignmentPageModule {}
