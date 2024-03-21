import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tableData: string[] = [];
  folderData: string[] = [];

openintput: boolean= false;
openplus :boolean = false;

inputdata(){
  this.openintput = true;
}

inputData: string = '';

saveData() {
  console.log('Input Data Saved:', this.inputData);

}
clearInput() {
  this.inputData = '';
}

plusdata(){
this.openplus = true;
}


















}
