import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  showtoastopen(message: string, action: string = "close") {
    console.log("clicked")
    this.snackBar.open(message, action)
  }
}
