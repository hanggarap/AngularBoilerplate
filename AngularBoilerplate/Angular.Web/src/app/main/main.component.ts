import { Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html'
})

export class MainComponent {
  title = 'app';
  toggle: boolean = false;
  onLabel: string = "i am";
  offLabel: string = "i am not";
}
