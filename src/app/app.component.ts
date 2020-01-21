import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fore-example';

  private username = '';
  private passwrd = '';
  private login = false;
  private alert = '';

  clickedButton() {
    if(this.username == 'Maxtomooshimasu' && this.passwrd == 'nihongo') {
      this.login = true;
      this.alert = "Oospeshně jste se přihlásili xD"
    } else {
      alert("Spatne zadane uzivatelske jmeno nebo heslo.");
    }
  }
}