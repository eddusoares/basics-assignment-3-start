import { Component } from '@angular/core';

@Component({
  selector: 'app-display-options',
  templateUrl: './display-options.component.html',
  styleUrls: ['./display-options.component.css']
})
export class DisplayOptionsComponent {
   clicks: number[] = [];
   clickNumber = 0;
   toggle: boolean = false;


   registerClick(event: any){
    this.clickNumber++;
    this.clicks.push(this.clickNumber);
    this.toggle = !this.toggle;
  }


  
}


