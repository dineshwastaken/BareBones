import { Component } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  /* Home variables */
  pawClick = 0

  constructor(
    private cms: CommonServiceService
  ) { }

  showtoast() {
    this.pawClick += 1
    this.cms.showtoastopen("Hey there, welcome home! " + this.pawClick, "🍕")
  }
}
