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
  toggle = document.getElementById('toggle');
  navBar = document.getElementById('nav-bar');
  toggleNavBar = () => {


    this.toggle?.classList.toggle("active");
    this.navBar?.classList.toggle("active");
  }
}
