import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // tslint:disable-next-line: no-use-before-declare
  selectedPerson: any = nameList;

  // data
  nameList = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' }
  ];

  getSelectedElement(names: nameList) {
    this.selectedPerson = names;
  }
}

// tslint:disable-next-line: class-name
export class nameList {
  id: number;
  name: string;
}
