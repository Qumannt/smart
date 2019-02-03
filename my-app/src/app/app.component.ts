import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public   isCollapsed = false;
public messageStyle = {
  "display_none": this.isCollapsed
}


    toggleCollapsed(): void {
      this.isCollapsed = !this.isCollapsed;
    }
}
