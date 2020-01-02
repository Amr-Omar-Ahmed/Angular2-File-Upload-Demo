import { Component } from '@angular/core';
import { FileUploader, FileLikeObject, FilterFunction, FileUploaderOptions } from 'ng2-file-upload';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: string;

  constructor() {
    this.uploader = new FileUploader({
      url: URL,
      disableMultipart: true, // 'DisableMultipart' must be 'true' for formatDataFunction to be called.
      formatDataFunctionIsAsync: true,
      // filters: [
      //   {
      //     name: "a",
      //     fn: (item?: FileLikeObject, options?: FileUploaderOptions) => {
      //       debugger;
      //       return true;
      //     }
      //   }
      // ],
      // autoUpload: true,
      // allowedFileType: ['.pdf'],
      // removeAfterUpload: true,


      formatDataFunction: async (item) => {
        debugger;
        return new Promise((resolve, reject) => {
          debugger
          resolve({
            name: item._file.name,
            length: item._file.size,
            contentType: item._file.type,
            date: new Date()
          });
        });
      }
    });


    this.hasBaseDropZoneOver = true;
    this.hasAnotherDropZoneOver = true;

    this.response = '';

    this.uploader.response.subscribe(res => this.response = res);
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  onFileSelected(e: any): void {
    debugger;
    // this.hasAnotherDropZoneOver = e;
  }

  onErrorItem(e: any): void {
    debugger;
    // this.hasAnotherDropZoneOver = e;
  }
}