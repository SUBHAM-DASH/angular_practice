import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  editorData!: any;

  public Editor = ClassicEditor;

  // public onReady(editor: any) {
  //   editor.ui
  //     .getEditableElement()
  //     .parentElement.insertBefore(
  //       editor.ui.view.toolbar.element,
  //       editor.ui.getEditableElement()
  //     );
  // }

  constructor() {}

  ngOnInit(): void {}

  getData() {
    console.log(this.editorData);
  }

  onChange({ editor }: ChangeEvent) {
    this.editorData = editor.getData();
  }

}

//https://ckeditor.com/docs/ckeditor5/latest/installation/getting-started/frameworks/angular.html

//Documentation Link
