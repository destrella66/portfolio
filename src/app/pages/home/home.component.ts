import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  nameSkills = ['Front-End', 'UX Designer', 'Angular Dev']

  devSkills: string = 'Davi Estrella';

  // const randomSkill = () => {
  //   for ( = 0; i <= this.devSkills.length; i += 1)
  //     this.devSkills.

  // }
  navbar = document.getElementById("nav-bar");
  onToggleMenu() {
    console.log(this.navbar)
  };
}
