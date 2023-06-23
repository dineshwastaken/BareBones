import { Component } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-navbarmain',
  templateUrl: './navbarmain.component.html',
  styleUrls: ['./navbarmain.component.css']
})
export class NavbarmainComponent {
  /* Component variables */
  pawClick = 0
  currentsection = 'Home'

  constructor(
    private cms: CommonServiceService
  ) { }

  navigateSection(curTab: any) {
    console.log(curTab)
    this.currentsection = curTab.tab.textLabel
  }

  showtoast() {
    this.pawClick += 1
    this.cms.showtoastopen("Hey there, welcome home! " + this.pawClick, "🍕")
  }
}
